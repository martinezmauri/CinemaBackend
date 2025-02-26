import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: ".env" });

class ValidationJwt {
  static validationToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    try {
      if (!token) {
        throw new Error("Token invalido");
      }

      const secret = process.env.JWT_SECRET;
      const payload = jwt.verify(token, secret);
      next();
    } catch (error) {
      res.status(400).json("Token invalido");
    }
  }
}

export default ValidationJwt;
