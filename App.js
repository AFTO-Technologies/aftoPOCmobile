/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DicoverList from './components/discoverList/dicoverList';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoryScreen from './components/videoComponent/storyScreen';
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

const App = () => {
  const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress } }) => {
      return {
        cardStyle: {
          opacity: progress
        }
      };
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator   
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      }} 
      mode="modal"
      initialRouteName='DiscoverList'>
        <Stack.Screen name='DiscoverList' component={DicoverList} />
        <Stack.Screen 
           name='StoryScreen' 
          options={() => options} 
          component={StoryScreen}
          sharedElements={(route) => {
            const { item } = route.params;
            return [
              { id: item.id,}
            ];
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
     

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
