import { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
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

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
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
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography variant="body2">{note.text}</Typography>
      </CardContent>
      {path === "/" && (
        <CardActions>
          <Button size="small" onClick={() => addToArchive(note)}>
            <ArchiveOutlined />
          </Button>
          <Button size="small" onClick={() => addToTrash(note)}>
            <DeleteOutlineOutlined />
          </Button>
        </CardActions>
      )}
      {path === "/archive" && (
        <CardActions>
          <Button size="small" onClick={() => unarchiveNote(note)}>
            <UnarchiveOutlined />
          </Button>
          <Button size="small" onClick={() => archiveToTrash(note)}>
            <DeleteOutlineOutlined />
          </Button>
        </CardActions>
      )}
      {path === "/trash" && (
        <CardActions>
          <Button size="small" onClick={() => deleteNote(note)}>
            <DeleteForeverOutlined />
          </Button>
          <Button size="small" onClick={() => restoreNote(note)}>
            <RestoreFromTrashOutlined />
          </Button>
        </CardActions>
      )}
    </StyledCard>
  );
};

export default Note;

