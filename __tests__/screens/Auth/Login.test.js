import React from 'react';
import { Provider } from 'react-redux';
import { Button } from 'react-native-paper';
import { cleanup, render } from '@testing-library/react-native';

import configStore from '../../../src/store/configStore';

import Login from '../../../src/screens/Auth/Login';

describe('Test Login Screen', () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it('should contain 4 buttons!', () => {
    const store = configStore();
    const component = (
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const { getAllByRole } = render(component);

    const element = getAllByRole(Button);

    expect(element.length).toBe(4);
  });
});
