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

    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archives: [...state.archives, action.payload],
      };
    case "ADD_TO_TRASH":
      return {
        ...state,
        trash: [...state.trash, action.payload],
      };
    case "UNARCHIVE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
        archives: action.payload,
      };
    default:
      return state;
  }
};

export default NotesReducer;
// case "MOVE_TO_ARCHIVE":
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//       };
//     case "MOVE_TO_TRASH":
//       return {
//         ...state,
//         repos: action.payload,
//         loading: false,
//       };
//     case "DELETE_NOTE":
//       return {
//         ...state,
//         loading: true,
//       };
