import React from "react";

function InputTodo ({todoToAdd, addTodo, todo}) {
    return <>
    <h1 className="text-light text-center p-2">Todo App by Charlytoc</h1>
    <div className="input-group mt-3">
  <input type="text" value={todo} className="form-control" placeholder="Add todo" onChange={todoToAdd} />
  <button className="btn btn-outline-secondary" type="button" onClick={addTodo}>Add todo</button>
</div>
    </>
}

export default InputTodo;