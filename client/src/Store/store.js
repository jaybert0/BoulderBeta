import { configureStore } from "@reduxjs/toolkit";
// import reducers here
import problemsReducer from '../Features/Reducer/problemsSlice';
import locationReducer from '../Features/Reducer/locationsSlice'
import techReducer from '../Features/Reducer/techesSlice'
const store = configureStore({
  reducer: {
    problems: problemsReducer,
    locations: locationReducer,
    teches: techReducer,
},
});

export default store;