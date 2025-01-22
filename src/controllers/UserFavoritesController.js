import UserFavoritesService from "../services/UserFavoritesService.js";

class UserFavoritesController {
  constructor() {
    this.userFavoriteService = new UserFavoritesService();
  }

  findAll(req, res) {
    try {
      const id = req.params;
      const favorites = this.userFavoriteService.findAll(id);
      res.status(200).json(favorites);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener favoritos", error });
    }
  }

  addFavorite(req, res) {
    try {
      const { userId, filmId } = req.body;
      this.userFavoriteService.addFavorite(userId, filmId);
      res.status(201).json({ message: "Película añadida a favoritos" });
    } catch (error) {
      res.status(500).json({ message: "Error al añadir favorito", error });
    }
  }

  removeFavorite(req, res) {
    try {
      const { userId, filmId } = req.body;
      const response = this.userFavoriteService.removeFavorite(userId, filmId);
      res
        .status(200)
        .json({ message: "Pelicula eliminada de favoritos", response });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar favorito", error });
    }
  }
}

export default UserFavoritesController;
