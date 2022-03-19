import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {}, // array of cats
  status: "idle", // loading state
};

export const fetchProblems = createAsyncThunk("problems/fetchProblems", async () => {
  // return a Promise containing the data we want
  return fetch("/problems")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => data)
    ;
});

  const problemSlice = createSlice({
    name: "problems",
    initialState,
    reducers: 
    {},
    //   catAdded(state, action) {
    //     // using createSlice lets us mutate state!
    //     state.entities.push(action.payload);
    //   },
    //   catUpdated(state, action) {
    //     const cat = state.entities.find((cat) => cat.id === action.payload.id);
    //     cat.url = action.payload.url;
    //   },
    //   // async actions to come...
    // },
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
  // export const { catAdded, catUpdated } = catsSlice.actions;

  export default problemSlice.reducer;