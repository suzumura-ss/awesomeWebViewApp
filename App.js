import React from 'react';
import {SafeAreaView, StatusBar, View, Platform} from 'react-native';
import {WebView} from 'react-native-webview';

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
    this.indexHtml = (Platform.OS === 'android')
      ? { uri: 'file:///android_asset/view1/index.html' }
      : require('./webViewAssets/assets/view1/index.html');
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
          <WebView source={this.indexHtml} {...viewConfig} />
          <WebView source={{html: '<h1>Hello World</h1>'}} {...viewConfig} />
          <View style={styles.footer} />
        </SafeAreaView>
      </>
    );
  }
}
