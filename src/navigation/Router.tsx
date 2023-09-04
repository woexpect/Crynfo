import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// Navigation Stacks
import MainStack from './MainStack';
// Helpers
import {navigationRef} from './helpers/navigationHelper';

const Router = React.memo(function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
});

export default Router;
