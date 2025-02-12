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
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;
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

    if (!regexEmail.test(email)) {
      return res
        .status(400)
        .json({ error: "El email no tiene un formato válido." });
    }

    if (!regexPassword.test(password)) {
      return res.status(400).json({
        error:
          "El password debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula y un símbolo.",
      });
    }

    next();
  }
}

export default ValidationAuth;
