import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchProductsApi } from "./productApi";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await fetchProductsApi();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // 🔥 MUST
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;