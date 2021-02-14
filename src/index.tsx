import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Navigation } from 'navigation';

import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

// https://github.com/oblador/react-native-vector-icons#web-with-webpack
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

export function App() {
  return <Navigation />;
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
