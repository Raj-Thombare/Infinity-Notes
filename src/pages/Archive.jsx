import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import DataContext from "../context/data-context";
import NotesList from "../components/Notes/NotesList";
import EmptyArchives from "../components/UI/EmptyArchives";

let archivedNotes;

const Archive = () => {
  const { archives } = useContext(DataContext);

  const location = useLocation();

  if (archives?.length > 0) {
    archivedNotes = <NotesList notes={archives} path={location.pathname} />;
  }

  if (archives?.length === 0) {
    archivedNotes = <EmptyArchives />;
  }

  return (
    <Box style={{ marginLeft: "260px", padding: "24px" }}>
      <Box>{archivedNotes}</Box>
    </Box>
  );
};

export default Archive;
