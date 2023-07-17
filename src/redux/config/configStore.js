import { combineReducers, createStore } from 'redux';
import surveySlice from '../modules/surveySlice';
import countSlice from '../modules/countSlice';
import userSlice from '../modules/userSlice';

const rootReducer = combineReducers({
  surveySlice,
  countSlice,
  userSlice
});

const store = createStore(rootReducer);
export default store;
