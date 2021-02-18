import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { customFonts } from './app/assets';
import { LanguageProvider } from './app/context/language';
import Navigator from './app/navigation/Navigator';
import Logger from './app/utility/logger';
import theme from './app/style/RNElementsTheme';

// For logging
Logger.start()

export default function App() {
  let [fontsLoaded] = useFonts(customFonts);

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
