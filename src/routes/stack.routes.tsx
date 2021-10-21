import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Home: undefined;
      CarDetails: undefined;
      Scheduling: undefined;
      SchedulingDetails: undefined;
      SchedulingComplete: undefined;
    }
  }
}

const {Navigator, Screen} = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}

export default StackRoutes;