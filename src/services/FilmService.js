import FilmRepository from "../repository/FilmRepository";
import CloudService from "./CloudService";
import GenreService from "./GenreService";

class FilmService {
  constructor() {
    this.filmRepository = new FilmRepository();
    this.cloudService = new CloudService();
    this.genreService = new GenreService();
  }

  async findAll() {
    return await this.filmRepository.findAll();
  }

  async findById(id) {
    return await this.filmRepository.findById(id);
  }

  async create(film) {
    const { poster_url, id_category } = film;
    const genre = await this.genreService.findByIds(id_category);

    const secure_url = await this.cloudService.uploadImage(poster_url);
    const createdFilm = {
      ...film,
      poster_url: secure_url,
      genre,
    };
    return this.filmRepository.create(createdFilm);
  }

  async update(id, film) {
    const existFilm = await this.findById(id);
    if (!existFilm) {
      throw new Error("No existe la pelicula a actualizar.");
    }
    const filmUpdated = {
      ...existFilm.toObject(),
      ...film,
    };
    return this.filmRepository.update(filmUpdated);
  }
  async delete(id) {
    return this.filmRepository.delete(id);
  }
}
export default FilmService;
