export const isLoggedIn = async (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({
            message: "Lütfen giriş yapınız",
        });
    }
    next();
};
