import { Box, Typography } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const LightBulb = styled(Lightbulb)`
  font-size: 120px;
  color: #e5e5e5;
`;

const Archive = styled(ArchiveOutlined)`
  font-size: 120px;
  color: #e5e5e5;
`;

const Trash = styled(DeleteOutlineOutlined)`
  font-size: 120px;
  color: #e5e5e5;
`;

const Text = styled(Typography)`
  color: #5f6368;
  font-size: 1.375rem;
  opacity: 0.7;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyNotes = ({ path }) => {
  let content;
  if (path === "/") {
    content = (
      <Container>
        <LightBulb />
        <Text>Notes you add appear here</Text>
      </Container>
    );
  }

  if (path === "/archive") {
    content = (
      <Container>
        <Archive />
        <Text>Your archived notes appear here</Text>
      </Container>
    );
  }

  if (path === "/trash") {
    content = (
      <Container>
        <Trash />
        <Text>No notes in Trash</Text>
      </Container>
    );
  }
  return <>{content}</>;
};

export default EmptyNotes;
