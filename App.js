/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render () {
    const viewConfig = {
      startInLoadingState: true,
      scalesPageToFit: true,
      javaScriptEnabled: true,
      domStorageEnabled: true,
      ignoreSslError: true,
      style: {
        flex: 1,
      }
    };
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1}}>
          <View style={{height:10, backgroundColor: 'skyblue'}} />
          <WebView
            source={{ uri: 'https://google.com' }}
            {...viewConfig}
           />
          <WebView
            source={{ html: '<h1>Hello World</h1>' }}
            {...viewConfig}
           />
          <View style={{height:10, backgroundColor: 'steelblue'}} />
        </SafeAreaView>
      </>
    )
  }
}
