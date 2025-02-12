import UserFavoritesService from "../services/UserFavoritesService.js";

class UserFavoritesController {
  constructor() {
    this.userFavoriteService = new UserFavoritesService();
    this.findAll = this.findAll.bind(this); // Asegurando que `this` esté correctamente vinculado
    this.addFavorite = this.addFavorite.bind(this); // Asegurando que `this` esté correctamente vinculado
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  async findAll(req, res) {
    try {
      const id = req.params;
      const favorites = await this.userFavoriteService.findAll(id);
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener favoritos", error });
    }
  }

  async addFavorite(req, res) {
    try {
      const { userId, filmId } = req.body;
      await this.userFavoriteService.addFavorite(userId, filmId);
      res.status(201).json({ message: "Película añadida a favoritos" });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Error al añadir favorito", error });
    }
  }

  async removeFavorite(req, res) {
    try {
      const { userId, filmId } = req.body;
      await this.userFavoriteService.removeFavorite(userId, filmId);

      res.status(200).json({ message: "Pelicula eliminada de favoritos" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar favorito", error });
    }
  }
}

export default UserFavoritesController;

/* 
- Si se elimina un usuario sus favoritos quedan.
- Si se intenta borrar una pelicula con un userId incorrecto explota
 */
