import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { styles } from './index.style';

const recs = [
  { id: '1', title: 'Kingdom 3: the Flame of Fate', img: 'https://i.imgur.com/k1.jpg' },
  { id: '2', title: 'Oppenheimer', img: 'https://i.imgur.com/k2.jpg' },
];

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendations</Text>
      <FlatList
        data={recs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.label}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
