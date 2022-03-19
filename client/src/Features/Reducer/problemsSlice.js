import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [], // array of cats
  status: "idle", // loading state
};

export const fetchProblems = createAsyncThunk("problems/fetchProblems", async () => {
  // return a Promise containing the data we want
  return fetch("/problems")
    .then((response) => response.json())
    .then((data) => data)
    ;
});

  const problemsSlice = createSlice({
    name: "problems",
    initialState,
    reducers: {
      problemAdded(state, action) {
        // using createSlice lets us mutate state!
        state.entities.push(action.payload);
      },
      problemUpdated(state, action) {
        const cat = state.entities.find((cat) => cat.id === action.payload.id);
        cat.url = action.payload.url;
      },
      // async actions to come...
    },
    extraReducers: {
      // handle async action types
      [fetchProblems.pending](state) {
        state.status = "loading";
      },
      [fetchProblems.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "completed";
      },
    },
  });
// change exported actions
  export const { problemAdded, problemUpdated } = problemsSlice.actions;

  export default problemsSlice.reducer;