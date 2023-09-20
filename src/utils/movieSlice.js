import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    src: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlaying = action.payload;
    },
    addSrc(state, action) {
      state.src = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addSrc } = movieSlice.actions;
export default movieSlice.reducer;
