import { combineReducers } from "redux";
// import reducers here
import problemReducer from "./problemsSlice"
const rootReducer = combineReducers({
    problems: problemsReducer,
});

export default rootReducer;