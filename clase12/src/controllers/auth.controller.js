import { generateToken } from "../data/tokentest.js";

export const login = (req, res) => {
    const { email, password } = req.body;
  if (email === "test@gmail.com"//default_user.email
      && password === "123456"){//default_user.password) {
    const user = { id: 1, email: "test@gmail.com" };
        const token = generateToken(user);
        console.log("Token generado para el usuario:", token);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
}