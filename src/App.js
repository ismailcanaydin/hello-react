// import './App.css';
import './components/todos/styles.css'
import React, { useState } from "react";
import Header from "./components/Header.js";
import Deneme from './components/deneme.js';
import UserComponent from './components/userComponent.js'
import UseState from './components/useState.js';
import Counter from './components/Counter.js'
import InputExample from './components/InputExample.js'
import UseEffect from './components/UseEffect';
import Contacts from './components/contacts-app/Contacts';
import Todos from './components/todos';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='App'>
      <Todos />
      {/*<Contacts />
       <br /><br />
      <hr />
      <h1 className='merhaba'>Merhaba React</h1>
      <Header />
      <hr />
      <Deneme />
      <hr />
      <UserComponent />
      <hr />
      <UseState />
      <hr />
      <Counter />
      <hr />
      <InputExample />
      <hr />
      {isVisible && <UseEffect />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button> */}
    </div>
  );
}

export default App;
