/* eslint-disable @typescript-eslint/no-namespace */
import { HomePageNavParams } from '../modules/home-page/types'
import { CheckoutPageParamsList } from '../modules/checkout-page/types'
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type IStackNavigatorTypes = {
  Home: HomePageNavParams
  Checkout: CheckoutPageParamsList
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IStackNavigatorTypes {}
  }
}
