import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './index.style';



export default function MovieDetails({ onBack }: { onBack: () => void }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </TouchableOpacity>

      <View style={styles.topRow}>
        <Image
          source={{ uri: 'https://image.tmdb.org/t/p/w500/barbie.jpg' }}
          style={styles.poster}
        />
        <View style={styles.details}>
          <Text style={styles.title}>Barbie <Text style={styles.year}>(2023)</Text></Text>
          <Text style={styles.info}>PG13 • 2023/07/03 • 1h 54m</Text>
          <Text style={styles.info}>Comedy, Adventure, Fantasy</Text>
          <Text style={styles.info}>Status: Released</Text>
          <Text style={styles.info}>Original Language: English</Text>
        </View>
      </View>

      <View style={styles.scoreRow}>
        <View style={styles.scoreCircle}>
          <Text style={styles.score}>74</Text>
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.scoreLabel}>User Score</Text>
          <Text style={styles.credit}>Greta Gerwig</Text>
          <Text style={styles.creditNote}>Director, Writer</Text>
          <Text style={styles.credit}>Noah Baumbach</Text>
          <Text style={styles.creditNote}>Writer</Text>
        </View>
      </View>

      <Text style={styles.tagline}><Text style={{ fontStyle: 'italic' }}>She’s everything. He’s just Ken.</Text></Text>

      <Text style={styles.sectionTitle}>Overview</Text>
      <Text style={styles.overview}>
        Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land...
      </Text>

      <TouchableOpacity style={styles.watchlistButton}>
        <Text style={styles.watchlistText}>+ Add To Watchlist</Text>
      </TouchableOpacity>
    </View>
  );
}
