import React from 'react';
import {SafeAreaView, StatusBar, View, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import path from 'react-native-path';

const assetsPrefix = Platform.OS === 'android' ? 'file:///android_asset' : '';
const styles = {
  view: {
    flex: 1,
  },
  header: {
    height: 10,
    backgroundColor: 'steelblue',
  },
  footer: {
    height: 10,
    backgroundColor: 'skyblue',
  },
};

export default class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.indexHtml = path.resolve(assetsPrefix, 'view1/index.html');
  }
  render() {
    const viewConfig = {
      startInLoadingState: true,
      scalesPageToFit: true,
      javaScriptEnabled: true,
      domStorageEnabled: true,
      ignoreSslError: true,
      // originWhitelist: ['*'],
      // allowFileAccess: true,
      // allowUniversalAccessFromFileURLs: true,
      style: {
        flex: 1,
      },
    };
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.view}>
          <View style={styles.header} />
          <WebView source={{uri: this.indexHtml}} {...viewConfig} />
          <WebView source={{html: '<h1>Hello World</h1>'}} {...viewConfig} />
          <View style={styles.footer} />
        </SafeAreaView>
      </>
    );
  }
}
