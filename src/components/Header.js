import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  console.log(props)
  return (
    <View style={{height: 50, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1}}>
      <Text>{props.title}</Text>
    </View>
  )
}

export default Header;