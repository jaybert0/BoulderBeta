import { combineReducers } from "redux";
// import reducers here
import problemsReducer from "./problemsSlice"
const rootReducer = combineReducers({
    problems: problemsReducer,
});

export default rootReducer;