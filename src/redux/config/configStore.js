import { combineReducers, createStore } from "redux";
import survey from "../modules/survey";

const rootReducer = combineReducers({
  survey,
});

const store = createStore(rootReducer);
export default store;
