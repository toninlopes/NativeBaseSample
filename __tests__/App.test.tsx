import 'react-native';
import React from 'react';
import {describe, it, expect} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import { Button } from 'native-base';
import { Text } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Metrics, SafeAreaProvider } from 'react-native-safe-area-context';

const MOCK_INITIAL_METRICS: Metrics = {
  frame: { width: 320, height: 640, x: 0, y: 0 },
  insets: { left: 0, right: 0, bottom: 0, top: 0 },
};

const Wrapper = ({children}: {children: React.ReactNode}) =>
  <SafeAreaProvider initialMetrics={MOCK_INITIAL_METRICS}>
    <NativeBaseProvider>
      {children}
    </NativeBaseProvider>
  </SafeAreaProvider>;


describe('Snapshot Testing', () => {

  it('Render NativeBase Button with @testing-library/react-native', () => {
    render(
      <Wrapper>
        <Button>Test</Button>
      </Wrapper>
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('Render NativeBase Button with react-test-renderer', () => {
    const component = renderer.create(
      <Wrapper>
        <Button>Test</Button>
      </Wrapper>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Render React Native Text with @testing-library/react-native', () => {
    render(
      <Text>Test</Text>
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('Render React Native Text with react-test-renderer', () => {
    const component = renderer.create(
      <Text>Test</Text>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

});
