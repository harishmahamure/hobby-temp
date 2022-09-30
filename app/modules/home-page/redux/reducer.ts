import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types'
import { getProductList } from './actions'

interface Cart extends Product {
  count: 0
}
interface InitialState {
  products: Product[]
  cartItems: Cart[]
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
        cartItems: [...state.cartItems, { ...action.payload, count: 1 }]
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload)
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
