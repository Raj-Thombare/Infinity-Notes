import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NotesForm from "../components/Notes/NotesForm";
import SwipeDrawer from "../components/UI/SwipeDrawer";
import Note from "../components/Notes/Note";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const dummyNotes = [
  {
    id: 1,
    title: "Note 1",
    text: "This is my first note!",
  },
  {
    id: 2,
    title: "Note 2",
    text: "This is my second note!",
  },
  {
    id: 3,
    title: "Note 3",
    text: "This is my third note!",
  },
];

const Home = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <SwipeDrawer />
        <NotesForm />
        <Note />
      </Box>
    </Box>
  );
};

export default Home;
