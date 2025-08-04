
# Assessment Todo App

A modern, clean, and responsive Todo application built with React and Zustand. This app demonstrates best practices in state management, UI design, and user experience.

## Features

- **Add, Edit, and Remove Todos**: Easily manage your tasks with intuitive controls.
- **Filter Tasks**: View all, completed, or pending tasks using the filter dropdown.
- **Custom Modals**: Add and edit tasks using beautiful, animated custom modal dialogs.
- **Clean & Responsive UI**: Enjoy a visually appealing interface with smooth transitions and a mobile-friendly layout.
- **Loading Skeletons**: See animated skeleton loaders while data is being fetched.
- **Persistent State**: All todos are managed in a global store using Zustand.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Harsh-uu/todo-assignment.git
   cd assessment-todo
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application
Start the development server:
```sh
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure
```
assessment-todo/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTodoModal.jsx
│   │   ├── EditTodoModal.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoSkeleton.jsx
│   ├── store/
│   │   └── todoStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Credits
- [React](https://react.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

Enjoy your productive and beautiful todo experience!
