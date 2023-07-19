import surveySlice from '../modules/surveySlice';
import countSlice from '../modules/countSlice';
import userSlice from '../modules/userSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    surveySlice,
    countSlice,
    userSlice
  }
});

export default store;
