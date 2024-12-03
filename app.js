import express from 'express';
import routes from './routes/index.js'; // Include .js extension for ES modules
import compression from 'compression'; // Add compression middleware
import morgan from 'morgan'; // Add morgan for logging

const app = express();
const PORT = 3000;

// Use compression middleware
app.use(compression());

// Use morgan middleware for logging incoming requests
app.use(morgan('combined'));

// Serve static files for CSS
app.use(express.static('public'));

// Use routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
