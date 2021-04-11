import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0c0d0f" />
      <View style={styles.view} />
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#0c0d0f',
  },
});

export default App;
