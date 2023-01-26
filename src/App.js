import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Notes from "./pages/Notes";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import NotFound from "./pages/NotFound";
import SwipeDrawer from "./components/UI/SwipeDrawer";
import { NotesContextProvider } from "./contexts/notes-context";
import { ArchivesContextProvider } from "./contexts/archives-context";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const App = () => {
  return (
    <NotesContextProvider>
      <ArchivesContextProvider>
        <SwipeDrawer />
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ArchivesContextProvider>
    </NotesContextProvider>
  );
};

export default App;
