import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, "../data/notes.json");

// Ensure the data directory exists
const ensureFile = () => {
  const dir = path.dirname(FILE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, "[]");
};

// GET all notes
router.get("/notes", (req, res) => {
  ensureFile();
  const data = fs.readFileSync(FILE_PATH, "utf8");
  res.json(JSON.parse(data));
});

// POST a new note
router.post("/notes", (req, res) => {
  ensureFile();
  const { title, note } = req.body;
  if (!title && !note) {
    return res.status(400).json({ error: "Either title or note is required" });
  }

  const existing = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
  const newNote = { id: Date.now(), title, note };
  existing.push(newNote);
  fs.writeFileSync(FILE_PATH, JSON.stringify(existing, null, 2));
  res.status(201).json({ message: "Note saved", note: newNote });
});

export default router;
