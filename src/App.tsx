import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0c0d0f" />
      <AppProvider>
        <View style={styles.view}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#0c0d0f',
  },
});

export default App;
