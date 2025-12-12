import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = "fh78fg1971rg3"// process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
  const user = {id: userData.id, email: userData.email};
  const expiration = { expiresIn: '1h' };
  return jwt.sign(user, secret_key, expiration);
}

// const token = generateToken({id: 1, email: 'test@gmail.com'});
// console.log("Generated JWT Token:", token);