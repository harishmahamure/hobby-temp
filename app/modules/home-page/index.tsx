import { View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { useHomePage } from './hooks'
import { Header, Text } from '../../components'
import styles from './styles'
import { primary, white } from '../../constants/colors'

const HomePage = (): JSX.Element => {
  const {
    products,
    handleAddToProductPress,
    cartItems,
    handleRemoveProductPress
  } = useHomePage()
  return (
<>
    <Header cartItems={cartItems} />
    <FlatList
      data={products}
      renderItem={({ item }) => {
        const { id, colour, img, name, price } = item
        const presentInCart = cartItems.findIndex((value) => value.id === id)
        return (
          <View data-testID='modules-homepage-view-1' key={id} style={styles.container}>
            <View data-testID='modules-homepage-view-2' style={styles.imageContainer}>
              <Image
                data-testID='modules-homepage-image-3'
                source={{ uri: img }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View data-testID='modules-homepage-view-4' style={{ flex: 3 }}>
              <Text data-testID='modules-homepage-text-5' size={22} weight="400">
                {name}
              </Text>
              <Text data-testID='modules-homepage-text-6' size={20} weight="bold" color={primary}>
                &#x20b9;{price}
              </Text>
              <TouchableOpacity
              data-testID='modules-homepage-touchable-7'
                style={[styles.colorButton, { backgroundColor: colour }]}
              />
              <TouchableOpacity
               data-testID='modules-homepage-touchable-8'
                onPress={() => {
                  presentInCart === -1
                    ? handleAddToProductPress(item)
                    : handleRemoveProductPress(id)
                }}
                style={styles.button}
              >
                <Text data-testID='modules-homepage-text-9' color={white} weight="600">
                  {presentInCart !== -1 ? 'Remove' : ' Add to cart'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
    />
    </>
  )
}

export default HomePage
