import GenreRepository from "../repository/GenreRepository.js";

class GenreService {
  constructor() {
    this.genreRepository = new GenreRepository();
  }

  async findAll() {
    return this.genreRepository.findAll();
  }
  async findByIds(ids) {
    return this.genreRepository.findByIds(ids);
  }
  async findByName(name) {
    return this.genreRepository.findByName(name);
  }
  async create(genre) {
    return this.genreRepository.create(genre);
  }
  async delete(id) {
    return this.genreRepository.delete(id);
  }
}

export default GenreService;
