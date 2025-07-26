import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { MovieDetails, Recommendations, TopCastList } from "../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "~/types/navigation";
import { useNavigation } from "@react-navigation/native";

type Navigation = NativeStackNavigationProp<HomeStackParamList, "Details">;

const DetailsScreen = () => {
  const navigation = useNavigation<Navigation>();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <MovieDetails onBack={handleBack} /> // Top info section
        <TopCastList /> // Horizontal cast scroll
        <Recommendations /> // Movie suggestions
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    backgroundColor: "#fff",
  },
});
