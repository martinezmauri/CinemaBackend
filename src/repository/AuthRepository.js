import User from "../models/User.js";

class AuthRepository {
  async register(user) {
    const createdUser = await User.create(user);

    return createdUser;
  }
}

export default AuthRepository;
