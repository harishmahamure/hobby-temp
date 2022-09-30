import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../components/hooks'
import { getProductList } from './redux/actions'
import { Product } from './types'
import { addToCart, removeFromCart } from './redux/reducer'
interface IHomePageHooksReturnProps {
  handleAddToProductPress: (product: Product) => void
  products: Product[]
  cartItems: Product[]
  handleRemoveProductPress: (id: number) => void
}

export const useHomePage = (): IHomePageHooksReturnProps => {
  const dispatch = useAppDispatch()
  const { products, cartItems } = useAppSelector(st => st.product)
  console.log(cartItems)
  useEffect(() => {
    dispatch(getProductList())
  }, [])

  const handleAddToProductPress = (product: Product): void => {
    dispatch(addToCart(product))
  }

  const handleRemoveProductPress = (id: number): void => {
    dispatch(removeFromCart(id))
  }

  return {
    handleAddToProductPress,
    products,
    cartItems,
    handleRemoveProductPress
  }
}
