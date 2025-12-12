import express from 'express';
import { login } from '../controllers/auth.controller.js';

const routes = express.Router();

// Ruta de ejemplo para login
routes.post('/login',login)

export default routes;