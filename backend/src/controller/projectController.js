const db = require("../config/db");

const systemDbs = ["information_schema", "mysql", "performance_schema", "sys"];

const fetchLaragonDatabases = (callback) => {
  db.query("SHOW DATABASES", (err, results) => {
    if (err) return callback(err, null);

    const rawDatabases = results
      .map((row) => row.Database)
      .filter((dbName) => !systemDbs.includes(dbName));

    const reversedDatabases = rawDatabases.reverse();

    const listDatabases = reversedDatabases.map((dbName, index) => ({
      id: index + 1,
      title: dbName,
      category: "MySQL Database",
      description: `Project database: ${dbName} yang tersimpan di Laragon local server.`,
    }));

    callback(null, listDatabases);
  });
};

const getAllProjects = (req, res) => {
  fetchLaragonDatabases((err, listDatabases) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil daftar database",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil semua daftar database Laragon",
      data: listDatabases,
    });
  });
};

const getProjectById = (req, res) => {
  const { id } = req.params;
  const targetId = Number(id);

  fetchLaragonDatabases((err, listDatabases) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data database",
        error: err.message,
      });
    }

    const foundProject = listDatabases.find((item) => item.id === targetId);

    if (!foundProject) {
      return res.status(404).json({
        success: false,
        message: `Database dengan ID ${id} tidak ditemukan`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mengambil data database",
      data: foundProject,
    });
  });
};

const createProject = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Nama database (title) wajib diisi",
    });
  }

  const dbName = title.trim().replace(/\s+/g, "_");
  const query = `CREATE DATABASE \`${dbName}\``;

  db.query(query, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat database baru",
        error: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: `Database '${dbName}' berhasil dibuat di Laragon!`,
      data: {
        title: dbName,
        category: "MySQL Database",
        description: `Project database: ${dbName} yang tersimpan di Laragon local server.`,
      },
    });
  });
};

const updateProject = (req, res) => {
  res.status(400).json({
    success: false,
    message: "Fitur rename database tidak didukung secara langsung di MySQL.",
  });
};

const deleteProject = (req, res) => {
  const { id } = req.params;
  const targetId = Number(id);

  fetchLaragonDatabases((err, listDatabases) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendeteksi database",
        error: err.message,
      });
    }

    const found = listDatabases.find((item) => item.id === targetId);

    if (!found) {
      return res.status(404).json({
        success: false,
        message: `Database dengan ID ${id} tidak ditemukan`,
      });
    }

    const dropQuery = `DROP DATABASE \`${found.title}\``;
    db.query(dropQuery, (dropErr) => {
      if (dropErr) {
        return res.status(500).json({
          success: false,
          message: "Gagal menghapus database",
          error: dropErr.message,
        });
      }

      res.status(200).json({
        success: true,
        message: `Database '${found.title}' berhasil dihapus dari Laragon!`,
      });
    });
  });
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};

// const db = require("../config/db");

// // GET /projects - Ambil semua proyek
// const getAllProjects = (req, res) => {
//   const query = "SELECT * FROM projects ORDER BY created_at DESC";

//   db.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Gagal mengambil data proyek",
//         error: err.message,
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Berhasil mengambil semua proyek",
//       data: results,
//     });
//   });
// };

// // GET /projects/:id - Ambil detail proyek berdasarkan ID
// const getProjectById = (req, res) => {
//   const { id } = req.params;
//   const query = "SELECT * FROM projects WHERE id = ?";

//   db.query(query, [id], (err, results) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Gagal mengambil data proyek",
//         error: err.message,
//       });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: `Proyek dengan ID ${id} tidak ditemukan`,
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Berhasil mengambil data proyek",
//       data: results[0],
//     });
//   });
// };

// // POST /projects - Tambah proyek baru
// const createProject = (req, res) => {
//   const { title, description, image } = req.body;

//   if (!title) {
//     return res.status(400).json({
//       success: false,
//       message: "Field title wajib diisi",
//     });
//   }

//   const query =
//     "INSERT INTO projects (title, description, image) VALUES (?, ?, ?)";

//   db.query(
//     query,
//     [title, description || null, image || null],
//     (err, result) => {
//       if (err) {
//         return res.status(500).json({
//           success: false,
//           message: "Gagal menambahkan proyek",
//           error: err.message,
//         });
//       }

//       res.status(201).json({
//         success: true,
//         message: "Proyek berhasil ditambahkan!",
//         data: {
//           id: result.insertId,
//           title,
//           description: description || "",
//           image: image || "",
//           created_at: new Date().toISOString(),
//         },
//       });
//     }
//   );
// };

// // PUT /projects/:id - Update proyek
// const updateProject = (req, res) => {
//   const { id } = req.params;
//   const { title, description, image } = req.body;

//   if (!title) {
//     return res.status(400).json({
//       success: false,
//       message: "Field title wajib diisi untuk melakukan update",
//     });
//   }

//   const checkQuery = "SELECT * FROM projects WHERE id = ?";

//   db.query(checkQuery, [id], (err, results) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Gagal mendeteksi proyek",
//         error: err.message,
//       });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: `Proyek dengan ID ${id} tidak ditemukan`,
//       });
//     }

//     const updateQuery =
//       "UPDATE projects SET title = ?, description = ?, image = ? WHERE id = ?";

//     db.query(
//       updateQuery,
//       [title, description || null, image || null, id],
//       (err) => {
//         if (err) {
//           return res.status(500).json({
//             success: false,
//             message: "Gagal mengupdate proyek",
//             error: err.message,
//           });
//         }

//         res.status(200).json({
//           success: true,
//           message: "Proyek berhasil diupdate!",
//           data: {
//             id: Number(id),
//             title,
//             description,
//             image,
//             created_at: results[0].created_at,
//           },
//         });
//       }
//     );
//   });
// };

// // DELETE /projects/:id - Hapus proyek
// const deleteProject = (req, res) => {
//   const { id } = req.params;
//   const checkQuery = "SELECT * FROM projects WHERE id = ?";

//   db.query(checkQuery, [id], (err, results) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Gagal mendeteksi proyek",
//         error: err.message,
//       });
//     }

//     if (results.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: `Proyek dengan ID ${id} tidak ditemukan`,
//       });
//     }

//     const deleteQuery = "DELETE FROM projects WHERE id = ?";

//     db.query(deleteQuery, [id], (err) => {
//       if (err) {
//         return res.status(500).json({
//           success: false,
//           message: "Gagal menghapus proyek",
//           error: err.message,
//         });
//       }

//       res.status(200).json({
//         success: true,
//         message: `Proyek dengan ID ${id} berhasil dihapus!`,
//       });
//     });
//   });
// };

// module.exports = {
//   getAllProjects,
//   getProjectById,
//   createProject,
//   updateProject,
//   deleteProject,
// };

