import { configureStore } from "@reduxjs/toolkit";
// import reducers here
// import problemsReducer from '../Features/Reducer/problemsSlice';
import locationReducer from '../Features/Maker/Location/locationSlice'
const store = configureStore({
  reducer: {
    // problem: problemsReducer,
    locations: locationReducer,
},
});

export default store;