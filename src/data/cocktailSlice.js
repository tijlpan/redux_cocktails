import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  string: "",
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
  },
});

export default cocktailSlice;
export const { setID, setString } = cocktailSlice.actions;