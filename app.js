// app.js
import express from 'express';
import routes from './routes/index.js'; // Include .js extension for ES modules

const app = express();
const PORT = 3000;

// Serve static files for CSS
app.use(express.static('public'));

// Use routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
