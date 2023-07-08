import express, { Router } from 'express'
import register, { login } from '../controller/doctor.controller.js';

const router = Router();

router.post('/register', register);
router.get('/login', login);
// router.post('/login', login);

export default router;