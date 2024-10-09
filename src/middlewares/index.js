const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  if (year > 2024) {
    return res.status(400).json({ error: "El año no puede ser mayor a 2024" });
  }

  if (rate > 10 || rate < 0) {
    return res
      .status(400)
      .json({ error: "La calificación debe estar entre 0 y 10" });
  }

  next();
};

module.exports = validateMovie;
