import User from "../models/User.js";
import { generateToken } from "../lib/utils/generateToken.js";

export async function register(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all all fields" });
    }
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const newUser = await User.create({
            name,
            email,
            password,
        });
        generateToken(newUser._id, newUser.isAdmin, res);
        res.status(201).json({
            message: "User created successfully", user: {
                id: newUser._id,
                name,
                email,
                isAdmin: newUser.isAdmin,
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function login(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Please fill all fields" });

    try {
        const userExist = await User.findOne({ email });
        if (!userExist) return res.status(400).json({ message: "Email not found" });

        const isMatch = await userExist.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message: "Password is incorrect" });
        generateToken(userExist._id, userExist.isAdmin, res);
        res.status(200).json({
            message: "Login successful", user: {
                id: userExist._id,
                name: userExist.name,
                email: userExist.email,
                isAdmin: userExist.isAdmin,
            }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function logout(req, res, next) {
    try {
        res.cookie("token", "", {
            maxAge: "0",
        })
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};  

export async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        next(error);
    }
}