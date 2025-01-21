import FilmService from "../services/FilmService.js";

class FilmController {
  constructor() {
    this.filmService = new FilmService();

    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
  }

  async findAll(req, res) {
    try {
      const films = await this.filmService.findAll();
      res.status(200).json(films);
    } catch (error) {
      console.log(error);

      res.status(400).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.body;
      const film = await this.filmService.findById(id);
      res.status(400).json(film);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const created = this.filmService.create(req.body);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id, film } = req.body;
      const updatedFilm = await this.filmService.update(id, film);
      res.status(201).json(updatedFilm);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      const deleted = await this.filmService.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
export default FilmController;
