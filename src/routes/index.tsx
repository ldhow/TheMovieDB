// navigation/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeStackParamList,
  WatchlistStackParamList,
} from "~/types/navigation";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { DetailsScreen, HomeScreen } from "~/features/home/pages";
import WatchlistScreen from "~/features/watchlist/pages/Watchlist";
import { Colors } from "~/constants/colors";
import { theme } from "~/theme";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const WatchlistStack = createNativeStackNavigator<WatchlistStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

function WatchlistStackNavigator() {
  return (
    <WatchlistStack.Navigator screenOptions={{ headerShown: false }}>
      <WatchlistStack.Screen name="Watchlist" component={WatchlistScreen} />
    </WatchlistStack.Navigator>
  );
}

const HouseIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <FontAwesome6 name="house" size={size} color={color} iconStyle="solid" />;
const BookmarkIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <FontAwesome6 name="bookmark" size={size} color={color} iconStyle="solid" />
);

export default function AppRoutes() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.darkBlue,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: Colors.yellow,
          tabBarInactiveTintColor: Colors.white,
          tabBarIconStyle: {
            marginTop: 8,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: HouseIcon,
          }}
        />
        <Tab.Screen
          name="Watchlist"
          component={WatchlistStackNavigator}
          options={{
            tabBarIcon: BookmarkIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
