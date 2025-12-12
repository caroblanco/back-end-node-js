import jwt from 'jsonwebtoken';
import 'dotenv/config';


const secret_key =  "fh78fg1971rg3";

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
  const authHeader = req.headers ? (req.headers.authorization || req.headers['authorization']) : undefined;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  // Esperamos el formato: "Bearer <token>"
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0].toLowerCase() !== 'bearer') {
    return res.status(400).json({ error: 'Invalid Authorization header format. Expected "Bearer <token>"' });
  }

  const token = parts[1];

  if (!token) return res.status(401).json({ error: 'Token missing' });

  // DEBUG: mostrar token y clave usada para verificar (temporal)
  console.log('--- auth debug ---');
  console.log('Authorization header:', authHeader);
  console.log('Extracted token (first 20 chars):', token ? token.slice(0,20) + (token.length>20?'...':'') : token);
  console.log('JWT secret in process.env:', !!process.env.JWT_SECRET_KEY);
  console.log('Using secret_key (first 10 chars):', secret_key ? secret_key.slice(0,10) + (secret_key.length>10?'...':'') : secret_key);

  jwt.verify(token, secret_key, (err) => {
    if (err) {
      console.log('JWT verify error:', err.message || err);
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    next();
  });
}