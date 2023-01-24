import Note from "./Note";
import { Grid } from "@mui/material";

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
      <Grid container>
        {notes.map((note) => {
          return (
            <Grid item key={note.id}>
              <Note note={note} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default NotesList;
