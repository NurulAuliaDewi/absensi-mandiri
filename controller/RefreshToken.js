const db = require("./../config/dbConnection");
const jwt = require('jsonwebtoken');

module.exports.refreshtoken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        console.log(refreshToken);

        // Lakukan query SQL untuk mencari pengguna dengan refresh_token yang sesuai
        db.query(`SELECT * FROM user WHERE refresh_token LIKE '${refreshToken}'`, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal Server Error" });
            }

            if (results.length === 0) {
                return res.status(403).json({ message: "Forbidden" });
            }

            const user = results[0];
            console.log(results[0]);

            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(403).json({ message: "gagal" });
                }

                const userId = user.id_user;
                const username = user.username;
                const password = user.password;

                const accessToken = jwt.sign({ userId, username, password }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '15s'
                });

                res.json({ accessToken });
            });
        });
    } catch (error) {
        console.error(error); // Menampilkan pesan kesalahan ke konsol
        res.status(500).json({ message: "Internal Server Error" });
    }
};
