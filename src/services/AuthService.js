import AuthRepository from "../repository/AuthRepository.js";
import UserService from "./UserService.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CloudService from "./CloudService.js";

dotenv.config({ path: ".env" });

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
    this.userService = new UserService();
    this.cloudService = new CloudService();
  }

  async register(user) {
    const userWithEmail = await this.userService.findByEmail(user.email);

    if (userWithEmail) {
      throw new Error("El correo ya existe");
    }

    if (user.password !== user.confirmPassword) {
      throw new Error("Las contraseñas deben coincidir.");
    }

    const hash = await bcrypt.hash(user.password, 10);

    if (!hash) {
      throw new Error("Error al registrar al usuario.");
    }
    let secure_url = "";
    if (user.img_profile) {
      secure_url = await this.cloudService.uploadImage(user.img_profile);
    } else {
      secure_url = process.env.DEFAULT_IMAGE;
    }

    const userWithHash = {
      ...user,
      password: hash,
      img_profile: secure_url,
    };

    await this.authRepository.register(userWithHash);
    return user.email;
  }

  async login(email, password) {
    const userFound = await this.userService.findByEmail(email);
    if (!userFound) {
      throw new Error("Email y/o contraseña incorrecta.");
    }
    const verify = await bcrypt.compare(password, userFound.password);
    if (!verify) {
      throw new Error("Email y/o contraseña incorrectas.");
    }

    const user = {
      id: userFound.id,
      email: userFound.email,
      type: userFound.role,
    };
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(user, secret, { expiresIn: "3h" });
    return {
      success: true,
      token,
    };
  }
}

export default AuthService;
