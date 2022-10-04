import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types'
import { getProductList } from './actions'

export interface ICart extends Product {
  count: 0
}
interface InitialState {
  products: Product[]
  cartItems: ICart[]
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
    },
    incrementProductCartCount: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              count: item.count + 1
            }
          }
          return item
        })
      }
    },
    decrementProductCartCount: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload) {
              return {
                ...item,
                count: item.count - 1
              }
            }
            return item
          })
          .filter((item) => item.count > 0)
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

export const {
  addToCart,
  removeFromCart,
  decrementProductCartCount,
  incrementProductCartCount
} = productSlice.actions

export default productSlice.reducer
