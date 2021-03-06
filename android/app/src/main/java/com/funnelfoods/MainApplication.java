package com.funnelfoods;

import android.app.Application;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import org.reactnative.camera.RNCameraPackage;
import org.umhan35.RNSearchBarPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

// React Native Navigation stuff
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.fetchsky.RNTextDetector.RNTextDetectorPackage;

// Google signin
import co.apptailor.googlesignin.RNGoogleSigninPackage;

// Facebook signin
import com.facebook.reactnative.androidsdk.FBSDKPackage;

import java.util.List;
import java.util.Arrays;

public class MainApplication extends NavigationApplication {
  @Override
  protected ReactGateway createReactGateway() {
      ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }
      };
      return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
      // Add additional packages you require here
      // No need to add RnnPackage and MainReactPackage
      return Arrays.<ReactPackage>asList(
          new RNGoogleSigninPackage(),
          new FBSDKPackage(),
          new RNCameraPackage(),
          new RNTextDetectorPackage()
      );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
  }
}
