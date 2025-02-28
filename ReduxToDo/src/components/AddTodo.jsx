import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return; // Prevent adding empty todos
        dispatch(addTodo(input.trim())); 
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className="flex items-center space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 w-64 transition-all duration-200"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Todo Input"
            />
            <button
                type="submit"
                disabled={!input.trim()} // Disable button if input is empty
                className={`text-white py-2 px-6 rounded text-lg transition-all duration-200 ${
                    input.trim()
                        ? 'bg-indigo-500 hover:bg-indigo-600'
                        : 'bg-gray-500 cursor-not-allowed'
                }`}
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
