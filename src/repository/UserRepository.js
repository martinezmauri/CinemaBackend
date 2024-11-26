import User from "../models/User.js";

class UserRepository {
  async findAll() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      return error;
    }
  }

  async findById(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      return error;
    }
  }

  async findByEmail(email) {
    try {
      const user = await User.findOne({ email: email });

      return user;
    } catch (error) {}
  }
}

export default UserRepository;
