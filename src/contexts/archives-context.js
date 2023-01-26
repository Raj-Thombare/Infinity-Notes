import { createContext, useReducer, useContext } from "react";
import ArchivesReducer from "../reducers/archives-reducer";
import NotesContext from "./notes-context";

const defaultArchivesState = {
  archives: [],
  addToArchive: (note) => {},
  archiveToTrash: (note) => {},
  unarchiveNote: (note) => {},
};

const ArchivesContext = createContext(defaultArchivesState);

export const ArchivesContextProvider = ({ children }) => {
  const [archivesState, dispatchArchive] = useReducer(
    ArchivesReducer,
    defaultArchivesState
  );

  const { dispatchNote } = useContext(NotesContext);

  const addToArchiveHandler = (note) => {
    const filteredNotes = archivesState.archives.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatchArchive({ type: "ADD_TO_ARCHIVE", payload: note });
    dispatchNote({ type: "SET_NOTES", payload: filteredNotes });
  };

  const unarchiveNoteHandler = (note) => {
    const filteredNotes = archivesState.archives.filter(
      (existingNote) => existingNote.id !== note.id
    );
    dispatchArchive({ type: "UNARCHIVE_NOTE", payload: filteredNotes });
    dispatchArchive({ type: "ADD_NOTE", payload: note });
  };

  const archiveToTrashHandler = (note) => {
    const filteredNotes = archivesState.archives.filter(
      (existingNote) => existingNote.id !== note.id
    );

    dispatchArchive({ type: "ARCHIVE_TO_TRASH", payload: note });
    dispatchArchive({ type: "SET_ARCHIVES", payload: filteredNotes });
  };

  const archivesContextValue = {
    archives: archivesState.archives,
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
