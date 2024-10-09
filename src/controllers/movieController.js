const movieService = require("../services/movieService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor", error });
    }
  },
  createMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await movieService.createMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res
        .status(201)
        .json({ message: "Película creada exitosamente", movie: newMovie });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creando la pelicula", error: error });
    }
  },
};
