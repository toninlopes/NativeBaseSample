import {jest} from '@jest/globals'
// import MockedSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// https://altany.github.io/react-native/0.61/jest/mocking/upgrade/2020/01/25/mocking-react-native-0.61-modules-with-jest.html
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry');
jest.mock('react-native/Libraries/Utilities/PixelRatio');
jest.mock('react-native/Libraries/Utilities/Platform');
jest.mock('react-native/Libraries/Utilities/useWindowDimensions');
jest.mock('react-native/Libraries/Utilities/Dimensions');

jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => ({
  ECANativeModules: {
    getBrightness: jest.fn(),
    addListener: jest.fn(),
    removeListeners: jest.fn(),
  },
}));
jest.mock('react-native/Libraries/Utilities/NativeDeviceInfo', () => ({
  getConstants: jest.fn(),
}));
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn(),
  set: jest.fn(),
  addEventListener: jest.fn(),
}));

