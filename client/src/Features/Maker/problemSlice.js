const initialState = {
    entities: [], // array of cats
    status: "idle", // loading state
  };
  
  function catsReducer(state = initialState, action) {
    switch (action.type) {
      // sync actions
      case "cats/catAdded":
        return {
          ...state,
          entities: [...state.entities, action.payload],
        };
      case "cats/catRemoved":
        return {
          ...state,
          entities: state.entities.filter((cat) => cat.id !== action.payload),
        };
      case "cats/catUpdated":
        return {
          ...state,
          entities: state.entities.map((cat) =>
            cat.id === action.payload.id ? action.payload : cat
          ),
        };
  
      // async actions
      case "cats/fetchCats/pending":
        return {
          ...state,
          status: "loading",
        };
      case "cats/fetchCats/fulfilled":
        return {
          ...state,
          entities: action.payload,
          status: "idle",
        };
  
      default:
        return state;
    }
  }
  
  export default catsReducer;