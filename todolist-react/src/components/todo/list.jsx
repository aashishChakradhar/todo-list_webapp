function DisplayNote(props) {
  return (
    <div id="display-container">
      {props.notes.map((item, index) => (
        <div className="note-container" key={index}>
          <div className="title">{item.title}</div>
          <div className="note">{item.note}</div>
        </div>
      ))}
      <ul></ul>
    </div>
  );
}
export default DisplayNote;
