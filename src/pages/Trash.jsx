import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DataContext from "../context/data-context";
import NotesList from "../components/Notes/NotesList";
import EmptyNotes from "../components/UI/EmptyList";

let trashNotes;

const Trash = () => {
  const { trash, emptyTrash } = useContext(DataContext);

  const location = useLocation();

  if (trash?.length > 0) {
    trashNotes = <NotesList notes={trash} path={location.pathname} />;
  }

  if (trash?.length === 0) {
    trashNotes = <EmptyNotes path={location.pathname} />;
  }

  return (
    <Box
      style={{
        marginLeft: "260px",
        padding: "24px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <p
          style={{
            marginRight: "20px",
          }}
        >
          Notes in Trash are deleted after 7 days.
        </p>
        {trash.length > 0 && (
          <Button onClick={() => emptyTrash(trash)}>Empty Trash</Button>
        )}
      </div>
      <Box>{trashNotes}</Box>
    </Box>
  );
};

export default Trash;
