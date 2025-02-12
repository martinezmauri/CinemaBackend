import User from "../models/User.js";

class UserRepository {
  async findAll() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error("Error al obtener los usuarios.");
    }
  }

  async findById(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      throw new Error("Error al obtener el usuario.");
    }
  }

  async findByEmail(email) {
    try {
      const user = await User.findOne({ email: email });

      return user;
    } catch (error) {
      throw new Error("Error al obtener el usuario.");
    }
  }

  async save(user) {
    const updated = await User.findByIdAndUpdate(user._id, user, { new: true });
    return updated;
  }
}

export default UserRepository;
