import UserService from "../services/UserService.js";
class UserController {
  constructor() {
    this.userService = new UserService();

    //Asegura que los métodos mantengan el contexto de `this`
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
  }

  findAll(req, res) {
    try {
      const users = this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  findById(req, res) {
    try {
      const { id } = req.params;
      const user = this.userService.findById(id);
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
