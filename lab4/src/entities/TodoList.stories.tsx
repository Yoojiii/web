import type { Meta, StoryObj } from '@storybook/react';
import { TodoList } from './TodoList';

const meta: Meta<typeof TodoList> = {
  title: 'Entities/TodoList',
  component: TodoList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Empty: Story = {
  args: {
    todos: [],
  },
};

export const WithTodos: Story = {
  args: {
    todos: ['Купить молоко', 'Сделать домашнюю работу', 'Позвонить другу'],
  },
};

export const SingleTodo: Story = {
  args: {
    todos: ['Одна задача'],
  },
};

export const ManyTodos: Story = {
  args: {
    todos: [
      'Первая задача',
      'Вторая задача',
      'Третья задача',
      'Четвертая задача',
      'Пятая задача',
    ],
  },
};
