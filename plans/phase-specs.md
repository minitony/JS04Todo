# Phase-wise Specification for JS04Todo

## Phase 1: Project Initialization
- Goal: Set up React development environment and basic project structure.
- Tasks:
  1. Create a new React app using Vite.
  2. Install dependencies: react, react-dom, vite, @vitejs/plugin-react.
  3. Configure ESLint and Prettier.
  4. Establish folder structure:
     - `src/components`
     - `src/pages` (if using)
     - `src/hooks`
     - `src/styles`
     - `public`
  5. Create entry files:
     - [`src/main.jsx`](./src/main.jsx:1) - bootstrap React app.
     - [`src/index.jsx`](./src/index.jsx:1) - render root component.
  6. Configure `vite.config.js` for development server.
  7. Set up scripts in [`package.json`](./package.json:1) for development and build.
  8. Add ESLint and Prettier configuration files.
- Learning Outcomes: Understanding of project scaffolding, npm scripts, tooling.

## Phase 2: Basic UI Implementation (Add Todo)
- Goal: Implement UI to add a new todo item.
- Components:
  - `TodoForm` - input and submit button.
  - `TodoList` - container for rendering list of todos.
- File references:
  - [`src/components/TodoForm.jsx`](./src/components/TodoForm.jsx:1)
  - [`src/components/TodoList.jsx`](./src/components/TodoList.jsx:1)
- State: Use `useState` to manage array of todo objects.
- UI Requirements: Input field, button, list container.

## Phase 3: Delete Functionality
- Goal: Add ability to delete a todo item.
- Implementation:
  - Pass delete callback from `TodoList` to each `TodoItem`.
  - Handle click event to remove item from state.
- File references:
  - [`src/components/TodoItem.jsx`](./src/components/TodoItem.jsx:1)
  - [`src/components/TodoList.jsx`](./src/components/TodoList.jsx:1) (updated)
- Learning Outcomes: Event handling, array mutation, immutability.

## Phase 4: Array State Management
- Goal: Deepen understanding of managing state as an array.
- Tasks:
  - Learn spread operator and immutable updates.
  - Implement functions: `addTodo`, `deleteTodo`, `updateTodoText`.
  - Use `useReducer` optionally to manage state logic.
- File references:
  - [`src/hooks/useTodo.js`](./src/hooks/useTodo.js:1)
- Concepts: Reducer pattern, action types.

## Phase 5: Prop Drilling to Child Components
- Goal: Pass props from parent (`TodoList`) to child (`TodoItem`).
- Details:
  - Props include `todo` object and `onDelete` callback.
  - Child component displays todo text and delete button.
- File references:
  - [`src/components/TodoItem.jsx`](./src/components/TodoItem.jsx:1) (updated)
- Learning Outcomes: Props drilling, component communication.

## Phase 6: Event Handling for Delete
- Goal: Properly handle delete events.
- Implementation:
  - Add `onClick` handler to delete button.
  - Ensure event propagation and prevent default behavior.
- File references:
  - [`src/components/TodoItem.jsx`](./src/components/TodoItem.jsx:1) (further updated)
- Concepts: Synthetic events, event objects.

## Phase 7: Using map, filter
- Goal: Utilize JavaScript array methods for rendering and manipulation.
- Tasks:
  - Use `map` to render list of todos.
  - Use `filter` to implement a "completed" filter (future extension).
  - Possibly use `reduce` for stats.
- File references:
  - [`src/components/TodoList.jsx`](./src/components/TodoList.jsx:1) (using map)
- Learning Outcomes: Functional array methods, concise rendering.

## Overall Deliverables
- Fully functional Todo app with add, delete, and state management.
- Clean component hierarchy.
- Code organized according to the established folder structure.
- Documentation in `README.md` (not covered in phases but planned).
- [`README.md`](./README.md:1)