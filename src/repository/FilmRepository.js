import Film from "../models/Film.js";
class FilmRepository {
  constructor() {}

  async findAll() {
    return await Film.find();
  }

  async findById(id) {
    const film = await Film.findById(id);
    return film;
  }

  async create(film) {
    return await Film.create(film);
  }

  async update(film) {
    const updated = await Film.findByIdAndUpdate(film._id, film, { new: true });
    if (!updated) {
      throw new Error(`No se encontró la película con ID: ${id}`);
    }
    return updated;
  }

  async delete(id) {
    const deleted = await Film.findOneAndDelete(id);
    if (!deleted) {
      throw new Error(`No se encontró la película con ID: ${id}`);
    }
    return deleted;
  }

  async seederFilm(films) {
    for (let film of films) {
      const existingFilm = await Film.findOne({ title: film.title }); // Usar un campo único como `title`
      if (!existingFilm) {
        await Film.create(film); // Si no existe, crea la nueva película
      }
    }
  }
}

export default FilmRepository;
