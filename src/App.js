import AddNote from "./components/Note/AddNote";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <AddNote />
      {/* notes list */}
    </div>
  );
};

export default App;
