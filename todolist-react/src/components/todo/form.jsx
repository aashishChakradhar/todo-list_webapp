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
    <div id="add-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Take a note..."
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddNote;
