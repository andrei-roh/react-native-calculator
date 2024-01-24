/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { Dimensions } from 'react-native';

// Note: import explicitly to use the types shipped with jest.
import { it, expect, jest, describe, afterEach } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Testing <App />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders correctly in portrait orientation', () => {
    jest.spyOn(Dimensions, 'get').mockReturnValue({
      width: 828,
      height: 1792,
      scale: 0,
      fontScale: 0,
    });

    const app = renderer.create(<App />);

    expect(app).toMatchSnapshot();
  });

  it('Renders correctly in landscape orientation', () => {
    jest.spyOn(Dimensions, 'get').mockReturnValue({
      width: 1792,
      height: 828,
      scale: 0,
      fontScale: 0,
    });

    const app = renderer.create(<App />);

    expect(app).toMatchSnapshot();
  });
});
