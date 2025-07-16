import { useState } from "react";

function AddNote(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [errorMsg, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim() && !note.trim()) {
      setErrorMessage("Please insert a note!");
      return;
    }
    props.onAddNote({ title: title.trim() || "(Untitled)", note: note.trim() });
    setTitle("");
    setNote("");
    setErrorMessage("");
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
          setErrorMessage("");
        }}
      />
      <textarea
        id="description"
        type="text-area"
        placeholder="Take a note..."
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          setErrorMessage("");
        }}
      />
      <div id="error-msg">{errorMsg}</div>
      <button
        type="submit"
        id="note-button"
        disabled={!title.trim() && !note.trim()}
      >
        Add
      </button>
    </form>
  );
}
export default AddNote;
