import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FundamentalRN = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Welcome')}>
          <Text>Go to Welcome Screen</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}) 

export default FundamentalRN;
