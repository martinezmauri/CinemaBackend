import GenreService from "../services/GenreService.js";

class GenreController {
  constructor() {
    this.genreService = new GenreService();

    this.findAll = this.findAll.bind(this);
    this.findByIds = this.findByIds.bind(this);
    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
  }

  async findAll(req, res) {
    try {
      const genres = await this.genreService.findAll();
      res.status(200).json(genres);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findByIds(req, res) {
    try {
      const { ids } = req.body;
      const genre = await this.genreService.findByIds(ids);
      res.status(200).json(genre);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { name } = req.body;
      const genreCreated = await this.genreService.create(name);
      res.status(201).json(genreCreated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await this.genreService.delete(id);
      res.status(201).json(deleted);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default GenreController;
