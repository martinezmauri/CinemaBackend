import User from "../models/User.js";

class AuthRepository {
  async register(user) {
    try {
      const createdUser = await User.create(user);

      return createdUser;
    } catch (error) {
      return error;
    }
  }

  async login() {}
}

export default AuthRepository;
