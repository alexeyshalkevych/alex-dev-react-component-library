import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test for Button', () => {
  test('Render the Button component', () => {
    render(<Button text="Button" />);
  });

  test('Render the Button component disabled', () => {
    render(<Button text="Button" disabled />);

    expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
  });
});
