import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { styles } from './index.style';

const cast = [
  { id: '1', name: 'Margot Robbie', role: 'Barbie', avatar: 'https://...' },
  { id: '2', name: 'Ryan Gosling', role: 'Ken', avatar: 'https://...' },
  { id: '3', name: 'America Ferrera', role: 'Gloria', avatar: 'https://...' },
];

export default function TopCastList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Billed Cast</Text>
      <FlatList
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}
