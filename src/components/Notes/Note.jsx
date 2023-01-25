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
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import DataContext from "../../context/data-context";

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
  const { addToArchive, addToTrash, removeFromArchive } =
    useContext(DataContext);
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
      <CardActions>
        {path === "/archive" ? (
          <Button size="small" onClick={() => removeFromArchive(note)}>
            <UnarchiveOutlined />
          </Button>
        ) : (
          <Button size="small" onClick={() => addToArchive(note)}>
            <ArchiveOutlined />
          </Button>
        )}
        <Button size="small" onClick={() => addToTrash(note)}>
          <DeleteOutlineOutlined />
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default Note;
