import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Notes from "./pages/Notes";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import NotFound from "./pages/NotFound";
import SwipeDrawer from "./components/UI/SwipeDrawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const App = () => {
  return (
    <>
      <SwipeDrawer />
      <DrawerHeader />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
