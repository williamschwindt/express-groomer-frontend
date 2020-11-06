import { FormInput } from '../components/common';

import React from 'react';
import { render } from '@testing-library/react';

describe('<FormInput /> test suite', () => {
  afterEach(() => {
    // cleanup mocking after each test runs.
    jest.clearAllMocks();
  });
  test('input is rendered with proper labels', () => {
    // For this assertion, we're just using RTL to test the attributes that get rendered from FormInput
    const { getByLabelText } = render(<FormInput label="User Email" />);

    const input = getByLabelText(/user email/i);
    expect(input.placeholder).toBe('User Email');
  });
});
