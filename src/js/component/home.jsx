import React, {useState} from "react";
import InputTodo from "./inputTodo.jsx";
import TodoList from "./todoList.jsx";




const Home = () => {

  const [todo, setTodo] = useState('')
  const [listOfTodos, setListOfTodos] = useState([])

  const addTodo = () => {
    setListOfTodos([...listOfTodos, todo])
    setTodo('')
  }
  
  const deleteAllTodos = () => {
    setListOfTodos([])
  }
  
  function deleteTodo (itemToDelete) {
    console.log(listOfTodos)
    const newList = listOfTodos.filter( (item) => {return item !== itemToDelete})
    console.log(newList)
    setListOfTodos(newList)
  }

  let pendingTodos = listOfTodos.length

	return (
		<>
    <div className="container bg-dark w-50 text-center mt-3">
    <InputTodo todo={todo} todoToAdd={(e) => {setTodo(e.target.value)}} addTodo={addTodo}/>

    {listOfTodos.map( (item, index) => {return <TodoList theTodo={item} key={index} deleteTodo={() => deleteTodo(item)} />  } )}
    
    <button type="button" className="btn btn-outline-secondary m-2" onClick={deleteAllTodos}>Delete All Todos</button>

    <p className="text-light">Te faltan por realizar {pendingTodos} tareas</p>
    </div>
		</>
	);
};

export default Home;
