import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Personagens from './pages/Personagens';

export default function Routes (){
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name='Personagens' component={Personagens}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}