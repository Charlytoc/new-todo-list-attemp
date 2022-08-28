import React from "react";


function TodoList ({theTodo, deleteTodo}) {
    return (
        <>
        <ul className="list-group list-group-flush mt-2">
  <li className="list-group-item">{theTodo}<button onClick={deleteTodo} type="button" className="btn-close float-end"></button></li>
</ul>
        </>
    )
}

export default TodoList