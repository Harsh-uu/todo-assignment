import { create } from "zustand";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const useTodoStore = create((set) => ({
  todos: [],
  filter: "All",
  addTodoModal: false,
  editTodoModal: false,
  selectedTodo: null,
  loading: false,
  errorMsg: "",
  setSelectedTodo: (todo) => set({ selectedTodo: todo }),
  setEditTodoModal: (boolean) => set({ editTodoModal: boolean }),
  setAddTodoModal: (boolean) => set({ addTodoModal: boolean }),
  addTodo: async (todo) => {
    set({ loading: true, errorMsg: "" });
    try {
      const newTodo = {
        userId: 1,
        ...todo,
        id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        completed: false,
      };
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!resp.ok) return set({ errorMsg: "Failed to add todo" });
      const data = await resp.json();
      data.id = newTodo.id;
      set((state) => ({
        todos: [data, ...state.todos],
      }));
    } catch (error) {
      set({ errorMsg: "An error occurred while adding todo" });
    } finally {
      set({ loading: false });
    }
  },
  deleteTodo: async (id) => {
    try {
      const resp = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!resp.ok) return set({ errorMsg: "Failed to remove todo" });
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      set({ errorMsg: "An error occurred while removing todo" });
    }
  },
  updateTodo: async (id, updateTodo) => {
    set((state) => {
      const todos = state.todos.map((todo) => (todo.id === id ? { ...todo, ...updateTodo } : todo));
      return { todos };
    });
  },

  changeComplete: (id) =>
    set((state) => {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return { todos: [...state.todos] };
    }),
  loading: false,
  errorMsg: "",
  setFilter: (filter) => set({ filter }),
  fetchTodos: async () => {
    set({ loading: true, errorMsg: "" });
    try {
      const resp = await fetch(API_URL);
      if (!resp.ok) return set({ errorMsg: "Failed to fetch todos" });
      const data = await resp.json();
      set({ todos: data });
    } catch (error) {
      set({ errorMsg: "An error occurred while fetching todos" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useTodoStore;
