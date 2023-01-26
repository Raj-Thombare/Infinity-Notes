import { createContext, useReducer } from "react";
import ArchivesReducer from "../reducers/archives-reducer";

const defaultArchivesState = {
  archives: [],
  addToArchive: (note) => {},
  archiveToTrash: (note) => {},
  unarchiveNote: (note) => {},
};

const ArchivesContext = createContext(defaultArchivesState);

export const ArchivesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ArchivesReducer, defaultArchivesState);

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

  const archiveToTrashHandler = (note) => {
    const filteredNotes = state.archives.filter(
      (existingNote) => existingNote.id !== note.id
    );

    dispatch({ type: "ARCHIVE_TO_TRASH", payload: note });
    dispatch({ type: "SET_ARCHIVES", payload: filteredNotes });
  };

  const archivesContextValue = {
    archives: state.archives,
    addToArchive: addToArchiveHandler,
    archiveToTrash: archiveToTrashHandler,
    unarchiveNote: unarchiveNoteHandler,
  };
  return (
    <ArchivesContext.Provider value={archivesContextValue}>
      {children}
    </ArchivesContext.Provider>
  );
};

export default ArchivesContext;
