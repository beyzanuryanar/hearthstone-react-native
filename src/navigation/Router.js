import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, HomeDetail, Search } from "../pages";
import { Button } from "react-native";
import { color } from "../config/color";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hearthstone"
                      component={Home}
                      options={({ navigation }) => ({
                        headerRight: () => (
                          <Button
                            onPress={() => navigation.navigate("Search")}
                            title="Search"
                            color={color.primary}
                          />
                        ),
                      })} />
        <Stack.Screen name="HomeDetail" component={HomeDetail} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
