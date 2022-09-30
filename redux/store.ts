import { configureStore } from '@reduxjs/toolkit'
import product from '../app/modules/home-page/redux/reducer'

const store = configureStore({
  reducer: {
    product
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
