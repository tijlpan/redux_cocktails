import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  string: "",
  detailShown: false,
};

const cocktailSlice = createSlice({
  name: "cocktailState",
  initialState,
  reducers: {
    setID(state, { payload: id }) {
      state.id = id;
    },
    setString(state, { payload: str }) {
        state.string = str;
      },
    setDetailShown(state, {payload: bool}) {
      state.detailShown = bool;
    }
  },
});

export default cocktailSlice;
export const { setID, setString, setDetailShown } = cocktailSlice.actions;