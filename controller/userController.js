const db = require("./../config/dbConnection")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//get all data user
 module.exports.getDataUser = async (req, res) => {
    try {
        const sqlquery = 'SELECT * FROM user';
        db.query(sqlquery, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    success: false,
                    message: 'Gagal mengambil data pengguna',
                    error: err.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Berhasil mengambil data pengguna',
                    data: result,
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam permintaan',
            error: error.message, 
        });
    }
}

// get user by username
module.exports.getDataByUsername = async (req, res)=>{
    try{
        const username = req.params.username;
        db.query('SELECT * FROM user WHERE username = ?', [username], function (err, result) {
            if (err) {
                console.error(err);
                res.status(500).json({
                success: false,
                message: 'Gagal',
            });
            } else {
                res.status(200).json({
                success: true,
                message: 'Berhasil',
                data: result[0], 
            });
        }})
    }catch (error) {
        console.error(error);
        res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan dalam permintaan',
        error: error.message, 
    });
    };
}

//register
module.exports.register = async (req, res) => {
    try{
        const { id_user, id_karyawan, nama_depan, nama_belakang, username, email, password} = req.body;
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                res.status(500).json({ error: 'Failed to hash password' });
                return;
            }
            const user = {
                id_user,
                id_karyawan: id_karyawan,
                nama_depan: nama_depan,
                nama_belakang: nama_belakang,
                username: username,
                email: email,
                password: hash
            };
    
        db.query('INSERT INTO user SET ?', user, (err, results) => {
            if (err) {
            res.status(500).json({ error: 'gagal register' });
            return;
            }
            res.status(201).json({ 
                message: 'register berhasil',
                data: results
             });
        });
    });
    }catch(error){
        console.log(error);
        res.status(500).json({message: "ada yang salah"});
    }
};

//login
module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        db.query(`SELECT * FROM user WHERE username LIKE '${username}'`, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Terjadi kesalahan saat mencoba masuk' });
            }

            if (results.length === 0) {
                return res.status(401).json({ error: 'Username tidak ditemukan' });
            }

            const user = results[0];

            bcrypt.compare(password, user.password, async (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Terjadi kesalahan saat membandingkan kata sandi' });
                }

                if (!result) {
                    return res.status(401).json({ error: 'password salah' });
                }

                const userId = user.id_user;
                const username = user.username;
                const accessToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '20s'
                });
                const refreshToken = jwt.sign({ userId, username }, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: '1d'
                });

                // Tambahkan kode Anda untuk update refreshToken ke dalam database di sini
                db.query('UPDATE user SET refresh_token = ? WHERE id_user = ?', [refreshToken, userId], (err, updateResult) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Gagal mengupdate refreshToken' });
                    }
                    
                    res.cookie('refreshToken', refreshToken, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000,
                    });
                    res.json({ accessToken });
                });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ada yang salah" });
    }
};

//logout
module.exports.logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.sendStatus(204); // Menggunakan sendStatus untuk mengirim status tanpa respons
        }

        // Lakukan query SQL untuk mencari pengguna dengan refresh_token yang sesuai
        db.query('SELECT * FROM user WHERE refresh_token = ?', [refreshToken], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal Server Error" });
            }

            if (results.length === 0) {
                return res.sendStatus(204);
            }

            const user = results[0];

            // Lakukan query SQL untuk menghapus refresh_token dari pengguna
            db.query('UPDATE user SET refresh_token = NULL WHERE id_user = ?', [user.id_user], (err, updateResult) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Internal Server Error" });
                }

                res.clearCookie('refreshToken');
                return res.sendStatus(200);
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

//edit profile
module.exports.edit = async (req, res) => {
    try {
        let sqlQuery;
        const { username, email, password } = req.body;
        let foto = req.file ? req.file.filename.replaceAll(" ", "20%") : null;
        let viewimg = foto ? req.protocol + "://" + req.get("host") + "/" + foto : null;

        if (foto) {                                                   
            sqlQuery = `UPDATE user SET username = '${username}', email = '${email}', password = '${password}', foto = '${foto}' WHERE username = '${username}'`;
        } else {
            sqlQuery = `UPDATE user SET username = '${username}', email = '${email}', password = '${password}' WHERE username = '${username}'`;
        }

        db.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Ada kesalahan",
                    error: err,
                });
            } else {
                if (foto) {
                    return res.json({
                        message: "Detail berhasil diperbarui",
                        username: username,
                        email: email,
                        password: password,
                        foto: viewimg,
                    });
                } else {
                    return res.json({
                        message: "Berhasil, gambar tidak diperbarui",
                        username: username,
                        email: email,
                        password: password,
                    });
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
};
