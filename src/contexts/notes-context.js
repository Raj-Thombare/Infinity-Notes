import React, { createContext, useReducer } from "react";
import NotesReducer from "../reducers/notes-reducer";

const defaultNotesState = {
  notes: [
    { id: 1, title: "Raj Thombare", text: "loremipsum" },
    { id: 2, title: "Rakaa", text: "loremipsum" },
    { id: 3, title: "Ben Stokes", text: "loremipsum" },
    { id: 4, title: "Tulsidas Khan", text: "Toh mai kya karu? nahau!" },
  ],
  trash: [],
  addToNotes: (note) => {},
  addToTrash: (note) => {},
  restoreNote: (note) => {},
  deleteNote: (note) => {},
  emptyTrash: (trash) => {},
};

const NotesContext = createContext(defaultNotesState);

export const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, defaultNotesState);

  const addToNotesHandler = (note) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const addToTrashHandler = (note) => {
    const filteredNotes = state.notes.filter(
      (existingNote) => existingNote.id !== note.id
    );

    dispatch({ type: "ADD_TO_TRASH", payload: note });
    dispatch({ type: "SET_NOTES", payload: filteredNotes });
  };

  const restoreNoteHandler = (note) => {
    const filteredNotes = state.trash.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatch({ type: "RESTORE_NOTE", payload: filteredNotes });
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const deleteNoteHandler = (note) => {
    const filteredNotes = state.trash.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatch({ type: "DELETE_NOTE", payload: filteredNotes });
  };

  const emptyTrashHandler = (trash) => {
    const filteredNotes = state.trash.filter(
      (existingNote) => existingNote.id === trash.id
    );
    console.log(filteredNotes);
    dispatch({ type: "EMPTY_TRASH", payload: filteredNotes });
  };

  const notesContextValue = {
    notes: state.notes,
    trash: state.trash,
    addToNotes: addToNotesHandler,
    addToTrash: addToTrashHandler,
    restoreNote: restoreNoteHandler,
    deleteNote: deleteNoteHandler,
    emptyTrash: emptyTrashHandler,
  };

  return (
    <NotesContext.Provider value={notesContextValue}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
