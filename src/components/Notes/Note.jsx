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
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;

  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;

const CustomButton = styled(Button)`
  min-width: 0px;
  padding: 0px;
`;

const Note = ({ note, path }) => {
  const { addToArchive, archiveToTrash, unarchiveNote } =
    useContext(ArchivesContext);

  const { addToTrash, restoreNote, deleteNote } = useContext(TrashContext);

  let cardActions;
  if (path === "/") {
    cardActions = (
      <>
        <CustomButton size="small" onClick={() => addToArchive(note)}>
          <ArchiveOutlined />
        </CustomButton>
        <CustomButton size="small" onClick={() => addToTrash(note)}>
          <DeleteOutlineOutlined />
        </CustomButton>
      </>
    );
  }

  if (path === "/archive") {
    cardActions = (
      <>
        <CustomButton size="small" onClick={() => unarchiveNote(note)}>
          <UnarchiveOutlined />
        </CustomButton>
        <CustomButton size="small" onClick={() => archiveToTrash(note)}>
          <DeleteOutlineOutlined />
        </CustomButton>
      </>
    );
  }

  if (path === "/trash") {
    cardActions = (
      <>
        <CustomButton size="small" onClick={() => deleteNote(note)}>
          <DeleteForeverOutlined />
        </CustomButton>
        <CustomButton size="small" onClick={() => restoreNote(note)}>
          <RestoreFromTrashOutlined />
        </CustomButton>
      </>
    );
  }

  return (
    <StyledCard>
      <CardContent sx={{ padding: 0, width: "100%", marginBottom: "20px" }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            color: "black",
            marginBottom: ".6rem",
          }}
          gutterBottom
        >
          {note.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            wordBreak: "break-word",
            whiteSpace: "pre-wrap",
            fontSize: "1rem",
            fontWeight: "400",
          }}
        >
          {note.text}
        </Typography>
      </CardContent>
      <CardActionsWrapper>{cardActions}</CardActionsWrapper>
    </StyledCard>
  );
};

export default Note;

