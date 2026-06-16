import Contact from "../models/Contact.js";
import Service from "../models/Service.js";
import User from "../models/User.js";

export async function getUsers(req, res, next) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page - 1) * limit;
        const totalUsers = await User.countDocuments({ isAdmin: false });

        const users = await User.find({
            isAdmin: false,
        }).select("-password").sort({ createdAt: -1 }).skip(skip).limit(limit);
        if (!users) return res.status(404).json({ message: "No users found" });
        res.status(200).json({
            success: true,
            users,
            totalUsers,
            currentPage: page,
            totalPages: Math.ceil(totalUsers / limit),
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function getContacts(req, res, next) {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page - 1) * limit;
        const totalContacts = await Contact.countDocuments({});

        const contacts = await Contact.find().skip(skip).limit(limit).sort({ createdAt: -1 });
        if (!contacts) return res.status(404).json({ message: "No contacts found" });
        res.status(200).json({
            success: true,
            contacts,
            totalContacts,
            currentPage: page,
            totalPages: Math.ceil(totalContacts / limit),
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function getServices(req, res, next) {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        if (!services) return res.status(404).json({ message: "No services found" });
        res.status(200).json(services);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function createService(req, res, next) {
    try {
        const { name, description, price, provider } = req.body;
        if (!name || !description || !price || !provider) return res.status(400).json({ message: "Please fill in all fields" });

        if (price <= 0) return res.status(400).json({ message: "Price must be greater than 0" });
        const service = await Service.create({
            name,
            description,
            price,
            provider,
        });
        res.status(201).json({ message: "New service created", service });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function deleteService(req, res, next) {
    try {
        const id = req.params.id;
        const service = await Service.findByIdAndDelete(id);
        if (!service) return res.status(404).json({ message: "Service not found" });
        res.status(200).json({ message: "Service deleted" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}