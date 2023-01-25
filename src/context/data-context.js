import React, { createContext, useReducer } from "react";
import NotesReducer from "../reducer/note-reducer";

const DataContext = createContext({
  notes: [],
  archives: [],
  trash: [],
  addToNotes: (note) => {},
  addToArchive: () => {},
  addToTrash: () => {},
});

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, {
    notes: [],
    archives: [],
    trash: [],
    addToNotes: (note) => {},
    addToArchive: () => {},
    addToTrash: () => {},
  });
  const addToNotesHandler = (note) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const addToArchiveHandler = () => {};
  const addToTrashHandler = () => {};

  const dataContextValue = {
    notes: state.notes,
    archives: state.archives,
    trash: state.trash,
    addToNotes: addToNotesHandler,
    addToArchive: addToArchiveHandler,
    addToTrash: addToTrashHandler,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
