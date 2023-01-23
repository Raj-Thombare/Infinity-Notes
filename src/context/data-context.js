import React, { createContext } from "react";

const dummyNotes = [
  {
    id: 1,
    title: "Note 1",
    text: "This is my first note! This is my first note! This is my third note!",
  },
  {
    id: 2,
    title: "Note 2",
    text: "This is my second note! This is my second note! This is my second note! This is my second note! This is my second note! This is my second note!",
  },
  {
    id: 3,
    title: "Note 3",
    text: "This is my third note! This is my third note! This is my third note! This is my third note!",
  },
];

const DataContext = createContext({
  allNotes: [],
  archives: [],
  trash: [],
  archiveNote: () => {},
  trashNote: () => {},
});

export const DataContextProvider = ({ children }) => {
  const archiveNotesHandler = () => {
    console.log("archived!");
  };
  const trashNoteHandler = () => {
    console.log("trashed!");
  };

  const NotesData = {
    allNotes: dummyNotes,
    archives: [],
    trash: [],
    archiveNote: archiveNotesHandler,
    trashNote: trashNoteHandler,
  };

  return (
    <DataContext.Provider value={NotesData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
