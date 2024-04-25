import { ProductProps } from "@/src/@types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProductProps[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductProps>) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity && product.quantity++;
        return;
      }
      state.push({ ...action.payload, quantity: 1 });
    },

    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.quantity && product.quantity++;
      }
    },

    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        if (product.quantity === 1) {
          return state.filter((product) => product.id !== action.payload);
        }
        product.quantity && product.quantity--;
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
