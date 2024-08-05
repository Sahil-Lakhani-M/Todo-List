import React, { useEffect, useState } from 'react'
import { useTodos } from '../context/TodoContextProvider'
import Todo from './Todo'
import EditTodo from './EditTodo'

export default function TodoList() {
    const {todos} = useTodos()
    const [myTodos, setMyTodos] = useState([])

    useEffect(() => {
        setMyTodos(todos)
    }, [todos])

    return (
        <>
            <div className="container mt-2">
                <h1 className='text-center'>Your Todo List</h1>
                <h2 className='text-center'>Total Pending : {todos.length}</h2>
            </div>
            <div className="container">
                {
                    myTodos.map((todo) => (
                        <div key={todo.id} className="container">
                            {
                                (todo.editMode) ? <EditTodo todo={todo} /> : <Todo todo={todo} /> 
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}
