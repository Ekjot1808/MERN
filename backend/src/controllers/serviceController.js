import Service from "../models/Service.js";

export const getServices = async (req, res, next) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        if (!services) return res.status(404).json({ message: "No services found" });
        res.status(200).json({ services });
    } catch (error) {
        console.log(error);
        next(error);
    }
}