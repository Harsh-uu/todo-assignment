import { useEffect, useState } from "react";
import useTodoStore from "../store/todoStore";

function EditTodoModal() {
  const { setEditTodoModal, updateTodo, selectedTodo, deleteTodo } =
    useTodoStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError(true);
      return;
    }
    updateTodo(selectedTodo.id, { title, description });
    setEditTodoModal(false);
    setTitle("");
    setError(false);
  };

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
    }
  }, [selectedTodo]);

  return (
    <div className="absolute z-20 p-4 min-w-72 sm:w-96 h-fit space-y-4 bg-[#0a0a0a] text-white left-1/2 top-1/2 outline-white/10 outline transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
      <div className="flex justify-end gap-20">
        {error && (
          <p className="text-red-500 text-sm text-center">
            Title cannot be empty!
          </p>
        )}
        <button
          onClick={() => setEditTodoModal(false)}
          className="px-2 cursor-pointer"
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Enter Title"
          className="bg-[#151515] border  border-[#373737] rounded-lg px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error && e.target.value.trim()) setError(false);
          }}
        />
        <textarea
          placeholder="Enter Description"
          className="bg-[#151515] border min-h-30 max-h-72 border-[#373737] rounded-lg px-4 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            onClick={() => {
              deleteTodo(selectedTodo.id);
              setEditTodoModal(false);
            }}
            className="bg-red-600/70 text-white px-4 py-1 cursor-pointer rounded hover:opacity-70"
          >
            Delete Task
          </button>
          <button
            type="submit"
            disabled={error}
            className={`bg-[#fafafa] text-[#151515] px-4 py-1 cursor-pointer rounded hover:opacity-70 `}
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTodoModal;
