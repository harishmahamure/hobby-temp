import React from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

interface IProps extends TextProps {
  size?: number
  color?: string
  weight?: TextStyle['fontWeight']
  style?: StyleProp<TextStyle>
}

const TextViewEnhanced: React.FC<IProps> = ({
  color,
  size,
  children,
  weight,
  style,
  ...props
}): JSX.Element => {
  return (
    <Text
    {...props}
    maxFontSizeMultiplier={1.2}
    style={[{ fontSize: size, color, fontWeight: weight }, style]}
    testID='component-text-text-1'
    >
      {children}
    </Text>
  )
}

export default TextViewEnhanced

TextViewEnhanced.defaultProps = {
  color: 'black',
  size: 14,
  weight: 'normal',
  style: {}
}
