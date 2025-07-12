import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import todoRoutes from "./routes/todoapp.js";
import apiNotesRouter from "./routes/apiNotes.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); // Or configure as needed

//to get __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware

//for view (ejs files)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "todo-ejs/views"));
app.use(express.urlencoded({ extended: true }));

//for static files
app.use(express.static(path.join(__dirname, "todo-ejs/public")));

// // Routes for ejs
// app.use("/", todoRoutes);

// for react
app.use(express.json()); // Parse JSON bodies for API requests
app.use("/api", apiNotesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
