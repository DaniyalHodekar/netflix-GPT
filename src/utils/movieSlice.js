import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    all: [],
    src: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlaying = action.payload;
      state.all = [...state.all, ...action.payload];
    },
    addPopularMovies(state, action) {
      state.popular = action.payload;
      state.all = [...state.all, ...action.payload];
    },
    addTopRatedMovies(state, action) {
      state.topRated = action.payload;
      state.all = [...state.all, ...action.payload];
    },
    addUpcomingMovies(state, action) {
      state.upcoming = action.payload;
      state.all = [...state.all, ...action.payload];
    },
    addSrc(state, action) {
      state.src = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addSrc,
} = movieSlice.actions;
export default movieSlice.reducer;
