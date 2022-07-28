import { useState, useEffect } from 'react'

function List({ todo, setTodo, hide, filteredTodos }) {
    const checkTodo = (e) => {
        // Uyumlu id'yi bulduktan sonra işaretli olma durumunu(checked) değiştiriyoruz.
        setTodo(todo.map((item) => (
            parseInt(item.id) === parseInt(e.target.id) ? { ...item, checked: !item.checked } : item
            // if (parseInt(item.id) === parseInt(e.target.id)) {
            //     // id'ler eşleşebilsin diye parseInt kullanarak integera çevirdik.
            //     return { ...item, checked: !item.checked };
            // }
            // return item;
        )));
        // setTodo(newTodos); // işaretli olma durumunu set ediyoruz.
    };

    // const isComplated = (e) => {
    //     // Event olarak gelen verinin işaretli olma durumuna göre ve footerdan gelen veriye göre listeleme yapıyoruz.
    //     // hidden classı atandığında dom listede görünmüyor.
    //     if (e.checked === true && hide === "All") {
    //         return "completed";
    //     } else if (e.checked === true && hide === "Active") {
    //         return "completed hidden";
    //     } else if (e.checked === false && hide === "Completed") {
    //         return "hidden";
    //     }
    // };

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
                    filteredTodos ?
                        filteredTodos.map((todo) => (<li key={todo.id} id={todo.id} className={todo.checked ? "completed" : ""}>
                            <input id={todo.id} className="toggle" type="checkbox" onClick={checkTodo} />
                            <label>{todo.todo}</label>
                            <button id={todo.id} name={todo.todo} onClick={deleteItem} className="destroy"></button>
                        </li>))
                        :
                        (
                            todo.map((todo) => (
                                <li key={todo.id} id={todo.id} className={todo.checked ? "completed" : ""}>
                                    <input id={todo.id} className="toggle" type="checkbox" onClick={checkTodo} />
                                    <label>{todo.todo}</label>
                                    <button id={todo.id} name={todo.todo} onClick={deleteItem} className="destroy"></button>
                                </li>
                            ))
                        )
                }
                {/* {
                    filteredTodos.map((todo) => (
                        todo.map((todo, i) => (
                        <li key={todo.id} id={todo.id} className={todo.checked ? "completed": "" }>
                            <input id={todo.id} className="toggle" type="checkbox" onClick={checkTodo} />
                            <label>{todo.todo}</label>
                            <button id={todo.id} name={todo.todo} onClick={deleteItem} className="destroy"></button>
                        </li>
                    ))
                    ))
                    
                } */}
            </ul>
        </section>
    )
}

export default List