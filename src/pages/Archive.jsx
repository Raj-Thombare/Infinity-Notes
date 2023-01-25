import { useContext } from "react";
import { Box } from "@mui/material";
import DataContext from "../context/data-context";
import NotesList from "../components/Notes/NotesList";
import EmptyNotes from "../components/UI/EmptyNotes";

const Archive = () => {
  const { archives } = useContext(DataContext);
  console.log(archives);
  return (
    <Box style={{ marginLeft: "260px", padding: "24px" }}>
      <Box>
        {archives?.length > 0 ? <NotesList notes={archives} /> : <EmptyNotes />}
      </Box>
    </Box>
  );
};

export default Archive;
