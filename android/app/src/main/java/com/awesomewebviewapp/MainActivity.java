package com.awesomewebviewapp;

import android.os.Bundle;
import android.webkit.WebView;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "awesomeWebViewApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      if (BuildConfig.DEBUG) {
          WebView.setWebContentsDebuggingEnabled(true);
      }
  }
}
