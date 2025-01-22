import mongoose from "mongoose";

class ValidationGenre {
  static ValidationId(req, res, next) {
    const { ids } = req.body;
    for (const id of ids) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "ID Invalido" });
      }
    }
    next();
  }

  static ValidationCreate(req, res, next) {
    const { name } = req.body;
    if (!name || typeof name !== "string") {
      return res
        .status(400)
        .json({ error: "El genero es obligatorio y debe ser un string." });
    }
    next();
  }

  static ValidationDelete(req, res, next) {
    const { id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID Invalido" });
    }
    next();
  }
}

export default ValidationGenre;
