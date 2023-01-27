const ArchivesReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARCHIVES":
      return {
        ...state,
        archives: action.payload,
      };

    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archives: [...state.archives, action.payload],
      };

    case "UNARCHIVE_NOTE":
      return {
        ...state,
        archives: action.payload,
      };

    default:
      return state;
  }
};

export default ArchivesReducer;
