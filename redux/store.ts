import { configureStore } from '@reduxjs/toolkit'
import product from '../app/modules/home-page/redux/reducer'

export default configureStore({
  reducer: {
    product
  }
})
