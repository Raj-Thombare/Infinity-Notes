import React, { createContext, useReducer } from "react";
import NotesReducer from "../reducer/note-reducer";

const defaultNotesState = {
  notes: [
    { id: 1, title: "Raj Thombare", text: "loremipsum" },
    { id: 2, title: "Rakaa", text: "loremipsum" },
    { id: 3, title: "Ben Stokes", text: "loremipsum" },
    { id: 4, title: "Tulsidas Khan", text: "Toh mai kya karu? nahau!" },
  ],
  archives: [],
  trash: [],
  addToNotes: (note) => {},
  addToArchive: (note) => {},
  addToTrash: (note) => {},
  archiveToTrash: (note) => {},
  unarchiveNote: (note) => {},
  restoreNote: (note) => {},
  deleteNote: (note) => {},
  emptyTrash: (trash) => {},
};

const DataContext = createContext(defaultNotesState);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, defaultNotesState);

  const addToNotesHandler = (note) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const addToArchiveHandler = (note) => {
    const filteredNotes = state.notes.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatch({ type: "ADD_TO_ARCHIVE", payload: note });
    dispatch({ type: "SET_NOTES", payload: filteredNotes });
  };

  const unarchiveNoteHandler = (note) => {
    const filteredNotes = state.archives.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatch({ type: "UNARCHIVE_NOTE", payload: filteredNotes });
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  const addToTrashHandler = (note) => {
    const filteredNotes = state.notes.filter(
      (existingNote) => existingNote.id !== note.id
    );

    dispatch({ type: "ADD_TO_TRASH", payload: note });
    dispatch({ type: "SET_NOTES", payload: filteredNotes });
  };

  const archiveToTrashHandler = (note) => {
    const filteredNotes = state.archives.filter(
      (existingNote) => existingNote.id !== note.id
    );

    dispatch({ type: "ARCHIVE_TO_TRASH", payload: note });
    dispatch({ type: "SET_ARCHIVES", payload: filteredNotes });
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

  const dataContextValue = {
    notes: state.notes,
    archives: state.archives,
    trash: state.trash,
    addToNotes: addToNotesHandler,
    addToArchive: addToArchiveHandler,
    addToTrash: addToTrashHandler,
    archiveToTrash: archiveToTrashHandler,
    unarchiveNote: unarchiveNoteHandler,
    restoreNote: restoreNoteHandler,
    deleteNote: deleteNoteHandler,
    emptyTrash: emptyTrashHandler,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
