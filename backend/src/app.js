const express = require("express");
const cors = require("cors");
const app = express();

const projectRoute = require("./routes/projectRoute");
const messageRoute = require("./routes/messageRoute"); // jika ada form kontak

app.use(cors());
app.use(express.json());

// Endpoint utama
app.use("/projects", projectRoute);
app.use("/contact", messageRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});