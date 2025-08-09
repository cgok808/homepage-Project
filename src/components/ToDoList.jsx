import React, { useState, useEffect, useRef } from "react";
import { GlassCard } from "./GlassCard";

const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = (id) => {
    if (!editText.trim()) {
      deleteTask(id);
      return;
    }
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: editText.trim() } : t))
    );
    cancelEditing();
  };

  const handleEditKeyDown = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEditing();
    }
  };

  const editInputRef = useRef(null);
  useEffect(() => {
    if (editingId !== null) {
      editInputRef.current?.focus();
    }
  }, [editingId]);

  return (
    <GlassCard className='z-40 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg min-w-0'>
      <h2 className='text-xl text-black/60 sm:text-2xl mb-6 font-bold border-white/30 border-b-2 pb-2 tracking-wide'>
        you remember?
      </h2>

      <div className='flex flex-col sm:flex-row gap-3 mb-6'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          aria-label='New task'
          placeholder='Add new task...'
          className='focus:outline-none flex-grow min-w-0 p-2 sm:p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/60 transition-colors duration-300 ease-in-out text-sm sm:text-base'
        />
        <button
          onClick={addTask}
          aria-label='Add task'
          className='w-full sm:w-auto px-5 py-2 sm:py-3 bg-white/30 hover:bg-white/50 rounded-lg text-white font-semibold text-sm sm:text-base transition-colors duration-300 ease-in-out'
        >
          Add
        </button>
      </div>

      <ul
        className='text-white max-h-48 sm:max-h-56 overflow-y-auto scrollbar-thin scrollbar-track-transparent rounded-md '
        style={{ scrollbarGutter: "stable" }}
      >
        {tasks.length === 0 && (
          <li className='opacity-60 italic text-center select-none text-sm sm:text-base'>
            No tasks yet
          </li>
        )}

        {tasks.map((task) => (
          <li
            key={task.id}
            className='flex justify-between items-center mb-3 last:mb-0'
          >
            <label className='flex items-center space-x-3 cursor-pointer select-none min-w-0 flex-grow'>
              <input
                type='checkbox'
                checked={task.done}
                onChange={() => toggleDone(task.id)}
                className='w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 border-white/50 transition-colors duration-300 ease-in-out flex-shrink-0'
              />
              {editingId === task.id ? (
                <input
                  ref={editInputRef}
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => handleEditKeyDown(e, task.id)}
                  className='focus:outline-none flex-grow min-w-0 p-1 rounded-md border border-white/40 bg-white/20 text-white placeholder-white/60 text-sm sm:text-base'
                  aria-label='Edit task'
                />
              ) : (
                <span
                  className={`text-sm sm:text-lg break-words whitespace-normal min-w-0 ${
                    task.done ? "line-through text-white/60" : "text-white"
                  }`}
                >
                  {task.text}
                </span>
              )}
            </label>

            <div className='flex space-x-2 ml-3 flex-shrink-0 mr-1.5'>
              {editingId === task.id ? (
                <button
                  onClick={() => saveEdit(task.id)}
                  aria-label='Save task'
                  title='Save task'
                  className='px-2 py-1 bg-white/30 hover:bg-white/50 rounded text-white text-xs sm:text-sm font-semibold transition-colors'
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(task)}
                  aria-label='Edit task'
                  title='Edit task'
                  className='px-2 py-1 bg-white/30 hover:bg-white/50 rounded text-white text-xs sm:text-sm font-semibold transition-colors'
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete task: ${task.text}`}
                title='Delete task'
                className='flex items-center justify-center text-red-400 hover:text-red-600 font-bold text-xl transition duration-300 ease-in-out select-none'
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
};

export default ToDoList;
