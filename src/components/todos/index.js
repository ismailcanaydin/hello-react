import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function Todos() {
    const initialState = [
        {
            new_todo: 'Javascript'
        },
        {
            new_todo: 'React'
        },
        {
            new_todo: 'Nodejs'
        },
      ];

    const [todo, setTodo] = useState(initialState);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    return (
        <div>
            <section className="todoapp">
                <Header addTodo={setTodo} todo={todo} />
                <List todo={todo} setTodo={setTodo} initialState={initialState} />
                <Footer />
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