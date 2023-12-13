// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PublicacionList from './PublicacionList';

const App = () => {
  return (
    <View style={styles.container}>
      <PublicacionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
