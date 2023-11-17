// TodoWrapper.jsx
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoText) => {
        setTodos([...todos, { id: uuidv4(), task: todoText, completed: false, isEditing: false }]);
    };

    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo task={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoWrapper;
