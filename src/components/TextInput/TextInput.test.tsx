import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import TextInput from './TextInput';

describe('Running Test for TextInput', () => {
  test('Check placeholder in TextInput', () => {
    render(<TextInput placeholder="Hello AlexDev" />);

    expect(screen.getByPlaceholderText('Hello AlexDev')).toHaveAttribute(
      'placeholder',
      'Hello AlexDev'
    );
  });

  test('Renders the TextInput component', () => {
    render(<TextInput placeholder="Hello AlexDev" />);
    const input = screen.getByPlaceholderText('Hello AlexDev') as HTMLInputElement;

    userEvent.type(input, 'Hello world!');
    expect(input.value).toBe('Hello world!');
  });
});
