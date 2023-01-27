import React, { createContext, useReducer } from "react";
import NotesReducer from "../reducers/notes-reducer";

const defaultNotesState = {
  notes: [
    {
      id: 1,
      title: "Raj Thombare",
      text: "loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum",
    },
    {
      id: 2,
      title: "Rakaa",
      text: "loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum",
    },
    {
      id: 3,
      title: "Ben Stokes",
      text: "loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum",
    },
    {
      id: 4,
      title: "Tulsidas Khan",
      text: "Toh mai kya karu? nahau!Toh mai kya karu? nahau!Toh mai kya karu? nahau!Toh mai kya karu? nahau!Toh mai kya karu?!",
    },
  ],
  addToNotes: (note) => {},
  deleteNote: (note) => {},
};

const NotesContext = createContext(defaultNotesState);

export const NotesContextProvider = ({ children }) => {
  const [notesState, dispatchNote] = useReducer(
    NotesReducer,
    defaultNotesState
  );

  const addToNotesHandler = (note) => {
    dispatchNote({ type: "ADD_NOTE", payload: note });
  };

  const deleteNoteHandler = (note) => {
    const filteredNotes = notesState.trash.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatchNote({ type: "DELETE_NOTE", payload: filteredNotes });
  };

  const notesContextValue = {
    notes: notesState.notes,
    addToNotes: addToNotesHandler,
    deleteNote: deleteNoteHandler,
    notesState,
    dispatchNote,
  };

  return (
    <NotesContext.Provider value={notesContextValue}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
