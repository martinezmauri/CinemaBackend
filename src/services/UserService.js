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

    if (user) {
      return false;
    }
    return true;
  }
}

export default UserService;
