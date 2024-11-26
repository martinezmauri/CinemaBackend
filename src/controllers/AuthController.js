import AuthService from "../services/AuthService.js";

class AuthController {
  constructor() {
    this.authService = new AuthService();

    this.register = this.register.bind(this);
  }

  async register(req, res) {
    try {
      const { name, password, email, img_profile, role } = req.body;

      const response = await this.authService.register({
        name,
        password,
        email,
        img_profile,
        role,
      });

      if (response === false) {
        res.status(400).json({ message: "El email ya existe" });
        return;
      }
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  login() {}
}

export default AuthController;
