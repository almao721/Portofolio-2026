const db = require("../config/db");

const createMessage = (req, res) => {
  const { name, email, message } = req.body;

  // Validasi field wajib
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Semua field (name, email, message) wajib diisi",
    });
  }

  // Validasi format email sederhana
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Format email tidak valid",
    });
  }

  // Query menyimpan pesan
  const query = `
    INSERT INTO messages (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      // Fallback jika nama kolom di tabel database bernama 'messages' (paka s)
      if (err.code === "ER_BAD_FIELD_ERROR") {
        const fallbackQuery = `
          INSERT INTO messages (name, email, messages)
          VALUES (?, ?, ?)
        `;
        return db.query(fallbackQuery, [name, email, message], (err2, result2) => {
          if (err2) {
            return res.status(500).json({
              success: false,
              message: "Gagal menyimpan pesan",
              error: err2.message,
            });
          }
          return res.status(201).json({
            success: true,
            message: "Pesan berhasil dikirim!",
            data: {
              id: result2.insertId,
              name,
              email,
              message,
              created_at: new Date().toISOString(),
            },
          });
        });
      }

      return res.status(500).json({
        success: false,
        message: "Gagal menyimpan pesan",
        error: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Pesan berhasil dikirim!",
      data: {
        id: result.insertId,
        name,
        email,
        message,
        created_at: new Date().toISOString(),
      },
    });
  });
};

module.exports = {
  createMessage,
};