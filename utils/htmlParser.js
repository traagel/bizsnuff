import { parse } from 'node-html-parser';

export function getRepliesTo(comment) {
  const replies = [];
  const root = parse(comment);

  console.log(`Parsing HTML comment: ${comment}`);

  // Find all <a> tags with class "quotelink"
  const quoteLinks = root.querySelectorAll('a.quotelink');
  quoteLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#p')) {
      const postNo = parseInt(href.substring(2), 10); // Remove '#p' and parse the number
      if (!isNaN(postNo)) {
        replies.push(postNo);
      }
    }
  });

  console.log(`Found replies: ${replies}`);

  return replies;
}
