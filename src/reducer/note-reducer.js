const NotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
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
