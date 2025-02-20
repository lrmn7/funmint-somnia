import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    walletAddress: "",
  },
  reducers: {
    setWalletAddress: (state, { payload }) => {
      state.walletAddress = payload;
    },
  },
});

export const { setWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;
