import NotesForm from "../components/Notes/NotesForm";
import Box from "@mui/material/Box";
import SwipeDrawer from "../components/UI/SwipeDrawer";

const Home = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <SwipeDrawer />
        <NotesForm />
      </Box>
    </Box>
  );
};

export default Home;
