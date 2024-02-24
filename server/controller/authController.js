import CryptoJS from "crypto-js";
import validator from "validator";

// * My Modules
import User from "../models/user.js";
import Customer from "../models/customer.js";
import Freelancer from "../models/freelancer.js";
import redisClient from "../config/redis.js";
import Session from "../models/session.js";
import { UAParser } from "ua-parser-js";
import sequelize from "../config/database.js";

export const registerController = async (req, res) => {
    try {
        const data = req.body;

        const user = await User.create({
            firstName: data.name,
            lastName: data.surname,
            email: data.email,
            username: data.username,
            password: CryptoJS.AES.encrypt(
                data.password,
                process.env.PASS_SEC
            ).toString(),
            role: data.role,
        });
        console.log(user);
        if (user) {
            // Kullanıcının rolüne göre ilgili tabloya kayıt yapılıyor
            if (user.role === "freelancer") {
                await Freelancer.create({ userId: user.id });
            } else if (user.role === "customer") {
                await Customer.create({ userId: user.id });
            }
            console.log("\n\n\nKULLANICI BAŞARIYLA KAYIT EDİLDİ: ", user);

            res.status(200).json({
                data: user,
                message: "Kullanıcı başararıyla kayıt edildi",
            });
        } else {
            console.log("\n\n\nKULLANICI KAYIT EDİLEMEDİ!!");
            res.status(400).json({
                error: "Kullanıcı kayıt edilemedi!",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Kullanıcı kayıt edilirken bir  hata oluştu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

const passwordControl = (user, password) => {
    console.log("USER.PASSWORD: ", user.password);
    console.log("PASSWORD: ", password);
    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    );
    console.log("HASHED PASSWORD: ", hashedPassword);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    console.log("ORİGİNAL PASSWORD", originalPassword);

    if (originalPassword === password) {
        return true;
    } else {
        return false;
    }
};

export const checkUser = async (req, res) => {
    try {
        const user = req.session.user;
        return res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.json({
            error: "Kullanıcı bilgileri kontrol edilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (username && password) {
            const fieldToSearch = validator.isEmail(username)
                ? "email"
                : "username";

            const user = await User.findOne({
                where: {
                    [fieldToSearch]: username,
                },
            });

            if (user) {
                const verifyPassword = passwordControl(user, password);

                if (verifyPassword) {
                    console.log("KULLANICI BAŞARILI BİR ŞEKİLDE GİRİŞ YAPTI");
                    let data = {
                        id: user.id,
                        username: user.username,
                        role: user.role,
                    };
                    req.session.user = data;
                    let ip =
                        req.headers["x-forwarded-for"] ||
                        req.socket.remoteAddress;
                    let parser = new UAParser(req.headers["user-agent"]);
                    let deviceInfo = parser.getResult();
                    const session = await Session.create({
                        session_key: req.session.id,
                        device_info: deviceInfo,
                        ip: ip,
                    });
                    if (session) {
                        console.log(
                            "Oturum bilgileri veritabanına kayıt edildi"
                        );
                        res.status(200).json({
                            user: data,
                            message:
                                "Kullanıcı başarılı bir şekilde giriş yaptı",
                        });
                    }
                } else {
                    console.log("KULLANCININ GİRDİĞİ ŞİFRE YANLIŞ");
                    res.status(401).json({
                        password:
                            "Yanlış şifre girdiniz. Lütfen şifrenizi kontrol edin!",
                    });
                }
            } else {
                console.log("KULLANICI BULUNAMADI");
                res.status(401).json({
                    username: "Böyle bir kullanıcı bulunamadı!",
                });
            }
        } else {
            res.status(400).json({
                error: "Lütfen kullanıcı adı ve şifrenizi girin",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Giriş işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const logout = async (req, res) => {
    try {
        const t = await sequelize.transaction();
        await Session.destroy(
            {
                where: {
                    session_key: req.session.id,
                },
            },
            { transaction: t }
        );

        req.session.destroy();
        res.clearCookie("connect.sid"); // Tarayıcıdaki oturum çerezini silin

        await t.commit();

        res.status(200).json({
            message: "Çıkış işlemi başarıyla tamamlandı!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Çıkış yapılırken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz!",
        });
    }
};

export const logoutAllDevices = async (req, res) => {
    try {
        const t = await sequelize.transaction();
        const sessions = await Session.findAll({
            where: {
                userId: req.session.user.id,
            },
        });
        await Session.destroy(
            {
                where: {
                    userId: req.session.user.id,
                },
            },
            { transaction: t }
        );
        const sessionKeys = sessions.map((session) => session.session_key);
        const pipeline = redisClient.pipeline();
        for (let i = 0; i < array.length; i++) {
            pipeline.del("session:" + sessionKeys[i]);
        }
        pipeline.exec(async (err, result) => {
            if (err) console.error(err);
            if (result) console.log(result);
            await t.commit();
        });
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Tüm cihazlardan çıkış yapılırken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz!",
        });
    }
};
