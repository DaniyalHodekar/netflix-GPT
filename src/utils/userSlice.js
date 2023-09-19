import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: function (state, action) {
      state.user = action.payload;
    },
    removeUser: function (state, action) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
