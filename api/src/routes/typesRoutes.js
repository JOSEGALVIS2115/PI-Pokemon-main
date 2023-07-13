import { Router } from 'express';
import { getTypes } from '../controllers/typesControllers';

const router = Router();

router.get('/', getTypes);
 
export default router;