import React, {useState} from "react";
import InputTodo from "./inputTodo.jsx";
import TodoList from "./todoList.jsx";




const Home = () => {

  const [todo, setTodo] = useState('')
  const [listOfTodos, setListOfTodos] = useState([])

  const addTodo = () => {
    setListOfTodos([...listOfTodos, todo])
  }
  
  const deleteAllTodos = () => {
    setListOfTodos([])
  }

  const deleteTodo = () => {
    const resultingTodos = listOfTodos.filter( (item) => { item !== kaka})
    setListOfTodos([resultingTodos])
  }


	return (
		<>
    <div className="container bg-dark w-50 text-center mt-3">
    <InputTodo todoToAdd={(e) => {setTodo(e.target.value)}} addTodo={addTodo}/>

    {listOfTodos.map( (item, index) => {return <TodoList theTodo={item} key={index} deleteTodo={deleteTodo} />  } )}

    <button type="button" className="btn btn-outline-secondary m-2" onClick={deleteAllTodos}><i className="bi bi-trash"></i>Delete All Todos</button>
    </div>
		
		</>
		
	);
};

export default Home;
