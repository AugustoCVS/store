import { ProductProps } from "@/src/@types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductProps[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductProps>) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity && product.quantity++;
        return;
      }
      state.push({ ...action.payload, quantity: 1 });
    },

    increaseProductQuantity: (state, action: PayloadAction<ProductProps>) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity && product.quantity++;
      }
    },

    decreaseProductQuantity: (state, action: PayloadAction<ProductProps>) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity && product.quantity--;
      }
    },
  },
});

export const { addProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
