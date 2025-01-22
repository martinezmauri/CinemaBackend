import User from "../models/User.js";
import UserRepository from "../repository/UserRepository.js";
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findById(id) {
    return await this.userRepository.findById(id);
  }

  async findByEmail(email) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  async update(id, user) {
    const userById = await this.findById(id);
    if (!userById) {
      throw new Error("El usuario no existe.");
    }
    const userUpdated = {
      ...userById.toObject(),
      ...user,
    };
    return this.userRepository.save(userUpdated);
  }
}

export default UserService;
