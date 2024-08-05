import React from 'react'
import { useTodos } from '../context/TodoContextProvider'

export default function Todo({todo}) {
    const {completeTodo, deleteTodo, editTodo} = useTodos()

    const done = (event) => {
        event.preventDefault()

        completeTodo(todo.id)
    }

    const remove = (event) => {
        event.preventDefault()

        deleteTodo(todo.id)
    }

    const setEditMode = (event) => {
        event.preventDefault()

        editTodo(todo.id)
    }

    return (
        <div className='row shadow mt-4 mb-4'>
            <div className="col-1">
                <button className='btn btn-outline-success mt-2 mb-2' onClick={done}>
                    <h5>Done</h5>
                </button>
            </div>
            <div className="col-9">
                <h3 className='col text-left mt-2 mb-2'>{todo.task}</h3>
            </div>
            <div className="col-2">
                <div className="row">
                    <div className="col-6 text-center">
                        <button className='btn btn-primary mt-2 mb-2' onClick={setEditMode}>
                            <h5>Edit</h5>
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        <button className='btn btn-danger h5 mt-2 mb-2' onClick={remove}>
                            <h5>Delete</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
