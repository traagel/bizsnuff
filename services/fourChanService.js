import fetch from 'node-fetch';
import { getRepliesTo } from '../utils/htmlParser.js';

const CATALOG_URL = "https://a.4cdn.org/biz/catalog.json";
const THREAD_BASE_URL = "https://a.4cdn.org/biz/thread/";

export async function fetchThreads(keyword) {
  try {
    console.log(`Fetching threads with keyword: ${keyword}`);
    const response = await fetch(CATALOG_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const catalog = await response.json();
    console.log(`Received response for threads with keyword: ${keyword}`);
    const filteredThreads = [];
    const popularThreads = [];

    // If keyword is empty, return empty results
    if (!keyword) {
      return { filteredThreads, popularThreads };
    }

    // Filter threads by keyword
    catalog.forEach(page => {
      page.threads.forEach(thread => {
        if (
          (thread.sub && thread.sub.toLowerCase().includes(keyword.toLowerCase())) ||
          (thread.com && thread.com.toLowerCase().includes(keyword.toLowerCase()))
        ) {
          const threadData = {
            id: thread.no,
            subject: thread.sub || "No Subject",
            comment: thread.com || "No Comment",
            link: `https://boards.4chan.org/biz/thread/${thread.no}`,
            image: thread.tim ? `/proxy-image/${thread.tim}s.jpg` : null,
            replies: thread.replies || 0,
          };
          filteredThreads.push(threadData);

          // Add to popularThreads if replies > 0
          if (thread.replies > 0) {
            popularThreads.push(threadData);
          }
        }
      });
    });

    // Fetch all posts for popular threads in parallel
    await Promise.all(popularThreads.map(async (thread) => {
      const posts = await fetchThreadPosts(thread.id);
      // Exclude the original post (OP) and include posts that have more than 1 reply
      thread.posts = posts.filter(post => post.id !== thread.id && post.replyCount > 1);
    }));

    return { filteredThreads, popularThreads };
  } catch (error) {
    console.error("Error fetching threads:", error);
    return { filteredThreads: [], popularThreads: [] };
  }
}

export async function fetchThreadPosts(threadId) {
  const threadUrl = `${THREAD_BASE_URL}${threadId}.json`;
  try {
    console.log(`Fetching posts for thread ID: ${threadId}`);
    const response = await fetch(threadUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const threadData = await response.json();
    console.log(`Received response for posts in thread ID: ${threadId}`);
    const posts = threadData.posts;

    // Map of post numbers to reply counts
    const replyCountMap = {};

    // Initialize replyCountMap
    posts.forEach(post => {
      replyCountMap[post.no] = 0;
    });

    // Build the replyCountMap by parsing the comments
    posts.forEach(post => {
      if (post.com) {
        const repliesTo = getRepliesTo(post.com);
        repliesTo.forEach(replyNo => {
          if (replyCountMap[replyNo] !== undefined) {
            replyCountMap[replyNo]++;
          }
        });
      }
    });

    // Build the posts array with reply counts
    const postsWithReplies = posts.map(post => ({
      id: post.no,
      comment: post.com || "No Comment",
      image: post.tim ? `/proxy-image/${post.tim}s.jpg` : null,
      replyCount: replyCountMap[post.no] || 0,
    }));

    return postsWithReplies;
  } catch (error) {
    console.error(`Error fetching posts for thread ${threadId}:`, error);
    return [];
  }
}
