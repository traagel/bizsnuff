// routes/index.js
import express from 'express';
import { displayThreads, proxyImage } from '../controllers/threadController.js'; // Include .js extension

const router = express.Router();

// Route to display results
router.get('/', displayThreads);

// Proxy route to fetch images
router.get('/proxy-image/:imageName', proxyImage);

export default router;
