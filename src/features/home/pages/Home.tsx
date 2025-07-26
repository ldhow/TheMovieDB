import React, { use, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "./Home.style";
import MovieCard from "../components/MovieCard";
import { StyledDropdown, StyledButton, StyledTextInput } from "~/components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "~/types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const sampleMovies = [
  {
    id: "1",
    title: "Barbie",
    date: "19 July 2023",
    description: "Barbie and Ken are having the time of their lives...",
    image: "https://image.tmdb.org/t/p/w500//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
  {
    id: "2",
    title: "The Flash",
    date: "13 June 2023",
    description: "When his attempt to save his family inadvertently alters...",
    image: "https://image.tmdb.org/t/p/w500//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
  },
  {
    id: "3",
    title: "The Little Mermaid",
    date: "2023",
    description: "A young mermaid makes a deal with a sea witch...",
    image: "https://image.tmdb.org/t/p/w500//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
  },
];

type Navigation = NativeStackNavigationProp<HomeStackParamList, "Home">;

const HomeScreen = () => {
  const [category, setCategory] = useState("now_playing");
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategory, setOpenCategory] = useState(false);
  const [items, setItems] = useState([
    { label: "Now Playing", value: "now_playing" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Popular", value: "popular" },
  ]);
  const navigation = useNavigation<Navigation>();
  const handleClick = (value: string) => {
    navigation.push("Details", { id: value });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          source={require("~/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Dropdown */}
        <StyledDropdown
          options={items.map((item) => item.label)}
          selected={category}
          onSelect={(value) => setCategory(value)}
        />

        <StyledDropdown
          options={items.map((item) => item.label)}
          selected={category}
          onSelect={(value) => setCategory(value)}
          placeholder="Order by"
        />

        {/* Search */}
        <StyledTextInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search..."
        />
        <StyledButton
          title="Search"
          onPress={() => {}}
          disabled={!searchQuery}
          radius={"full"}
        />

        {/* Movie List */}
        <FlatList
          data={sampleMovies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieCard movie={item} onPress={() => handleClick(item.id)} />}
          contentContainerStyle={{ paddingBottom: 100, gap: 16 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
