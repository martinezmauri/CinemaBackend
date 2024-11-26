import AuthRepository from "../repository/AuthRepository.js";
import UserService from "./UserService.js";
import bcrypt from "bcryptjs";

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
    this.userService = new UserService();
  }

  async register(user) {
    const exist = await this.userService.findByEmail(user.email);

    if (exist === false) return false;

    const hash = bcrypt.hashSync(user.password, 10);

    const userWithHash = {
      ...user,
      password: hash,
    };
    return await this.authRepository.register(userWithHash);
  }
  login() {}
}

export default AuthService;
