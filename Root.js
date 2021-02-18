import React, { useContext } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';
import { LanguageContext } from './app/context/language';
import Navigator from './app/navigation/Navigator';

export default  Root = () => {
  const { fontConfig } = useContext(LanguageContext);

    return (
      <>
        <Navigator fontConfig={fontConfig} />
        <StatusBar style="auto" />
      </>
    );
}

// export default withTheme(Root);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
