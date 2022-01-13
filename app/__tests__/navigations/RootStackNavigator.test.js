import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import ThemeProvider from '../../src/contexts/ThemeProvider';
import RootStackNavigator from '../../src/navigators/RootStackNavigator';

describe('Test Root Stack Navigator', () => {
  afterEach(cleanup);

  it('should goes to home page when click login button', async () => {
    jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

    const component = (
      <ThemeProvider>
        <RootStackNavigator />
      </ThemeProvider>
    );

    const { getByTestId, findByText } = render(component);

    const toClick = await getByTestId('login-btn');

    fireEvent(toClick, 'press');

    const newHeader = await findByText('Go to details page');

    expect(newHeader).toBeTruthy();
  });
});
