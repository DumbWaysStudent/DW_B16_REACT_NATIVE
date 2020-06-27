import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const Welcome = () => {
  const [ inc , setInc ] = useState(0);

  const title = "Dumbways Batch 16";
  const person = {
    name: "Johan"
  }
  const cars = [
    'BMW',
    'Porsche',
    'Jaguar'
  ]
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>{title} {person.name}</Text>
        <Text style={styles.textInc}>{inc}</Text>

        <TouchableOpacity onPress={() => setInc(inc + 1)} onLongPress={() => alert('Long Press')}>
          <Text>Click here!!!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        {cars.map(item => (
          <Text>{item}</Text>
        ))}
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={cars}
          renderItem={({item, index, separators}) => {
            return <Text>{item}</Text>
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey'
  },
  textInc: {
    fontSize: 50,
    color: 'red'
  },
  top: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  middle: {
    flex: 1,
    backgroundColor: 'green'
  },
  bottom: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export default Welcome;