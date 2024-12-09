class ValidationUser {
  static validationFind(req, res, next) {
    const { id } = req.params;

    if (!id || typeof id !== "string" || id.trim() === "") {
      return res
        .status(400)
        .json({ error: "El id es obligatorio y debe ser un string." });
    }
    next();
  }

  static validationUpdate(req, res, next) {
    const { id, user } = req.body;
    if (!id || typeof id !== "string" || id.trim() === "") {
      return res
        .status(400)
        .json({ error: "El id es obligatorio y debe ser un string." });
    }
    if (!user || typeof user !== "object") {
      return res.status(400).json({
        error: "El usuario actualizado es obligatorio y debe ser un objeto.",
      });
    }
    if (Object.keys(user).length === 0) {
      return res.status(400).json({
        error: "El usuario actualizado debe tener al menos un campo.",
      });
    }
    const valid = ["name", "password", "email", "img_profile"];
    if (!Object.keys(user).some((key) => valid.includes(key))) {
      return res.status(400).json({
        error:
          "user debe contener al menos una de las siguientes claves: 'name', 'password', 'email', 'img_profile'.",
      });
    }
    next();
  }
}
