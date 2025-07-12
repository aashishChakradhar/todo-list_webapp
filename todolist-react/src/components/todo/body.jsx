import AddNote from "./form.jsx";
import DisplayNote from "./list.jsx";
import { useState, useEffect } from "react";
function Body() {
  const [notes, setNotes] = useState([]);
  function fetchNotes() {
    fetch("http://localhost:5000/api/notes")
      .then((res) => res.json())
      .then(setNotes)
      .catch((err) => console.error("Failed to load notes", err));
  }
  function addNote(newNote) {
    fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then(() => {
        fetchNotes();
      });
  }
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div id="body-container">
      <AddNote onAddNote={addNote} />
      <DisplayNote notes={notes} />
    </div>
  );
}
export default Body;
