import { useState, useEffect } from 'react'

import '../styles.css'

// const initialFormValues = { id: '', new_todo: '', complated: true }

function Header({ addTodo, todo }) {
    const [form, setForm] = useState("");

    


    useEffect(() => {
        setForm("")
        localStorage.setItem('todo-LS', JSON.stringify(todo))
        //setForm(initialFormValues);
    }, [todo]);

    const onChangeInput = (e) => {
        setForm(e.target.value );
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form === '') {
            return false;
        } else {
            console.log(form);

        };

        // addTodo([...todo, form]);
        addTodo([
            ...todo, // State içerisindeki verileri kaybetmemek için ...todo yazıyoruz.
            {
                id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 0, // Id çakışması olmaması için todo'un son elemanının id'sine bakıp +1 ekliyoruz. Eğer eleman yoksa ilk id 0 oluyor.
                todo: form,
                checked: false, // Varsayılanı false yapıyoruz ki checkbox işaretsiz gelsin.
            },
        ]);

    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input id={todo.id} name='new_todo' className="new-todo" placeholder="What needs to be done?"
                    onChange={onChangeInput} value={form} autoFocus />
            </form>
        </header>
    )
}

export default Header