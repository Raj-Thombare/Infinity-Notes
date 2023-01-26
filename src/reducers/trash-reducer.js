const TrashReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_TRASH":
      return {
        ...state,
        trash: [...state.trash, action.payload],
      };

    case "RESTORE_NOTE":
      return {
        ...state,
        trash: action.payload,
      };
    case "DELETE_NOTE":
      return {
        ...state,
        trash: action.payload,
      };
    case "EMPTY_TRASH":
      return {
        ...state,
        trash: action.payload,
      };
    default:
      return state;
  }
};

export default TrashReducer;
