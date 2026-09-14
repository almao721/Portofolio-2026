const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) {
    console.error("Koneksi MySQL gagal:", err.message);
  } else {
    console.log("Terhubung ke MySQL Laragon!");
  }
});

module.exports = db;