import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ICart } from '../../../modules/home-page/redux/reducer'
import { testRenderer } from '../../../test-utils'
import Header from '../index'

const mock = [
  {
    id: 1,
    count: 1,
    colour: 'Black',
    name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
    price: 10,
    img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024'
  },
  {
    id: 2,
    count: 1,
    colour: 'Stone',
    name: 'Stone Ribbed Strappy Cut Out Detail Bodycon Dress',
    price: 4,
    img: 'https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024'
  },
  {
    id: 3,
    count: 1,
    colour: 'Black',
    name: 'Black Frill Tie Shoulder Bodycon Dress',
    price: 7.99,
    img: 'https://cdn-img.prettylittlething.com/d/c/3/3/dc337260f9ecefdb99a8c8e98cd73ccb1b79cea5_cmb6804_4.jpg?imwidth=1024'
  }
]

const MockComponentWithNav = ({ cartItems }: { cartItems: ICart[] }) => (
    <NavigationContainer>
        <Header cartItems={cartItems} />
    </NavigationContainer>
)

describe('Text component', () => {
  it('Doesnot renders cart items when cart items not present', () => {
    const { queryByTestId } = testRenderer(<MockComponentWithNav cartItems={[]} />)
    const element = queryByTestId('components-header-view-6')
    expect(element).toBeNull()
  })

  it('Doesnot renders back button when back is not available', () => {
    const { queryByTestId } = testRenderer(<MockComponentWithNav cartItems={[]} />)
    const element = queryByTestId('header-touchable-componentsview-3')
    const icon = queryByTestId('components-header-iconicons-4')
    expect(element).toBeNull()
    expect(icon).toBeNull()
  })

  it('Fires event when items added into the cart', () => {
    const { queryByTestId } = testRenderer(<MockComponentWithNav cartItems={mock} />)
    const element = queryByTestId('components-header-touchable-6"')
    expect(element).not.toBeNull()
  })
})
