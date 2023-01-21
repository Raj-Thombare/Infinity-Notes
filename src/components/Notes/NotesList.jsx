import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

export default NotesList;
