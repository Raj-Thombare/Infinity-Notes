import Note from "./Note";
import { Grid } from "@mui/material";

const NotesList = ({ notes, path }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        padding: "10px 20px",
      }}
    >
      <Grid container>
        {notes.map((note) => {
          return (
            <Grid item key={note.id}>
              <Note note={note} path={path} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default NotesList;
