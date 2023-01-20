import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NotesForm from "../components/Notes/NotesForm";
import SwipeDrawer from "../components/UI/SwipeDrawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Home = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <SwipeDrawer />
        <NotesForm />
      </Box>
    </Box>
  );
};

export default Home;
