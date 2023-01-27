import { useContext } from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import {
  ArchiveOutlined,
  DeleteOutlineOutlined,
  UnarchiveOutlined,
  DeleteForeverOutlined,
  RestoreFromTrashOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ArchivesContext from "../../contexts/archives-context";
import TrashContext from "../../contexts/trash-context";
import CardActionsWrapper from "../UI/CardActionsWrapper";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  padding: 20px 20px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Note = ({ note, path }) => {
  const { addToArchive, archiveToTrash, unarchiveNote } =
    useContext(ArchivesContext);

  const { addToTrash, restoreNote, deleteNote } = useContext(TrashContext);

  return (
    <StyledCard>
      <CardContent sx={{ padding: 0, width: "100%" }}>
        <Typography
          sx={{ fontSize: 16, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
          {note.text}
        </Typography>
      </CardContent>
      {path === "/" && (
        <CardActionsWrapper
          sx={{
            padding: 0,
            width: "100%",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <Button size="small" onClick={() => addToArchive(note)}>
            <ArchiveOutlined />
          </Button>
          <Button size="small" onClick={() => addToTrash(note)}>
            <DeleteOutlineOutlined />
          </Button>
        </CardActionsWrapper>
      )}
      {path === "/archive" && (
        <CardActionsWrapper>
          <Button size="small" onClick={() => unarchiveNote(note)}>
            <UnarchiveOutlined />
          </Button>
          <Button size="small" onClick={() => archiveToTrash(note)}>
            <DeleteOutlineOutlined />
          </Button>
        </CardActionsWrapper>
      )}
      {path === "/trash" && (
        <CardActionsWrapper>
          <Button size="small" onClick={() => deleteNote(note)}>
            <DeleteForeverOutlined />
          </Button>
          <Button size="small" onClick={() => restoreNote(note)}>
            <RestoreFromTrashOutlined />
          </Button>
        </CardActionsWrapper>
      )}
    </StyledCard>
  );
};

export default Note;

