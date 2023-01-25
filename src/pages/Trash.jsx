import { useContext } from "react";
import { Box } from "@mui/material";
import DataContext from "../context/data-context";
import NotesList from "../components/Notes/NotesList";
import EmptyTrash from "../components/UI/EmptyTrash";

let trashNotes;

const Trash = () => {
  const { trash } = useContext(DataContext);

  if (trash?.length > 0) {
    trashNotes = <NotesList notes={trash} />;
  }

  if (trash?.length === 0) {
    trashNotes = <EmptyTrash />;
  }

  return (
    <Box style={{ marginLeft: "260px", padding: "24px" }}>
      <Box>{trashNotes}</Box>
    </Box>
  );
};

export default Trash;
