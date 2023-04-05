import React from "react";
import { StyleSheet, View } from "react-native";
import OnboardingWrapper from "../Components/Onboarding/OnboardingWrapper";
import FirstOnboarding from "../Components/Onboarding/FirstOnboarding";
import SecondOnboarding from "../Components/Onboarding/SecondOnboarding";
import ThirdOnboarding from "../Components/Onboarding/ThirdOnboarding";

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextOnboardingScreen = () =>
    setCurrentIndex((currentIndex) => currentIndex + 1);

  const prevOnboardingScreen = () =>
    setCurrentIndex((currentIndex) => currentIndex - 1);

  return (
    <View style={styles.container}>
      <OnboardingWrapper
        currentIndex={currentIndex}
        next={nextOnboardingScreen}
        prev={prevOnboardingScreen}
      >
        {currentIndex <= 0 ? (
          <FirstOnboarding />
        ) : currentIndex == 1 ? (
          <SecondOnboarding />
        ) : (
          <ThirdOnboarding />
        )}
      </OnboardingWrapper>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
