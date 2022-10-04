
import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'
import product from '../app/modules/home-page/redux/reducer'
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  product
})
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function setupStore (preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
