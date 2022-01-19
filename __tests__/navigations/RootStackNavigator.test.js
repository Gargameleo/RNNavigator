import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render, fireEvent } from '@testing-library/react-native';

import configStore from '../../src/store/configStore';

import ThemeProvider from '../../src/contexts/ThemeProvider';
import RootStackNavigator from '../../src/navigators/RootStackNavigator';

describe('Test Root Stack Navigator', () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  it('should go to Home Screen when click login button', async () => {
    const store = configStore();

    const component = (
      <Provider store={store}>
        <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider>
      </Provider>
    );

    const { getByTestId, findByText } = render(component);

    const toClick = await getByTestId('login-btn');

    fireEvent(toClick, 'press');

    const newHeader = await findByText('Go to details page');

    expect(newHeader).toBeTruthy();
  });

  it('should login with the user leo', async () => {
    const store = configStore();

    const component = (
      <Provider store={store}>
        <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider>
      </Provider>
    );

    const { getByTestId, getByText } = render(component);

    const toClick = await getByTestId('login-btn');

    fireEvent.press(toClick);

    const userText = await getByText(/Login User: leo/i);

    expect(userText).toBeTruthy();
  });

  it('should go to Sign Up Screen when click Sign up button', async () => {
    const store = configStore();

    const component = (
      <Provider store={store}>
        <ThemeProvider>
          <RootStackNavigator />
        </ThemeProvider>
      </Provider>
    );

    const { getByTestId, findByText } = render(component);

    const toClick = await getByTestId('register-btn');

    fireEvent(toClick, 'press');

    const newHeader = await findByText('Register Page !');

    expect(newHeader).toBeTruthy();
  });
});
