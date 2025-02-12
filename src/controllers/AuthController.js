import AuthService from "../services/AuthService.js";

class AuthController {
  constructor() {
    this.authService = new AuthService();

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(req, res) {
    try {
      const { name, password, confirmPassword, email, img_profile } = req.body;

      const response = await this.authService.register({
        name,
        password,
        confirmPassword,
        email,
        img_profile,
      });
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const response = await this.authService.login(email, password);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default AuthController;
