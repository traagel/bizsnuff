import fetch from 'node-fetch';
import { fetchThreads } from '../services/fourChanService.js';

const cache = new Map();

export async function displayThreads(req, res) {
  // Get the keyword from query parameters or default to an empty string
  const keyword = req.query.keyword || '';
  const avoidImages = req.query.avoidImages === 'on';

  console.log(`Received request for keyword: ${keyword}, avoidImages: ${avoidImages}`);

  // Check if the keyword is in the cache
  let cachedData = cache.get(keyword);
  if (cachedData) {
    console.log(`Cache hit for keyword: ${keyword}`);
  } else {
    console.log(`Cache miss for keyword: ${keyword}`);
    try {
      // Fetch threads using the provided keyword
      cachedData = await fetchThreads(keyword);
      // Store the fetched data in the cache
      cache.set(keyword, cachedData);
    } catch (error) {
      console.error(`Error fetching threads for keyword: ${keyword}`, error);
      res.status(500).send('Error fetching threads');
      return;
    }
  }

  const { filteredThreads, popularThreads } = cachedData;

  // List of popular keywords (you can customize this list)
  const popularKeywords = ['doge', 'btc', 'eth', 'crypto', 'stocks'];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Threads mentioning "${keyword}"</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <h1>4chan /biz/ Thread Search</h1>
        <form action="/" method="get" class="search-form">
            <input type="text" name="keyword" placeholder="Enter keyword(s)" value="${keyword}" required>
            <label>
                <input type="checkbox" name="avoidImages" ${avoidImages ? 'checked' : ''}>
                Avoid loading images (faster)
            </label>
            <button type="submit">Search</button>
        </form>
        <div class="popular-keywords">
            <p>Popular Keywords:</p>
            ${popularKeywords.map(k => `<a href="/?keyword=${encodeURIComponent(k)}">${k}</a>`).join(', ')}
        </div>
        ${keyword ? `
        ${popularThreads.length > 0 ? `
        <ul class="threads">
            ${popularThreads.map(thread => `
                <li class="thread">
                    <div class="thread-op">
                        <h3><a href="https://boards.4channel.org/biz/thread/${thread.id}" target="_blank">${thread.subject}</a></h3>
                        ${!avoidImages && thread.image ? `<a href="https://boards.4channel.org/biz/thread/${thread.id}" target="_blank"><img src="${thread.image}" alt="Thread Image" class="thread-image"></a>` : ''}
                        <p class="thread-comment">${thread.comment}</p>
                        <span class="thread-replies">Replies: ${thread.replies}</span>
                    </div>
                    ${thread.posts.length > 0 ? `
                    <h4>Popular Posts</h4>
                    <ul class="posts">
                        ${thread.posts.map(post => `
                            <li class="post">
                                ${!avoidImages && post.image ? `<a href="https://boards.4channel.org/biz/thread/${thread.id}#p${post.id}" target="_blank"><img src="${post.image}" alt="Post Image" class="post-image"></a>` : ''}
                                <p>${post.comment}</p>
                                <span class="post-replies">Replies: ${post.replyCount}</span>
                                <a href="https://boards.4channel.org/biz/thread/${thread.id}#p${post.id}" target="_blank" class="post-link">View Post</a>
                            </li>
                        `).join('')}
                    </ul>
                    ` : ''}
                </li>
            `).join('')}
        </ul>
        ` : `<p>No threads found for "${keyword}".</p>`}
        ` : '<h2>Please enter a keyword to search.</h2>'}
    </body>
    </html>
  `);
}

export async function proxyImage(req, res) {
  const imageName = req.params.imageName;
  const imageUrl = `https://i.4cdn.org/biz/${imageName}`;

  try {
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      res.status(404).send('Image not found');
      return;
    }

    res.set('Content-Type', 'image/jpeg');
    imageResponse.body.pipe(res);
  } catch (error) {
    console.error(`Error fetching image: ${imageName}`, error);
    res.status(500).send('Error fetching image');
  }
}
