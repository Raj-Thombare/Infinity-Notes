import NotesForm from "../components/Notes/NotesForm";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <NotesForm />
      </Box>
    </Box>
  );
};

export default Home;
