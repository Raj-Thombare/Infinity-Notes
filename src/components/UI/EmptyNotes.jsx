import { Box, Typography } from "@mui/material";
import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const LightBulb = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
  opacity: 0.4;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyNotes = () => {
  return (
    <Container>
      <LightBulb />
      <Text>Notes you add appear here</Text>
    </Container>
  );
};

export default EmptyNotes;
