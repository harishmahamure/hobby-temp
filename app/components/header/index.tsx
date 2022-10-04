import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Badge } from 'react-native-paper'
import { black, white } from '../../constants/colors'
import Text from '../Text'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ICart } from '../../modules/home-page/redux/reducer'

const Header = ({ cartItems }: { cartItems: ICart[] }): JSX.Element => {
  const { canGoBack, goBack, navigate } = useNavigation()
  const { name } = useRoute()
  return (
    <View data-testID='components-header-index-view-1' style={styles.container}>
      <Text data-testID='components-header-index-text-2' size={20} color={white} weight="bold">
        {canGoBack() && (
          <TouchableOpacity data-testID='components-header-touchable-view-3' style={{ paddingHorizontal: 10 }} onPress={goBack}>
            <Ionicons data-testID='components-header-iconicons-4' name="md-return-down-back" size={20} />
          </TouchableOpacity>
        )}
        {name}
      </Text>
      <View data-testID='components-header-view-5' style={styles.cartContainer}>
        {cartItems.length > 0 && (
          <>
            <TouchableOpacity
            data-testID='components-header-view-6'
              onPress={() => {
                navigate('Checkout')
              }}
            >
              <Ionicons data-testID='components-header-icon-7' name="cart-sharp" size={32} color={white} />
              <View data-testID='components-header-view-8' style={styles.badge}>
                <Badge
                  data-testID='components-header-badge-9'
                  size={20}
                  style={{ backgroundColor: white, color: black }}
                >
                  {cartItems.length}
                </Badge>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  )
}

export default Header
