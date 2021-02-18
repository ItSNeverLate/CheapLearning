import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { customFonts } from './app/assets/fonts';
import { LanguageProvider } from './app/context/language';
import Navigator from './app/router/Navigator';
import Logger from './app/utility/logger';
import theme from './app/style/rnElementsTheme';
import * as SplashScreen from 'expo-splash-screen';
import logger from './app/utility/logger';

// For logging
Logger.start()

export default function App() {
  let [fontsLoaded] = useFonts(customFonts);
  const [appIsReady, setAppReady] = useState(false);

  const performAPICalls = async () => { }
  const downloadAssets = async () => { }

  const prepareResources = async () => {
    try {
      await performAPICalls();
      await downloadAssets();
    } catch (error) {
      logger.log(error);
    } finally {
      setTimeout(() => {
        setAppReady(true);
        SplashScreen.hideAsync();
      }, 3000);
    };
  }

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    prepareResources();
  }, []);

  if (!appIsReady) {
    return null;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme()} >
        <LanguageProvider >
          <Navigator />
          <StatusBar style="auto" />
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
