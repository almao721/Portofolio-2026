// const express = require("express");
// const cors = require("cors");
// const app = express();

// const projectRoute = require("./routes/projectRoute");
// const messageRoute = require("./routes/messageRoute");
// const heroRoute = require("./routes/heroRoute");

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send(`
//     <p>Backend Aktif</p>
//   `);
// });

// app.use("/projects", projectRoute);
// app.use("/", messageRoute);
// app.use("/", heroRoute);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server Backend berjalan di http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes (nanti kita buat file routes-nya)
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const messageRoutes = require('./routes/messageRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

// Daftarkan Routes ke Express
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Backend Portofolio Alma Berjalan dengan Baik! 🚀');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});

module.exports = app;