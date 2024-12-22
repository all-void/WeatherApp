import dotenv from "dotenv";

dotenv.config(); // Load variables from .env file

export const API_BASE_URL = process.env.API_BASE_URL || "";
export const API_KEY = process.env.API_KEY || "";
export const PORT=process.env.PORT || 3001;
