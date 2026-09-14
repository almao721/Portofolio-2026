// const express = require("express");
// const router = express.Router();
// const projectController = require("../controller/projectController");

// // Middleware untuk memastikan parameter ID adalah angka
// const validateId = (req, res, next) => {
//   const { id } = req.params;
//   if (isNaN(Number(id))) {
//     return res.status(400).json({
//       success: false,
//       message: "ID project harus berupa angka yang valid",
//     });
//   }
//   next();
// };

// // Route Definitions
// router.get("/projects", projectController.getAllProjects);
// router.get("/projects/:id", validateId, projectController.getProjectById);
// router.post("/projects", projectController.createProject);
// router.put("/projects/:id", validateId, projectController.updateProject);
// router.delete("/projects/:id", validateId, projectController.deleteProject);

// module.exports = router;

const express = require("express");
const router = express.Router();

// Pastikan mendestruktur fungsi yang BENAR dari controller
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controller/projectController");

// Pastikan callback function tidak undefined
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;