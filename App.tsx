import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS, Screen} from './src/screens-config';
import {RootStackParamList} from './src/screens-config.interface';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const renderScreen = (screen: Screen) => (
    <RootStack.Screen
      key={screen.name}
      name={screen.name}
      component={screen.component}
      options={{title: screen.title}}
    />
  );
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          {Object.values(SCREENS).map(renderScreen)}
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
