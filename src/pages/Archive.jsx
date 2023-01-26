import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import ArchivesContext from "../contexts/archives-context";
import NotesList from "../components/Notes/NotesList";
import EmptyNotes from "../components/UI/EmptyList";

let archivedNotes;

const Archive = () => {
  const { archives } = useContext(ArchivesContext);

  const location = useLocation();

  if (archives?.length > 0) {
    archivedNotes = <NotesList notes={archives} path={location.pathname} />;
  }

  if (archives?.length === 0) {
    archivedNotes = <EmptyNotes path={location.pathname} />;
  }

  return (
    <Box style={{ marginLeft: "260px", padding: "24px" }}>
      <Box>{archivedNotes}</Box>
    </Box>
  );
};

export default Archive;
