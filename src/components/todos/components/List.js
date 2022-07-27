import { useState, useEffect } from 'react'

function List({ todo, setTodo, hide }) {
    const checkTodo = (e) => {
        // Uyumlu id'yi bulduktan sonra işaretli olma durumunu(checked) değiştiriyoruz.
        let newTodos = todo.map((todo) => {
            if (parseInt(todo.id) === parseInt(e.target.id)) {
                // id'ler eşleşebilsin diye parseInt kullanarak integera çevirdik.
                return { ...todo, checked: !todo.checked };
            }
            return todo;
        });
        setTodo(newTodos); // işaretli olma durumunu set ediyoruz.
    };

    const isComplated = (e) => {
        // Event olarak gelen verinin işaretli olma durumuna göre ve footerdan gelen veriye göre listeleme yapıyoruz.
        // hidden classı atandığında dom listede görünmüyor.
        if (e.checked === true && hide === "All") {
            return "completed";
        } else if (e.checked === true && hide === "Active") {
            return "completed hidden";
        } else if (e.checked === false && hide === "Completed") {
            return "hidden";
        }
    };

    const deleteItem = (e) => {
        setTodo(todo.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id)));
    };

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    todo.map((todo, i) => (
                        <li key={todo.id} id={todo.id} className={isComplated(todo)}>
                            <input id={todo.id} className="toggle" type="checkbox" onClick={checkTodo} />
                            <label>{todo.todo}</label>
                            <button id={todo.id} name={todo.todo} onClick={deleteItem} className="destroy"></button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default List