import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseURL } from '../../../constants/api'
import { Product } from '../types/index'

export const getProductList = createAsyncThunk('products/list', async () => {
  const data = await fetch(baseURL)
  return (await data.json()) as Product[]
})
