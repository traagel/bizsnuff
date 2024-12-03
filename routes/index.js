import express from 'express';
import { displayThreads, proxyImage } from '../controllers/threadController.js'; // Include .js extension

const router = express.Router();

// Route to display results
router.get('/', (req, res, next) => {
  console.log(`Handling route: GET /`);
  next();
}, displayThreads);

// Proxy route to fetch images
router.get('/proxy-image/:imageName', (req, res, next) => {
  console.log(`Handling route: GET /proxy-image/${req.params.imageName}`);
  next();
}, proxyImage);

export default router;
