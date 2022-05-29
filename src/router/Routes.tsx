import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { RouteNames } from '@/router/RouteNames'
import WelcomeView from '@/views/Welcome'
import TestView from '@/views/Test/Test.View'

const Drawer = createDrawerNavigator();

const Routes = () => {

  return (

    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: '100%' },
      }}

      backBehavior="history"
      initialRouteName={RouteNames.Test}>

      <Drawer.Screen
        options={{ swipeEnabled: false }}
        name={RouteNames.Welcome}
        component={WelcomeView}
      />
      <Drawer.Screen
        options={{ swipeEnabled: false }}
        name={RouteNames.Test}
        component={TestView}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
