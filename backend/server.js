import express from "express";
import router from "./routes/weather.js";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

// Middleware
app.use(express.json()); // Body parser middleware
app.use(cors()); // CORS support (if needed)

// Routes
app.use("/weather", router);
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// shutdown handling
process.on("SIGINT", () => {
  console.log("Shutting down...");
  process.exit(0);
});
