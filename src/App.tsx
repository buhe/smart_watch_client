import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Navigation from './components/Navigation';
import {theme} from './theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
        <Navigation />
    </NativeBaseProvider>
  );
};
export default App;
