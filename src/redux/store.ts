import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Slices/products.slice'

export const store = configureStore({
  reducer: {
    products: productsReducer
  }
})

