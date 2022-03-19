import { configureStore } from "@reduxjs/toolkit";
// import reducers here
import problemReducer from '../Features/Reducer/problemsSlice';
const store = configureStore({
  reducer: {
    problem: problemReducer,
},
});

export default store;