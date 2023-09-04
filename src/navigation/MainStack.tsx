import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DEMO, DETAILED_CRYPTO_VIEW, HOME} from '../common/routes';
// Navigators
// Screens
import Demo from '../screens/OtherStacks/Demo';
import DetailedCryptoView from '../screens/MainStack/DetailedCryptoView';
import Home from '../screens/MainStack/Home';
// Actions

function MainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={DEMO} component={Demo} />
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen
        name={DETAILED_CRYPTO_VIEW}
        component={DetailedCryptoView}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
