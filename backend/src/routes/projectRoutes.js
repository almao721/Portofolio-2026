// // const express = require("express");
// // const router = express.Router();
// // const projectController = require("../controller/projectController");

// // // Middleware untuk memastikan parameter ID adalah angka
// // const validateId = (req, res, next) => {
// //   const { id } = req.params;
// //   if (isNaN(Number(id))) {
// //     return res.status(400).json({
// //       success: false,
// //       message: "ID project harus berupa angka yang valid",
// //     });
// //   }
// //   next();
// // };

// // // Route Definitions
// // router.get("/projects", projectController.getAllProjects);
// // router.get("/projects/:id", validateId, projectController.getProjectById);
// // router.post("/projects", projectController.createProject);
// // router.put("/projects/:id", validateId, projectController.updateProject);
// // router.delete("/projects/:id", validateId, projectController.deleteProject);

// // module.exports = router;

// const express = require("express");
// const router = express.Router();

// // Pastikan mendestruktur fungsi yang BENAR dari controller
// const {
//   getAllProjects,
//   getProjectById,
//   createProject,
//   updateProject,
//   deleteProject,
// } = require("../controller/projectController");

// // Pastikan callback function tidak undefined
// router.get("/", getAllProjects);
// router.get("/:id", getProjectById);
// router.post("/", createProject);
// router.put("/:id", updateProject);
// router.delete("/:id", deleteProject);

// module.exports = router;

const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require('../config/database');

const router = express.Router();

// GET SEMUA PROJECT (PUBLIC)
router.get('/', async (req, res) => {
  try {
    const [projects] = await db.execute(
      'SELECT * FROM projects ORDER BY id DESC'
    );

    res.json({
      success: true,
      data: projects,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Gagal mengambil project.',
    });
  }
});

// TAMBAH PROJECT
router.post('/', async (req, res) => {
  try {
    const { title, description, image, link } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Judul project wajib diisi.',
      });
    }

    const [result] = await db.execute(
      `INSERT INTO projects (title, description, image, link)
       VALUES (?, ?, ?, ?)`,
      [
        title,
        description || '',
        image || '',
        link || '',
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Project berhasil ditambahkan.',
      id: result.insertId,
    });

  } catch (error) {
    console.error('DETAIL ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Gagal menambahkan project.',
      error: error.message,
    });
  }
});

// EDIT PROJECT
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, link } = req.body;

    const [existing] = await db.execute(
      'SELECT * FROM projects WHERE id = ?',
      [id]
    );

    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Project tidak ditemukan.',
      });
    }

    const oldProject = existing[0];

    await db.execute(
      `UPDATE projects
       SET title = ?, description = ?, image = ?, link = ?
       WHERE id = ?`,
      [
        title || oldProject.title,
        description ?? oldProject.description,
        image ?? oldProject.image,
        link ?? oldProject.link,
        id,
      ]
    );

    res.json({
      success: true,
      message: 'Project berhasil diperbarui.',
    });

  } catch (error) {
    console.error('DETAIL ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Gagal memperbarui project.',
      error: error.message,
    });
  }
});

// HAPUS PROJECT
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.execute(
      'DELETE FROM projects WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Project tidak ditemukan.',
      });
    }

    res.json({
      success: true,
      message: 'Project berhasil dihapus.',
    });

  } catch (error) {
    console.error('DETAIL ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Gagal menghapus project.',
      error: error.message,
    });
  }
});

module.exports = router;