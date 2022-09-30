import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types'
import { getProductList } from './actions'

interface InitialState {
  products: Product[]
  cartItems: Product[]
}
const initialState: InitialState = {
  products: [],
  cartItems: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      return {
        ...state,
        products: [...action.payload]
      }
    })
  }
})

export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer
