import { StoryObj } from '@storybook/web-components-vite';
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import './index.js';
import type { MyButton_2 } from './index.js';
import { html } from 'lit';

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
    'default-slot': 'Click me!'
  }
};

export const DisabledStory = {
  render: (args) => html`<my-button ?disabled=${args.disabled}>click me</my-button>`,
  args: {
    disabled: true
  }
}
