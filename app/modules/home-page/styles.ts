import { StyleSheet } from 'react-native'
import { lightWhite, primary } from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: lightWhite,
    marginVertical: 10,
    paddingVertical: 20
  },
  imageContainer: { flex: 1.5 },
  image: { width: '100%', height: '100%' },
  colorButton: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginVertical: 10
  },
  button: {
    width: '50%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primary,
    borderRadius: 20
  }
})
