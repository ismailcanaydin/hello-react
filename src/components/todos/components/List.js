import { useState, useEffect } from 'react'

function List({todo}) {
    const deleteItem = todo.filter((e) => {

    })


    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    todo.map((todos, i) => (
                        <li key={i} className='comlated'>
                            <input className="toggle" type="checkbox" />
                            <label>{todos.new_todo}</label>
                            <button onClick={deleteItem} className="destroy"></button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default List