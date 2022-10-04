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
    <View data-testID='Header-View-1' style={styles.container}>
      <Text data-testID='Header-View-1-Text-1' size={20} color={white} weight="bold">
        {canGoBack() && (
          <TouchableOpacity data-testID='Header-View-1-Text-1-TouchableOpacity-1' style={{ paddingHorizontal: 10 }} onPress={goBack}>
            <Ionicons name="md-return-down-back" size={20} />
          </TouchableOpacity>
        )}
        {name}
      </Text>
      <View style={styles.cartContainer}>
        {cartItems.length > 0 && (
          <>
            <TouchableOpacity
              onPress={() => {
                navigate('Checkout')
              }}
            >
              <Ionicons name="cart-sharp" size={32} color={white} />
              <View style={styles.badge}>
                <Badge
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
