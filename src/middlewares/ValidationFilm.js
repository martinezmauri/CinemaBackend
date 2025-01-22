import Genre from "../models/Genre.js";
import mongoose from "mongoose";
// falta el middleware para update
class ValidationFilm {
  static validationId(req, res, next) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID Invalido" });
    }
    next();
  }

  static async validationCreate(req, res, next) {
    const {
      title,
      director,
      duration,
      rate,
      release_date,
      poster_url,
      description,
      genre,
    } = req.body;

    if (!title || typeof title !== "string") {
      return res
        .status(400)
        .json({ error: "El titulo es obligation y debe ser un string." });
    }
    if (!director || typeof director !== "string") {
      return res
        .status(400)
        .json({ error: "El director es obligatorio y debe ser un string." });
    }
    if (!duration || typeof duration !== "number") {
      return res
        .status(400)
        .json({ error: "La duracion es obligatorio y debe ser un number" });
    }
    if (!rate || typeof rate !== "number") {
      return res
        .status(400)
        .json({ error: "La valoracion es obligatorio y debe ser un number." });
    }
    if (!release_date || typeof release_date !== "string") {
      return res.status(400).json({
        error: "La fecha de lanzamiento es obligatoria y debe ser un Date",
      });
    }
    if (!poster_url || typeof poster_url !== "string") {
      return res.status(400).json({
        error: "La imagen de la pelicula es obligatorio y debe ser un string.",
      });
    }
    if (!description || typeof description !== "string") {
      return res
        .status(400)
        .json({ error: "La descripcion es obligatorio y debe ser un string." });
    }

    if (!Array.isArray(genre)) {
      return res
        .status(400)
        .json({ error: "Los generos deben agregarse en un array" });
    }
    const invalidGenres = genre.filter(
      (id) => !mongoose.Types.ObjectId.isValid(id)
    );

    if (invalidGenres.length > 0) {
      return res.status(400).json({
        error: `Los siguientes géneros tienen un formato inválido: ${invalidGenres}`,
      });
    }
    try {
      const genresExist = await Genre.find({
        _id: { $in: genre },
      });

      if (genresExist.length !== genre.length) {
        return res
          .status(400)
          .json({ error: "Uno o más géneros no existen en la base de datos." });
      }

      next();
    } catch (error) {
      return res.status(500).json({ error: "Error al validar los géneros." });
    }
  }

  static ValidationUpdate(req, res, next) {
    const { id, film } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID Invalido" });
    }

    if (!film || typeof film !== "object") {
      return res
        .status(400)
        .json({ error: "El campo film es requerido y debe ser un objeto" });
    }

    const validKeys = [
      "title",
      "director",
      "duration",
      "rate",
      "release_date",
      "poster_url",
      "description",
      "genre",
    ];
    const keys = Object.keys(film);
    if (keys.length === 0 || !keys.some((key) => validKeys.includes(key))) {
      return res
        .status(400)
        .json({ error: "El objeto film debe tener al menos un campo válido" });
    }
    next();
  }
  static validationDelete(req, res, next) {
    const { id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID Invalido" });
    }
    next();
  }
}

export default ValidationFilm;
