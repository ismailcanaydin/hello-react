import './App.css';
import { React } from "react";
import Header from "./components/Header.js";
import Deneme from './components/deneme.js';
import UserComponent from './components/userComponent.js'
import UseState from './components/useState.js';
import Counter from './components/Counter.js'
import InputExample from './components/InputExample.js'

function App() {
  

  return (
    <>
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
    </>
  );
}

export default App;
