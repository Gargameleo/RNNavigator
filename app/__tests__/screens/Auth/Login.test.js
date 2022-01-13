import React from 'react';
import { Provider } from 'react-redux';
import { Button } from 'react-native-paper';
import { cleanup, render } from '@testing-library/react-native';

import configStore from '../../../src/store/configStore';

import Login from '../../../src/screens/Auth/Login';

describe('Test Login Screen', () => {
  let store;

  beforeEach(() => {
    store = configStore();
  });

  afterEach(cleanup);

  it('should contain 4 buttons!', () => {
    const component = (
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const { getAllByRole } = render(component);

    const element = getAllByRole(Button);

    console.log(element);

    expect(element.length).toBe(4);
  });
});
