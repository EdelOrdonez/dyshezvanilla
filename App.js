import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './components/DrawerNavigator';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DrawerNavigator">
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
