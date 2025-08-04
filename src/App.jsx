import { useEffect } from 'react'
import useTodoStore from './store/todoStore'
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import EditTodoModal from './components/EditTodoModal';
import TodoSkeleton from './components/TodoSkeleton';

function App() {

  const {loading, fetchTodos, setFilter, filter, addTodoModal, setAddTodoModal, editTodoModal, setEditTodoModal, selectedTodo} = useTodoStore();
  
  useEffect(() => {
    fetchTodos();
  }, []);
  

  return (
    <div className={`font-DM min-h-screen p-10 bg-[#0a0a0a] ${addTodoModal || editTodoModal ? 'overflow-hidden h-screen' : ''}`}>
    <h1 className='text-4xl text-[#d4d4d4] font-bold mb-10'>My Tasks</h1>
    <div className="flex flex-col sm:flex-row justify-between gap-2 mb-10">
        <button
          onClick={() => setAddTodoModal(true)}
          className="bg-[#262626] hover:bg-[#141414] text-white px-4 py-2 rounded cursor-pointer"
        >
          Add new task
        </button>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="bg-[#151515] text-white px-4 py-2 rounded cursor-pointer"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      {loading && <TodoSkeleton />}
    <TodoList />
    {(addTodoModal || editTodoModal) && (
      <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-10 h-screen"
          onClick={() => {
            if (addTodoModal) setAddTodoModal(false);
            if (editTodoModal) setEditTodoModal(false);
          }}
        ></div>
    )}
    {addTodoModal && <AddTodoModal />}
    {editTodoModal && <EditTodoModal todo={selectedTodo} />}
    </div>
  )
}

export default App