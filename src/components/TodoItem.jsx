import useTodoStore from "../store/todoStore";

function TodoItem({ todo }) {
  const { changeComplete, setEditTodoModal, setSelectedTodo } = useTodoStore();
  return (
    <div
      className={`mb-4 ${
        todo.completed ? "bg-green-400/70 text-white" : "bg-[#151515]"
      } text-[#d4d4d4] sm:max-w-72 px-4 py-2 min-h-40 h-fit rounded-lg flex flex-col justify-between`}
    >
      <h1 className="text-2xl font-semibold my-auto line-clamp-3">{todo.title}</h1>
      {/* <p>{todo.description}</p> */}
      <div className="flex justify-between mt-4">
        <button onClick={() => {
            setSelectedTodo(todo)
            setEditTodoModal(true)
            }} className="cursor-pointer">Edit</button>
      <button className={`cursor-pointer px-2 rounded-lg ${todo.completed ? " bg-green-800 border border-green-400": "bg-[#010101] border-white/20 border"}`} onClick={() => changeComplete(todo.id)}>
        {todo.completed ? "Completed" : "Pending"}
      </button>
      </div>
    </div>
  );
}

export default TodoItem;
