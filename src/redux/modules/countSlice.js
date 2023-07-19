import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   {
//     id: 5,
//     countEI: 0,
//     countNS: 0,
//     countFT: 0,
//     countPJ: 0
//   }
// ];

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    countEI: 0,
    countNS: 0,
    countFT: 0,
    countPJ: 0
  },
  reducers: {
    addCountEI: (state, action) => {
      state.countEI = state.countEI + action.payload;
    }
  }
});

export const { addCountEI } = countSlice.actions;
export default countSlice.reducer;
