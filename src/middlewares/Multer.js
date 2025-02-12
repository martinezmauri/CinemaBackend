import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  fileFilter: (req, res, cb) => {
    if (file.mimetype.startWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Solo se permiten imagenes"), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;
