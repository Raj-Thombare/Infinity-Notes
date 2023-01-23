import { useContext } from "react";
import { Box } from "@mui/material";
import NotesForm from "../components/Notes/NotesForm";
import NotesList from "../components/Notes/NotesList";
import EmptyNotes from "../components/UI/EmptyNotes";
import DataContext from "../context/data-context";

const Home = () => {
  const { allNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NotesForm />
          {allNotes.length > 0 ? (
            <NotesList notes={allNotes} />
          ) : (
            <EmptyNotes />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
