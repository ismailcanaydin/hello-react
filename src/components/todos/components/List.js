import { useState, useEffect } from 'react'

function List({ todo, setTodo, initialState }) {
    const isCompleted = () => {
        setTodo(todo.map(item =>
            (item.name === todo.name ? { ...item, completed: !item.completed } : item)))
    }

    

    const deleteItem = (e) => {
        setTodo(current =>
            current.filter(employee => {
                return employee.new_todo !== e.target.name;
            }),
        );
    };

    const click = () => {
        alert("tıklandı")
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    todo.map((todos, i) => (
                        <li key={i} className={todo.completed ? "completed" : ""}>
                            <input className="toggle" type="checkbox" onClick={isCompleted} />
                            <label>{todos.new_todo}</label>
                            <button name={todos.new_todo} onClick={deleteItem} className="destroy"></button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default List