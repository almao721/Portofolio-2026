const express = require("express");
const cors = require("cors");
const app = express();

const projectRoute = require("./routes/projectRoute");
const messageRoute = require("./routes/messageRoute");
const heroRoute = require("./routes/heroRoute");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <p>Backend Aktif</p>
  `);
});

app.use("/projects", projectRoute);
app.use("/", messageRoute);
app.use("/", heroRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});