import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import todoRoutes from "./todo-ejs/routes/todoapp.js";

const app = express();
const PORT = 3000;

//to get __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware

//for view (ejs files)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "todo-ejs/views"));
app.use(express.urlencoded({ extended: true }));

//for static files
app.use(express.static(path.join(__dirname, "todo-ejs/public")));

// Routes
app.use("/", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
