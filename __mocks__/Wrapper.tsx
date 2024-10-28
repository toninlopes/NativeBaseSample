import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Metrics, SafeAreaProvider } from 'react-native-safe-area-context';

const MOCK_INITIAL_METRICS: Metrics = {
  frame: {
    width: 320,
    height: 640,
    x: 0,
    y: 0,
  },
  insets: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
};

const Wrapper = ({children}: {children: React.ReactNode}) =>
  <SafeAreaProvider initialMetrics={MOCK_INITIAL_METRICS}>
    <NativeBaseProvider>
      {children}
    </NativeBaseProvider>
  </SafeAreaProvider>;

export default Wrapper;
