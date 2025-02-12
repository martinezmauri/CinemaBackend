import { v2 as cloudinary } from "cloudinary";
class CloudService {
  async uploadImage(path, options = {}) {
    try {
      const result = await cloudinary.uploader.upload(path, options);
      return result.secure_url;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      throw new Error("No se pudo subir la imagen a Cloudinary");
    }
  }
}

export default CloudService;
