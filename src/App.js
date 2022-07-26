// import './App.css';
// import './components/todos/styles.css'
// import React, { useState } from "react";
// import Header from "./components/Header.js";
// import Deneme from './components/deneme.js';
// import UserComponent from './components/userComponent.js'
// import UseState from './components/useState.js';
// import Counter from './components/Counter.js'
// import InputExample from './components/InputExample.js'
// import UseEffect from './components/UseEffect';
// import Contacts from './components/contacts-app/Contacts';
// import Todos from './components/todos';
// import Users from './components/fetching';
// import React_Router from "./components/react-router";
// import FormikForm from "./components/formik";
// import React_Memo from "./components/react-memo/index.js";
import Context from "./components/context/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/context2/components/Header.js";
import { GlobalProvider } from "./components/context2/Context/GlobalState.js";
import Menu from "./components/context2/components/Menu.js";
import React_Inıtl from "./react-initl/React_Inıtl.js";
import Counter from "./testing/Counter/Counter.js";
import Todo from "./testing/Todo/Todo.js";

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='App'>
      <Todo />
      {/* 
      <Counter />
      <React_Inıtl /> */}
      {/*       
      <GlobalProvider>
        <Menu />
        <Header />
      </GlobalProvider> */}
      {/*
      <Context />
      <React_Memo />
      <FormikForm />
      <React_Router />
      <Users />
      <Todos />
      <Contacts />
       <br /><br />
      <hr />
      <h1 className='merhaba'>Merhaba React</h1>
      <Header />
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
