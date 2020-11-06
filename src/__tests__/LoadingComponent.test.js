import React from 'react';
import { render } from '@testing-library/react';

import { LoadingComponent } from '../components/common';

describe('Loading Common Component', () => {
  test('it should mount a div based on props', () => {
    const { getByText, rerender } = render(
      <LoadingComponent message="you need to register before you can view dashboard" />
    );
    const message = getByText(
      /you need to register before you can view dashboard/i
    );
    expect(message.textContent).toBe(
      'you need to register before you can view dashboard'
    );
    rerender(<LoadingComponent message="Loading User Profile" />);
    const newMessage = getByText(/loading user profile/i);
    expect(newMessage.textContent).toBe('Loading User Profile');
  });
});
