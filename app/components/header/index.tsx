import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Badge } from 'react-native-paper'
import { black, white } from '../../constants/colors'
import Text from '../Text'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Header = (props: NativeStackHeaderProps): React.ReactNode => {
  const { route } = props
  const { canGoBack, goBack } = useNavigation()
  return (
        <View style={styles.container}>
            <Text size={20} color={white} weight='bold'>
            {canGoBack() && (
              <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={goBack}>
                <Ionicons name='md-return-down-back' size={20}/>
              </TouchableOpacity>
            )}
            {route.name}
            </Text>
            <View style={styles.cartContainer}>
            {(route.name.toLowerCase() !== 'checkout') && (
              <>
                <TouchableOpacity disabled={true}>
                  <Ionicons name='cart-sharp' size={32} color={white}/>
                  <View style={styles.badge}>
                    <Badge size={20} style={{ backgroundColor: white, color: black }}>
                      2
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
