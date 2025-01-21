import GenreService from "../services/GenreService.js";

class GenreController {
  constructor() {
    this.genreService = new GenreService();

    this.findAll = this.findAll.bind(this);
    this.findByIds = this.findByIds.bind(this);
  }

  findAll(req, res) {
    try {
      const genres = this.genreService.findAll();
      res.status(200).json(genres);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  findByIds(req, res) {
    try {
      const { ids } = req.body;
      const genre = this.genreService.findByIds(ids);
      res.status(200).json(genre);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  create(req, res) {
    try {
      const genreCreated = this.genreService.create(req.body);
      res.status(201).json(genreCreated);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = this.genreService.delete(id);
      res.status(201).json(deleted);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default GenreController;
