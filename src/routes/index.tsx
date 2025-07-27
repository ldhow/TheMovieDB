// navigation/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "~/types/navigation";
import { HomeScreen } from "~/features/home/pages";
import WatchlistScreen from "~/features/watchlist/pages/Watchlist";
import { Colors } from "~/constants/colors";
import { theme } from "~/theme";
import { DetailsScreen } from "~/features/details/pages";
import { Header, TabBarIcon } from "~/components";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          header: () => <Header />,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: Colors.darkBlue,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.white,
          tabBarIconStyle: {
            marginTop: 8,
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} name="house" />,
          }}
        />
        <Tab.Screen
          name="Watchlist"
          component={WatchlistScreen}
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} name="bookmark" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
