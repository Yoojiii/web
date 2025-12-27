# Лабораторная работа №4



В рамках данной работы рассматриваются инструменты разработки, которые используются в профессиональной frontend-разработке для повышения качества кода, стабильности проекта и удобства командной работы.

В отличие от предыдущих работ, где основной акцент делался на написании кода и архитектуре приложения, здесь внимание уделяется инфраструктуре проекта: автоматизации проверок, стандартизации кода и поддержке процесса разработки.

---


### 1.1. Storybook
Storybook — это инструмент для изолированной разработки и документирования UI-компонентов. Он позволяет:
- разрабатывать компоненты независимо от приложения;
- визуально тестировать компоненты;
- использовать Storybook как документацию.

### 1.2. ESLint
ESLint — инструмент статического анализа JavaScript/TypeScript-кода, помогающий поддерживать единый стиль кода.

### 1.3. Husky
Husky позволяет запускать скрипты Git на определенных событиях (hooks), например перед коммитом или пушем. Чаще всего используется для запуска ESLint и тестов.

### 1.4. Полезные материалы
**Storybook:**
- https://storybook.js.org/docs

**ESLint:**
- https://eslint.org/docs/latest/
- https://prettier.io/docs/en/

**Husky:**
- https://typicode.github.io/husky/
- https://github.com/okonet/lint-staged

---

## 2. Задание

Требования к работе:
1. ESLint
   - Подключить ESLint к проекту
   - Настроить правила для TypeScript и React
   - Добавить npm-скрипт для запуска линтера
   - Настроить Prettier

2. Husky + lint-staged
   - Настроить pre-commit хук: запуск ESLint перед коммитом

3. Storybook
   - Установить Storybook
   - Создать stories минимум для 2 UI-компонентов

---

## 3. Отчет о выполнении работы

### 3.2. Настройка ESLint

Для проекта были установлены следующие пакеты:
- `eslint` — основной линтер
- `@typescript-eslint/parser` и `@typescript-eslint/eslint-plugin` — поддержка TypeScript
- `eslint-plugin-react` и `eslint-plugin-react-hooks` — правила для React
- `eslint-plugin-prettier` и `eslint-config-prettier` — интеграция с Prettier

ESLint используется для:
- Статического анализа кода на наличие ошибок
- Обеспечения единого стиля кодирования в команде
- Автоматического исправления простых проблем

**Конфигурация ESLint (.eslintrc.cjs):**

\`\`\`javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
\`\`\`

**Конфигурация Prettier (.prettierrc):**

\`\`\`json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "always"
}
\`\`\`

**NPM-скрипты:**
\`\`\`json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
  }
}
\`\`\`

---

### 3.3. Настройка Husky и lint-staged

**Конфигурация lint-staged (package.json):**

\`\`\`json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
\`\`\`

**Настройка pre-commit хука:**

После установки Husky через `npm install husky --save-dev` и инициализации через `npx husky init`, создается файл `.husky/pre-commit`:

\`\`\`bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
\`\`\`

Теперь перед каждым коммитом будет автоматически запускаться ESLint и Prettier для измененных файлов.

**Скриншот успешного коммита:**

**[ТРЕБУЕТСЯ: Скриншот успешного коммита с отработавшими pre-commit проверками]**

---

### 3.4. Storybook

**Конфигурация Storybook (.storybook/main.ts):**

\`\`\`typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
\`\`\`

**Конфигурация preview (.storybook/preview.ts):**

\`\`\`typescript
import type { Preview } from '@storybook/react';
import '../src/shared/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
\`\`\`

**Примеры stories:**

**1. TodoList.stories.tsx:**

\`\`\`typescript
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
\`\`\`

**2. AddTodo.stories.tsx:**

\`\`\`typescript
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
\`\`\`


## 4. Выводы

В ходе выполнения лабораторной работы были изучены и настроены основные инструменты для профессиональной разработки:

1. **ESLint** — обеспечивает статический анализ кода и помогает выявлять ошибки на этапе разработки
2. **Prettier** — автоматически форматирует код согласно заданным правилам
3. **Husky + lint-staged** — автоматизирует проверку кода перед коммитом, что предотвращает попадание некачественного кода в репозиторий
4. **Storybook** — позволяет разрабатывать и документировать UI-компоненты изолированно

Эти инструменты значительно повышают качество кода, упрощают командную работу и ускоряют процесс разработки.
