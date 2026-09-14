const db = require("../config/db");

// GET /hero - Ambil data hero section
const getHero = (req, res) => {
  const query = "SELECT * FROM hero LIMIT 1";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data hero",
        error: err.message,
      });
    }

    // Jika tabel hero masih kosong di database, kirim data fallback ini
    if (results.length === 0) {
      return res.status(200).json({
        success: true,
        message: "Data hero default",
        data: {
          name: "Al Maghfira Tiara Hisbaini",
          role: "Software Engineering Student & Full-Stack Developer",
          description: "Selamat datang di portofolio saya!",
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data hero",
      data: results[0],
    });
  });
};

module.exports = {
  getHero,
};