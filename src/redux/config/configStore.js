import countSlice from '../modules/countSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    countSlice
  }
});

export default store;
