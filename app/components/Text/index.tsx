
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import React from 'react'

interface IProps extends TextProps {
  size?: number
  color?: string
  weight?: TextStyle['fontWeight']
  style?: StyleProp<TextStyle>
}

const TextViewEnhanced: React.FC<IProps> = ({ color, size, children, weight, style, ...props }): JSX.Element => {
  return (
    <Text
    {...props}
    maxFontSizeMultiplier={1.2}
    style={[
      { fontSize: size, color, fontWeight: weight },
      style
    ]}
    >
      {children}
    </Text>
  )
}

export default TextViewEnhanced

TextViewEnhanced.defaultProps = {
  color: 'black',
  size: 14,
  weight: 'normal'
}
