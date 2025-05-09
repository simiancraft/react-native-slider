import { Platform } from 'react-native';

let RNCSlider;

if (Platform.OS === 'web') {
  RNCSlider = require('./RNCSliderNativeComponent.web').default;
} else {
  RNCSlider = require('./RNCSliderNativeComponent.native').default; // Use .native.js file
}

export default RNCSlider;