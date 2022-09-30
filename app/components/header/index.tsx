import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import React from 'react'
import { View } from 'react-native'
import { lightWhite, white } from '../../constants/colors'
import Text from '../Text'
import styles from './styles'
const Header = (props: NativeStackHeaderProps): React.ReactNode => {
  const { route } = props
  return (
        <View style={styles.container}>
            <Text size={20} color={white} weight='bold'>
              {route.name}
            </Text>
            <Text color={lightWhite} >
              {route.name}
            </Text>
        </View>
  )
}

export default Header
