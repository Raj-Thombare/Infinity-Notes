import { Routes, Route } from "react-router-dom";

import Notes from "./pages/Notes";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
