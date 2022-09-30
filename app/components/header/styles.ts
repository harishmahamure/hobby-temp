import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { height: 60, padding: 10, backgroundColor: '#ff00a1', flexDirection: 'row', justifyContent: 'space-between' },
  cartContainer: {
    position: 'relative'
  },
  badge:
    { position: 'absolute', bottom: 25, left: 20 }
})

export default styles
