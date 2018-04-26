import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const ProgressBar = ({ size }) => {
  return (
    <View style={styles.progressBarStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  progressBarStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { ProgressBar };
