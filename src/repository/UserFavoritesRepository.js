import UserFavorites from "../models/UserFavorites.js";

class UserFavoritesRepository {
  async findAll(id) {
    try {
      const favorites = await UserFavorites.find({ user_id: id });
      return favorites;
    } catch (error) {
      throw new Error("Error al obtener las peliculas favoritas.");
    }
  }

  async addFavorite(userId, filmId) {
    try {
      const favorite = new UserFavorites({ user_id: userId, film_id: filmId });
      await favorite.save();
    } catch (error) {
      throw new Error("Error al agregar la pelicula favorita.");
    }
  }

  async removeFavorite(userId, filmId) {
    try {
      await UserFavorites.findOneAndDelete({
        user_id: userId,
        film_id: filmId,
      });
    } catch (error) {
      throw new Error("Error al eliminar la pelicula favorita.");
    }
  }
}

export default UserFavoritesRepository;
