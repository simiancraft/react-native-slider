import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {examples} from './Examples';
import {propsExamples} from './Props';
import Slider from '@react-native-community/slider';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const titles = ['Examples', 'Props'];

  const renderExampleTab = (
    sliders: any[],
    filtered = false,
  ) => {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}>
        {(filtered
          ? sliders.filter(
              e => !e.platform || e.platform === Platform.OS,
            )
          : sliders
        ).map((e, i) => (
          <View key={`slider${i}`} style={styles.sliderWidget}>
            <Text style={styles.instructions}>{e.title}</Text>
            {e.render()}
          </View>
        ))}
      </ScrollView>
    );
  };

  // Toggle between tabs
  const toggleTab = () => {
    setCurrentPage(currentPage === 0 ? 1 : 0);
  };

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <View>
        <Slider
          step={1}
          maximumValue={3}
          minimumValue={0}
          style={styles.slider}
          value={currentPage + 1}
          thumbTintColor={pageViewPositionSlider.thumbColor}
          disabled
          maximumTrackTintColor={pageViewPositionSlider.trackColor}
          minimumTrackTintColor={pageViewPositionSlider.trackColor}
        />
        <TouchableOpacity onPress={toggleTab}>
          <Text testID="testTextId" style={styles.title}>
            {titles[currentPage]} (Tap to switch)
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Show the current tab based on state */}
      <View style={styles.tabContent}>
        {currentPage === 0 ? 
          renderExampleTab(examples, true) : 
          renderExampleTab(propsExamples)
        }
      </View>
    </SafeAreaView>
  );
};

export default App;

const pageViewPositionSlider = {
  trackColor: '#ABABAB',
  thumbColor: '#1411AB',
  style: {
    width: '100%',
  },
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
  tabContent: {
    flex: 1,
  },
  homeScreenContainer: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    color: pageViewPositionSlider.thumbColor,
    textAlign: 'center',
    width: '100%',
    marginVertical: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 20,
  },
  sliderWidget: {
    marginVertical: 30,
  },
});