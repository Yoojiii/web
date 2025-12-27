# lab3

## 3.2. Структура проекта (FSD)
```
lab3/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── app/
│   │   └── App.tsx
│   ├── pages/
│   │   └── MainPage.tsx
│   ├── widgets/
│   │   └── TodoWidget.tsx
│   ├── features/
│   │   └── AddTodo.tsx
│   ├── entities/
│   │   └── TodoList.tsx
│   ├── shared/
│   │   └── index.css
│   └── main.tsx
```
- **app** — инициализация приложения, глобальные стили
- **pages** — страницы (MainPage)
- **widgets** — крупные UI-блоки (TodoWidget)
- **features** — пользовательские действия (AddTodo)
- **entities** — бизнес-сущности (TodoList)
- **shared** — общие модули и стили

## 3.3. Typescript
**tsconfig.json:**
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```
**Примеры типизации:**
- Используются интерфейсы для пропсов:
```ts
interface AddTodoProps {
  onAdd: (todo: string) => void;
}
```
- Типизация состояния и пропсов компонентов через React.FC и useState<string[]>.
- Все компоненты и props типизированы.

## 3.4. Tailwind
- Tailwind подключён в shared/index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Примеры utility-классов:
```jsx
<div className="min-h-screen bg-gray-100">
  <MainPage />
</div>
```
- Примеры responsive-стилей (можно добавить):
```jsx
<div className="w-full max-w-md bg-white rounded shadow p-4">
  ...
</div>
```
Описание результата:
Приложение реализовано по FSD, с использованием TypeScript и Tailwind CSS. Все компоненты типизированы, стилизация выполнена через utility-классы Tailwind. Можно добавлять задачи и отмечать их выполненными.
