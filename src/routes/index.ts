import { Router } from 'express';
import UserRouter from './Users';
import ChipRouter from './Chips';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/chips', ChipRouter);

// Export the base-router
export default router;
