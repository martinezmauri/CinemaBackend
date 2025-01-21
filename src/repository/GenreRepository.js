import Genre from "../models/Genre.js";

class GenreRepository {
  async findAll() {
    try {
      const genres = await Genre.find();
      return genres;
    } catch (error) {
      throw new Error("Error al obtener los generos.");
    }
  }

  async findByIds(ids) {
    try {
      const genre = await Genre.find({ _id: { $in: ids } });
      return genre;
    } catch (error) {
      throw new Error("Error al obtener el genero por id.");
    }
  }

  async findByName(name) {
    try {
      const genre = await Genre.findOne({ name });
      return genre;
    } catch (error) {
      throw new Error("Error al obtener el genero por nombre.");
    }
  }

  async create(genre) {
    try {
      const genreCreated = await Genre.create(genre);
      return genreCreated;
    } catch (error) {
      throw new Error("Error al crear genero.");
    }
  }

  async delete(id) {
    try {
      const deleted = await Genre.findOneAndDelete(id);
      if (!deleted) {
        throw new Error("No se encontro la pelicula.");
      }
      return deleted;
    } catch (error) {
      throw new Error("Error al eliminar el genero.");
    }
  }
}

export default GenreRepository;
