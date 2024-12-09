class ValidationAuth {
  static validationDataLogin(req, res, next) {
    const { email, password } = req.body;
    if (!email || typeof email !== "string") {
      return res
        .status(400)
        .json({ error: "El email es obligatorio y debe ser un string." });
    }
    if (!password || typeof password !== "string") {
      return res
        .status(400)
        .json({ error: "El password es obligatorio y debe ser un string." });
    }
    next();
  }

  static validationDataRegister(req, res, next) {
    const { name, password, email, img_profile } = req.body;

    if (!name || typeof name !== "string") {
      return res
        .status(400)
        .json({ error: "El nombre es obligatorio y debe ser un string." });
    }

    if (!password || typeof password !== "string") {
      return res
        .status(400)
        .json({ error: "El password es obligatorio y debe ser un string." });
    }

    if (!email || typeof email !== "string") {
      return res
        .status(400)
        .json({ error: "El email es obligatorio y debe ser un string." });
    }

    if (!img_profile) {
      return res
        .status(400)
        .json({ error: "La imagen de perfil es oblitoria." });
    }
    next();
  }
}

export default ValidationAuth;
