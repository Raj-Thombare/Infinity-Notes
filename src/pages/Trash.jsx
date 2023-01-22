import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import SwipeDrawer from "../components/UI/SwipeDrawer";
import NotesList from "../components/Notes/NotesList";
import EmptyNotes from "../components/UI/EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Trash = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <SwipeDrawer />
        {false ? <NotesList /> : <EmptyNotes />}
      </Box>
    </Box>
  );
};

export default Trash;
