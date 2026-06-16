import jwt from "jsonwebtoken";
import "dotenv/config";

export function generateToken(userId, isAdmin, res) {
    try {
        const token = jwt.sign({ userId, isAdmin }, process.env.JWT_SECRET, { expiresIn: "1d" });
        if (!token) return res.status(400).json({ message: "Please Login" });

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};