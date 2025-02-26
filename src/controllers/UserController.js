import UserService from "../services/UserService.js";
class UserController {
  constructor() {
    this.userService = new UserService();

    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
  }

  async findAll(req, res) {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await this.userService.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id, user } = req.body;
      const userUpdated = await this.userService.update(id, user);
      res.status(201).json(userUpdated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
export default UserController;
