import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function Todos() {
    const [todo, setTodo] = useState([
        {
            new_todo: 'Javascript'
        },
        {
            new_todo: 'React'
        },
        {
            new_todo: 'Nodejs'
        }
    ]);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    return (
        <div>
            <section className="todoapp">
                <Header addTodo={setTodo} todo={todo} />
                <List todo={todo} />
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