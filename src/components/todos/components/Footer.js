import { useState } from 'react'

function Footer({ todo, setTodo, setHide }) {
    // işaretlenme durumuna göre filtre oluşturuyoruz.
    const unCompleted = () => todo.filter((todo) => todo.checked === false);
    

    // Footer altında oluşturulan butonların seçilme durumu için array bir state oluşturuyoruz.
    const [select, setSelect] = useState("selected", "", "");

    // işaretlenmiş olanları sildirmek için yine filtre kullanıyoruz.
    const clearCompleted = (e) => {
        e.preventDefault()
        setTodo(todo.filter((todo) => todo.checked === false));
    };

    // Footer altındaki butonlar tıklandığında selected clasını atayabilmek için hide state'ine butonun id'sini atıyoruz.
    // Tıklanan butona göre hide state'ine de değer atıyoruz.
    const selectedButton = (e) => {
        switch (e.target.id) {
            case "All":
                setSelect(["selected", "", ""]);
                setHide("All");
                break;
            case "Active":
                setSelect(["", "selected", ""]);
                setHide("Active");
                break;
            case "Completed":
                setSelect(["", "", "selected"]);
                setHide("Completed");
                break;
            default:
        }
    };


    return (
        <footer className='footer'>
            <span className="todo-count">
                <strong>{unCompleted.length}</strong>
                {unCompleted.length > 1 ? " items left" : " item left"}
                {/* Tamamlanmamış todoların sayısını alabilmek için filtre ile oluşturdumuz array'in eleman sayısını kullanıyoruz. */}
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" id='All' className={select[0]} onClick={selectedButton}>All</a>
                </li>
                <li>
                    <a href="#/" id='Active' className={select[1]} onClick={selectedButton}>Active</a>
                </li>
                <li>
                    <a href="#/" id='Completed' className={select[2]} onClick={selectedButton}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer