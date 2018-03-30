import React from 'react';
import { mountWithTheme } from 'z-frontend-theme/test-utils/theme';
import LoadingScreen from './LoadingScreen';
import 'jest-styled-components';

describe('LoadingScreen', () => {
  it('should mount without throwing an error', () => {
    expect(mountWithTheme(<LoadingScreen />).find('LoadingScreen')).toHaveLength(1);
  });

  it('should respect util props', () => {
    const mounted = mountWithTheme(<LoadingScreen p={123} mt={456} />);
    expect(mounted).toHaveStyleRule('padding', '123px');
    expect(mounted).toHaveStyleRule('margin-top', '456px');
  });
});
