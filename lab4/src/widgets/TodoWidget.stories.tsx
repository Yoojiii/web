import type { Meta, StoryObj } from '@storybook/react';
import { TodoWidget } from './TodoWidget';

const meta: Meta<typeof TodoWidget> = {
  title: 'Widgets/TodoWidget',
  component: TodoWidget,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoWidget>;

export const Default: Story = {};
