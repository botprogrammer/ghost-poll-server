"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const poll_routes_1 = require("./routes/poll.routes");
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Database Connection
(0, db_1.connectDB)(); // Connect to MongoDB when the server starts
app.use("/api/polls", poll_routes_1.pollRoutes);
// Routes
app.get("/", (_, res) => {
    res.json({
        message: "✅ Ghost Poll Server is running. ^_^",
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
