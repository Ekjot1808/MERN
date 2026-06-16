import Contact from "../models/Contact.js";


export async function getContacts(req, res, next) {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        if(!contacts) return res.status(404).json({ message: "No contacts found" });

        res.status(200).json({ contacts });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export async function sendContact(req, res, next) {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        const contact = await Contact.create({ name, email, message });
        if(!contact) return res.status(500).json({ message: "Failed to create contact" });
        res.status(201).json({ message: "Contact created successfully", contact });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
