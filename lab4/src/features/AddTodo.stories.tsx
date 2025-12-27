import type { Meta, StoryObj } from '@storybook/react';
import { AddTodo } from './AddTodo';

const meta: Meta<typeof AddTodo> = {
  title: 'Features/AddTodo',
  component: AddTodo,
  tags: ['autodocs'],
  argTypes: {
    onAdd: { action: 'added' },
  },
};

export default meta;
type Story = StoryObj<typeof AddTodo>;

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {},
  render: (args) => <AddTodo {...args} />,
};
