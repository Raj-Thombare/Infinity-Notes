import React, { createContext, useReducer } from "react";
import NotesReducer from "../reducer/note-reducer";

const defaultNotesState = {
  notes: [
    { id: 1, title: "Raj Thombare", text: "loremipsum" },
    { id: 2, title: "Rakaa", text: "loremipsum" },
    { id: 3, title: "Ben Stokes", text: "loremipsum" },
  ],
  archives: [],
  trash: [],
  addToNotes: (note) => {},
  addToArchive: (id) => {},
  addToTrash: () => {},
};

const DataContext = createContext(defaultNotesState);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, defaultNotesState);

  const addToNotesHandler = (note) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const addToArchiveHandler = (note) => {
    const newNotes = state.notes.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatch({ type: "SET_NOTES", payload: newNotes });
    dispatch({ type: "ADD_TO_ARCHIVE", payload: note });
  };

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
