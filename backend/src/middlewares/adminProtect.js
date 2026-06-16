export const adminProtect = (req, res, next) => {
    try {
        console.log(req.user);
        console.log(req.user.isAdmin);
        console.log(typeof req.user.isAdmin);
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        if (!req.user.isAdmin) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
};