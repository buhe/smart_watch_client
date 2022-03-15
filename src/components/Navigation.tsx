import * as React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import SwitchScreen from '../features/switch';
import SettingsScreen from '../features/settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Linking} from 'react-native';
import {useColorMode} from 'native-base';

export default function Navigation() {
  // const {authStatus} = useAuth();
  const darkMode = useColorMode().colorMode === 'dark';

  const linking = {
    prefixes: ['io.supabase.rnquickstart://'],
    async getInitialURL() {
      const url = await Linking.getInitialURL();

      if (url != null) {
        if (url.includes('#')) {
          return url.replace('#', '?');
        } else {
          return url;
        }
      }
    },

    subscribe(listener: any) {
      Linking.addEventListener('url', ({url}) => {
        if (url.includes('#')) {
          listener(url.replace('#', '?'));
        } else {
          listener(url);
        }
      });
    },
  };
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer
      theme={darkMode ? DarkTheme : DefaultTheme}
      linking={linking}>
      <Tab.Navigator>
        <Tab.Screen name="Switch" component={SwitchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
