import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputText from './TextInput';
import { ITextInput } from './types';

export default {
  title: 'AlexDev/InputText',
  component: InputText,
  argTypes: {},
} as Meta<typeof InputText>;

const Template: Story<ITextInput> = (args) => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  message: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Disabled',
};
