import React from 'react';
import { render } from '@testing-library/react-native';

import Register from '../../../src/screens/Auth/Register';

describe('Test Login Screen', () => {
  it('should contain text Register Page !', async () => {
    const component = <Register />;

    const { getByText } = render(component);

    const res = await getByText('Register Page !');

    expect(res).toBeTruthy();
  });
});
