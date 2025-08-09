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
    <GlassCard className='z-40 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg min-w-0'>
      <h2 className='text-xl sm:text-2xl mb-6 font-semibold text-white tracking-wide'>
        To-Do List
      </h2>

      <div className='flex flex-col sm:flex-row gap-3 mb-6'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          aria-label='New task'
          placeholder='Add new task...'
          className='
            flex-grow min-w-0 p-2 sm:p-3 rounded-lg border border-white/30
            bg-white/10 text-white placeholder-white/60
            transition-colors duration-300 ease-in-out
            text-sm sm:text-base
          '
        />
        <button
          onClick={addTask}
          aria-label='Add task'
          className='
            w-full sm:w-auto px-5 py-2 sm:py-3 bg-white/30 hover:bg-white/50
            rounded-lg text-white font-semibold
            text-sm sm:text-base
            transition-colors duration-300 ease-in-out
          '
        >
          Add
        </button>
      </div>

      <ul className='text-white max-h-48 sm:max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-transparent'>
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
            <label className='flex items-center space-x-3 cursor-pointer select-none'>
              <input
                type='checkbox'
                checked={task.done}
                onChange={() => toggleDone(task.id)}
                className='
                  w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 border-white/50
                  transition-colors duration-300 ease-in-out
                '
              />
              <span
                className={`text-sm sm:text-lg ${
                  task.done ? "line-through text-white/60" : "text-white"
                }`}
              >
                {task.text}
              </span>
            </label>
            <button
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete task: ${task.text}`}
              title='Delete task'
              className='
                flex items-center justify-center
                text-red-400 hover:text-red-600
                font-bold text-xl
                transition-colors duration-300 ease-in-out
                select-none
              '
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
