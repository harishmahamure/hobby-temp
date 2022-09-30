
import { Text, TextProps, TextStyle } from 'react-native'
import React from 'react'

interface IProps extends TextProps {
  size?: number
  color?: string
  weight?: TextStyle['fontWeight']
}

const TextViewEnhanced: React.FC<IProps> = ({ color, size, children, weight, ...props }): JSX.Element => {
  return (
    <Text
    {...props}
    maxFontSizeMultiplier={1.2}
    style={[
      { fontSize: size, color, fontWeight: weight }

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
