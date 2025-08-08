import React, { useState, useEffect } from "react";
import { GlassCard } from "./GlassCard";

const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

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

  return (
    <GlassCard className='z-40 max-w-md w-full p-4'>
      <h2 className='text-xl mb-4 font-semibold'>To-Do List</h2>
      <div className='flex mb-4'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='flex-grow p-2 rounded border border-white/20 focus:outline-none'
          placeholder='Add new task...'
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className='ml-2 bg-white/30 hover:bg-white/50 text-white px-4 rounded'
        >
          Add
        </button>
      </div>
      <ul className='text-white max-h-48 overflow-auto'>
        {tasks.length === 0 && <li className='opacity-50'>No tasks yet</li>}
        {tasks.map((task) => (
          <li key={task.id} className='flex justify-between items-center mb-2'>
            <label className='flex items-center space-x-2 cursor-pointer'>
              <input
                type='checkbox'
                checked={task.done}
                onChange={() => toggleDone(task.id)}
              />
              <span className={task.done ? "line-through opacity-50" : ""}>
                {task.text}
              </span>
            </label>
            <button
              onClick={() => deleteTask(task.id)}
              className='text-red-400 hover:text-red-600 font-bold transition-colors'
              aria-label='Delete task'
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
};

export default ToDoList;
