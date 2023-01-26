import React, { createContext, useReducer } from "react";
import TrashReducer from "../reducers/trash-reducer";

const defaultTrashState = {
  trash: [],
  addToTrash: (note) => {},
  restoreNote: (note) => {},
  deleteNote: (note) => {},
  emptyTrash: (trash) => {},
};

const TrashContext = createContext(defaultTrashState);

export const NotesContextProvider = ({ children }) => {
  const [trashState, dispatchTrash] = useReducer(
    TrashReducer,
    defaultTrashState
  );

  const addToTrashHandler = (note) => {
    const filteredNotes = trashState.trash.filter(
      (existingNote) => existingNote.id !== note.id
    );

    dispatchTrash({ type: "ADD_TO_TRASH", payload: note });
    dispatchTrash({ type: "SET_NOTES", payload: filteredNotes });
  };

  const restoreNoteHandler = (note) => {
    const filteredNotes = trashState.trash.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatchTrash({ type: "RESTORE_NOTE", payload: filteredNotes });
    dispatchTrash({ type: "ADD_NOTE", payload: note });
  };

  const deleteNoteHandler = (note) => {
    const filteredNotes = trashState.trash.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatchTrash({ type: "DELETE_NOTE", payload: filteredNotes });
  };

  const emptyTrashHandler = (trash) => {
    const filteredNotes = trashState.trash.filter(
      (existingNote) => existingNote.id === trash.id
    );
    console.log(filteredNotes);
    dispatchTrash({ type: "EMPTY_TRASH", payload: filteredNotes });
  };

  const trashContextValue = {
    trash: trashState.trash,
    addToTrash: addToTrashHandler,
    restoreNote: restoreNoteHandler,
    deleteNote: deleteNoteHandler,
    emptyTrash: emptyTrashHandler,
  };

  return (
    <TrashContext.Provider value={trashContextValue}>
      {children}
    </TrashContext.Provider>
  );
};

export default TrashContext;
