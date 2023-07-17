import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    name: '닉네임',
    email: 'test@gmail.com'
  }
];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        userName: action.payload.name,
        userEmail: action.payload.email
      };
    }
  }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
