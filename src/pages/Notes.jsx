import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import NotesForm from "../components/Notes/NotesForm";
import NotesList from "../components/Notes/NotesList";
import EmptyNotes from "../components/UI/EmptyList";
import DataContext from "../context/data-context";

const Home = () => {
  const { notes } = useContext(DataContext);

  const location = useLocation();

  return (
    <Box sx={{ display: "flex", marginLeft: "260px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <NotesForm />
        {notes?.length > 0 ? (
          <NotesList notes={notes} path={location.pathname} />
        ) : (
          <EmptyNotes path={location.pathname} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
