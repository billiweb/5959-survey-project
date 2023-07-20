import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: [
    {
      countEI: 0,
      countNS: 0,
      countFT: 0,
      countPJ: 0
    }
  ],

  reducers: {
    addCountEI: (state, action) => {
      return state.map((count) => {
        if (action.payload === 'EI') {
          return { ...count, countEI: count.countEI + 1 };
        } else if (action.payload === 'NS') {
          return { ...count, countNS: count.countNS + 1 };
        } else if (action.payload === 'FT') {
          return { ...count, countFT: count.countFT + 1 };
        } else if (action.payload === 'PJ') {
          return { ...count, countPJ: count.countPJ + 1 };
        } else {
          return false;
        }
      });
    }
  }
});

export const { addCountEI } = countSlice.actions;
export default countSlice.reducer;
