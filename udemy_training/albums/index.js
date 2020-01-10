/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
// Import a library to help import a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component

const App = () => {
  return (
  <View style={{flex:1}}>
     <Header headerText={'Albums'} />
     <AlbumList />
  </View>
  );
};

// Render it on the device
AppRegistry.registerComponent('albums', () => App);

