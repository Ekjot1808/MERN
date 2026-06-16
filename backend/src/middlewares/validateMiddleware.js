
export const validate = (schema) => async (req, res, next) => {
    try {
        const data = await schema.parseAsync(req.body);
        req.body = data;
        next();
    } catch (error) {
        res.status(400).json({ message: error.issues[0].message });
    }
}