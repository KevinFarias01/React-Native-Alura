import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import './src/telas/Cesta';
import Cesta from './src/telas/Cesta';


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

