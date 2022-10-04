import React from 'react'
import { testRenderer } from '../../../test-utils'
import TextEnhanced from '../index'
import { TEXTID } from '../../../constants/test-constants'

describe('Text component', () => {
  const children = 'Harish'
  it('renders the correct text', () => {
    const { queryByTestId } = testRenderer(<TextEnhanced>{children} </TextEnhanced>)
    const text = queryByTestId(TEXTID)
    expect(text).toBeInTheDocument()
    expect(text).toHaveTextContent(children)
  })
})
