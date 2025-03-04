import movies from "../helpers/movies.json" assert { type: "json" };
import genres from "../helpers/genres.json" assert { type: "json" };
import Genre from "../models/Genre.js";
import Film from "../models/Film.js";

async function seedMovies() {
  try {
    for (const movie of movies) {
      const existingMovie = await Film.findOne({ title: movie.title });
      if (existingMovie) {
        continue;
      }
      const genreDocs = await Genre.find({ name: { $in: movie.genres } });

      const moviesCreated = { ...movie, genre: genreDocs.map((g) => g._id) };

      await Film.create(moviesCreated);
      console.log("Peliculas insertadas correctamente");
    }
  } catch (error) {
    console.error("Error insertando películas:", error);
  }
}

async function seedGenres() {
  try {
    for (const genre of genres) {
      const existingGenre = await Genre.findOne({ name: genre.name });

      if (!existingGenre) {
        await Genre.create(genre);
      }
    }
    console.log("Generos cargados correctamente");
  } catch (error) {
    console.error("Error insertando géneros:", error);
  }
}

async function seedDatabase() {
  try {
    await seedGenres();

    await seedMovies();
    console.log("Base de datos cargada");
  } catch (error) {
    console.error("Error al cargar los datos: ", error);
  }
}

export default seedDatabase;
