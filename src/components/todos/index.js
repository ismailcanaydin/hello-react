import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function Todos() {
    // const initialState = [
    //     {
    //         id: 1,
    //         new_todo: 'Javascript',
    //         checked: true
    //     },
    //     {
    //         id: 2,
    //         new_todo: 'React',
    //         checked: false
    //     },
    //     {
    //         id: 3,
    //         new_todo: 'Nodejs',
    //         checked: true
    //     },
    // ];

    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo-LS')) || []);

    const [status, setStatus] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);

    const [hide, setHide] = useState("All");

    // useEffect(() => {
    //     console.log(todo);
    // }, []);

    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case 'completed':
                    setFilteredTodos(todo.filter(todo => todo.checked === true))
                    console.log('copm');
                    break;
                case 'active':
                    setFilteredTodos(todo.filter(todo => todo.checked === false))
                    console.log('act');
                    break;
                default:
                    setFilteredTodos(todo)
                    console.log('brk');
                    break;
            }
        }

        filterHandler()
    }, [todo, status])

    return (
        <div>
            <section className="todoapp">
                <Header addTodo={setTodo} todo={todo} />
                <List todo={todo} setTodo={setTodo} hide={hide} filteredTodos = {filteredTodos} />

                <Footer todo={todo} setTodo={setTodo} status={status}
                    setStatus={setStatus} setHide={setHide} />
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </div>
    )
}

export default Todos