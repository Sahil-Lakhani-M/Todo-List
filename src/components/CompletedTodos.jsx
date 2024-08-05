import React, { useEffect, useState } from 'react'
import { useTodos } from '../context/TodoContextProvider'

export default function CompletedTodos() {
    const {completed, clearHistory} = useTodos()
    const [completedTodos, setCompletedTodos] = useState([])

    useEffect(() => {
        setCompletedTodos(completed)
    }, [completed])

    const clear = (event) => {
        event.preventDefault()

        clearHistory()
    }

  return (
    <div className="container mt-4">
        <div className="container mb-2">
            <h1 className='text-center'>Completed Todos</h1>
            <h2 className='text-center'>Total Completed : {completedTodos.length}</h2>
        </div>
        <div className="container mt-3">
            {
                completedTodos.map((item) => {
                    return (
                        <div key={item.id} className="container">
                            <div className="col-12">
                                <h2 className='col text-left mt-2 mb-2 line-through'>{item.task}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="container mt-4 text-center">
            <button className='btn btn-outline-danger' onClick={clear}>
                <h4>Clear History</h4>
            </button>
        </div>
    </div>
    
  )
}
