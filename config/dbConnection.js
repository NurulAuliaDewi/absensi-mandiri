const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "absensi_mandiri",
    multipleStatements: true,
});

connection.connect((err) => {
    if (err) {
        console.error("Gagal konek ke database:", err);
    } else {
        console.log("Berhasil konek ke database");
    }
});

module.exports = connection;
