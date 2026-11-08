// // const express = require("express");
// // const cors = require("cors");
// // const app = express();

// // const projectRoute = require("./routes/projectRoute");
// // const messageRoute = require("./routes/messageRoute");
// // const heroRoute = require("./routes/heroRoute");

// // app.use(cors());
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send(`
// //     <p>Backend Aktif</p>
// //   `);
// // });

// // app.use("/projects", projectRoute);
// // app.use("/", messageRoute);
// // app.use("/", heroRoute);

// // const PORT = 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server Backend berjalan di http://localhost:${PORT}`);
// // });

// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Import Routes (nanti kita buat file routes-nya)
// const projectRoutes = require('./routes/projectRoutes');
// const certificateRoutes = require('./routes/certificateRoutes');
// const messageRoutes = require('./routes/messageRoutes');
// const testimonialRoutes = require('./routes/testimonialRoutes');

// // Daftarkan Routes ke Express
// app.use('/api/projects', projectRoutes);
// app.use('/api/certificates', certificateRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/testimonials', testimonialRoutes);

// // Test Route
// app.get('/', (req, res) => {
//   res.send('Backend Portofolio Alma Berjalan dengan Baik! 🚀');
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server aktif di http://localhost:${PORT}`);
// });

// module.exports = app;

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const db = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const certificateRoutes = require('./routes/certificateRoutes');
const messageRoutes = require('./routes/messageRoutes');
const testimonialRoutes = require('./routes/testimonialsRoutes');

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Backend Portfolio Alma berhasil berjalan!',
  });
});

// Tes koneksi database
app.get('/test-db', async (req, res) => {
  try {
    const connection = await db.getConnection();
    connection.release();

    res.json({
      success: true,
      message: 'Database portfolio_alma berhasil terhubung!',
    });
  } catch (error) {
    console.error('Database Error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Database gagal terhubung!',
      error: error.message,
    });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/testimonials', testimonialRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});