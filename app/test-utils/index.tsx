import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import type { AppStore, RootState } from '../../redux/store'
import product from '../modules/home-page/redux/reducer'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function testRenderer (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: { product }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper ({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
        <Provider store={store}>{children}</Provider>
    )
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
