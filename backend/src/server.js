import express from "express";
import "dotenv/config";
import dns from "dns";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoute.js";
import contactRoutes from "./routes/contactRoute.js";
import serviceRoutes from "./routes/serviceRoute.js";
import adminRoutes from "./routes/adminRoute.js";

import connectDB from "./config/db.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;
dns.setServers(["1.1.1.1", "1.0.0.1"]);

app.use(express.json());
app.use(errorMiddleware);
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/admin", adminRoutes);

await connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});