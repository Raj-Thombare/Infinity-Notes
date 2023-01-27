const NotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };

    case "DELETE_NOTE":
      return {
        ...state,
        trash: action.payload,
      };

    default:
      return state;
  }
};

export default NotesReducer;
