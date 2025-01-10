import UserFavoritesRepository from "../repository/UserFavoritesRepository";

class UserFavoritesService {
  constructor() {
    this.userFavoriteRepository = new UserFavoritesRepository();
  }
  async findAll(id) {
    return this.userFavoriteRepository.findAll(id);
  }
  async addFavorite(userId, filmId) {
    return this.userFavoriteRepository.addFavorite(userId, filmId);
  }

  async removeFavorite(userId, filmId) {
    return this.userFavoriteRepository.removeFavorite(userId, filmId);
  }
}

export default UserFavoritesService;
