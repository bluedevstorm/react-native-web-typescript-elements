import './GestureHandler';
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Details, MyPage } from 'screens';

export type StackParams = {
  Home: undefined;
  Details: { data: string } | undefined;
  MyPage: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<StackParams>();

const TabNavigator = function TabNavigator(): ReactElement {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="MainTab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
