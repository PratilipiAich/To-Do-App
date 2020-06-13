import React, { useState } from 'react';
import uuid from 'uuid';
import { Button, TextField } from '@material-ui/core';

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            // Reset task input
            setTodo({ ...todo, task: ""});
        }
    }
    return (
        
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField 
            label="Enter Task..."
            name="task"
            style={{width: 350}}
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <Button type="submit" style={{  
                backgroundColor: '#282c34', 
                fontFamily: "sans-serif",
                border: 2, 
                padding: 8, 
                color: 'white',
                marginLeft: 30,
                borderRadius: '30px' }}>Add</Button>
        </form>
    );
}

export default TodoForm;