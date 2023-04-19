import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    lon: null,
    lat: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

export const { setResturant } = resturantSlice.actions;

export const selectResturant = (state) => state.resturant.resturant;

export default resturantSlice.reducer;
