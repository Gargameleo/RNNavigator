import React from 'react';
// import { Button } from 'react-native';
import { Button } from 'react-native-paper';
import { cleanup, render } from '@testing-library/react-native';

import Login from '../../../src/screens/Auth/Login';

describe('Test Login Screen', () => {
  afterEach(cleanup);

  test('it should contain 4!', () => {
    const component = <Login />;

    const { getAllByRole } = render(component);

    const element = getAllByRole(Button);

    console.log(element);

    expect(element.length).toBe(4);
  });
});
