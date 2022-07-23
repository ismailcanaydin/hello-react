import { useState, useEffect } from 'react'

import '../styles.css'

const initialFormValues = { new_todo: '' }

function Header({addTodo, todo}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [todo]);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.new_todo === '') {
            return false;
        } else {
            console.log(form);
        };

        addTodo([...todo, form]);
        
    }
    
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name='new_todo' className="new-todo" placeholder="What needs to be done?" 
                    onChange={onChangeInput} value={form.new_todo} autoFocus />
            </form>
        </header>
    )
}

export default Header