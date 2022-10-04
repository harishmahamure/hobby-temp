import React from 'react'
import { testRenderer } from '../../../test-utils'
import TextEnhanced from '../index'

describe('Text component', () => {
  const children = 'Harish'
  it('renders the correct text', async () => {
    const { queryByTestId } = testRenderer(<TextEnhanced>{children} </TextEnhanced>)
    const text = queryByTestId('component-text-text-1')
    expect(text).toHaveTextContent(children)
  })
})
