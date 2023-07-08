import express, { Router } from 'express'
import register,{ login } from '../controller/patient.controller.js';
const router = Router();

router.get('/login', login);
router.post('/register', register);


export default router;