import { useState } from "react";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim() && !note.trim()) return;
    props.onAddNote({ title: title.trim() || "(Untitled)", note: note.trim() });
    setTitle("");
    setNote("");
  }

  return (
    <form id="add-container" onSubmit={handleSubmit}>
      <input
        id="title"
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        id="description"
        type="text-area"
        placeholder="Take a note..."
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
      <button type="submit" id="note-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
export default AddNote;
