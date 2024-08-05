import React, { useState } from 'react'
import { useTodos } from '../context/TodoContextProvider'

export default function EditTodo({todo}) {
    const [newValue, setNewValue] = useState(todo.task)
    const {updateTodo} = useTodos()

    const save = (event) => {
        event.preventDefault()

        updateTodo(todo.id, newValue)
    }

  return (
    <div className="container mb-4 shadow p-0">
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="Add Todo..." value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <div className="input-group-append input-group-lg">
          <button className="btn btn-secondary" type="button" onClick={save}>
            <h5>Save</h5>
          </button>
        </div>
      </div>
    </div>
  )
}
