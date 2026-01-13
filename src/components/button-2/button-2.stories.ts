import { StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import './index.js';
import type { MyButton_2 } from './index.js';

const { args, argTypes, events, template } = getStorybookHelpers('my-button-2');

export default {
  title: 'Components/Button_2',
  component: 'my-button-2',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};

type Story = StoryObj<MyButton_2 & typeof args>;

export const Default: Story = {
  render: args => template(args),
  args: {
  }
};
