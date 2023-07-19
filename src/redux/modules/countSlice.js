import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    countEI: 0,
    countNS: 0,
    countFT: 0,
    countPJ: 0
  }
];

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addCountEI: (state, action) => {
      // if(action.payload)
      return state.countEI + 1;
    }
  }
});

export const { addCountEI } = countSlice.actions;
export default countSlice.reducer;
