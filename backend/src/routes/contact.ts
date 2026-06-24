import { Router } from 'express';
import { submitContactForm } from '../controllers/contact';

const router = Router();

// POST /api/contact
router.post('/', submitContactForm);

export default router;
