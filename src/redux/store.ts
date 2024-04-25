import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Slices/products.slice'

export default configureStore({
  reducer: {
    products: productsReducer
  }
})