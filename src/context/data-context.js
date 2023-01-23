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
  notes: [],
  archives: [],
  trash: [],
});

export const DataContextProvider = ({ children }) => {
  const NotesData = {
    notes: dummyNotes,
    archives: [],
    trash: [],
  };
  return (
    <DataContext.Provider value={NotesData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
