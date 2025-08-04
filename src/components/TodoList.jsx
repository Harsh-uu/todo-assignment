import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";
import TodoSkeleton from "./TodoSkeleton";

function TodoList() {
  const { todos, filter, loading, errorMsg } = useTodoStore();

  const safeTodos = Array.isArray(todos) ? todos : [];

  const filteredTodos = safeTodos.filter((todo) => {
    if (filter === "Completed") {
      return todo.completed === true;
    } else if (filter === "Pending") {
      return todo.completed === false;
    }
    return true;
  });

  if (loading) {
    return <TodoSkeleton/>;
  }

  if (errorMsg) {
    return <div className="text-red-500 text-center">Error: {errorMsg}</div>;
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="text-gray-400 text-center">
        {filter === "All" 
          ? "No todos found." 
          : `No ${filter.toLowerCase()} todos found.`}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
