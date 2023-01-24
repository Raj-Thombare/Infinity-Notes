import React, { createContext, useReducer } from "react";
import NotesReducer from "../reducer/note-reducer";

const DataContext = createContext({
  allNotes: [],
  archives: [],
  trash: [],
  archiveNote: () => {},
  trashNote: () => {},
});

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, DataContext);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
