import React, { useState } from 'react'
import { useTodos } from '../context/TodoContextProvider'

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("")
  const { addTodo } = useTodos()

  const add = (event) => {
    event.preventDefault()

    if (newTodo === "") {
      alert("Todo can't be Empty.")
      return;
    }

    addTodo(newTodo);
    setNewTodo("")
  }

  return (
    <div className="container mb-4 shadow p-0">
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="Add Todo..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <div className="input-group-append input-group-lg">
          <button className="btn btn-secondary" type="button" onClick={add}>
            <h5>Add</h5>
          </button>
        </div>
      </div>
    </div>
  )
}
