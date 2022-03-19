import { configureStore } from "@reduxjs/toolkit";
// import reducers here
import problemsReducer from '../Features/Reducer/problemsSlice';
const store = configureStore({
  reducer: {
    problem: problemsReducer,
},
});

export default store;