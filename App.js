import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from './src/Components/HomeHeader';
import SplashScreen from './src/Screens/SplashScreen';
import OnboardingScreen from './src/Screens/OnboardingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <HomeHeader /> */}
      {/* <SplashScreen /> */}
      <OnboardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
