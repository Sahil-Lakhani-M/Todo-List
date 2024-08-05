import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext({
    todos: [],
    completed: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    completeTodo: (id) => {},
    editTodo: (id) => {},
    clearHistory: () => {}
})

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([])
    const [completed, setCompleted] = useState([])

    const addTodo = (todo) => {
        setTodos((todos) => [...todos, {id: Date.now(), task: todo, completed: false, editMode: false}])
    }

    const updateTodo = (id, todo) => {
        let arr = todos.map((item) => {
            if(item.id === id) {
                return {id:id, task:todo, completed: false, editMode: false}
            } else {
                return item
            }
        })
        
        setTodos(arr)
    }

    const deleteTodo = (id) => {
        let arr = todos.filter((item) => (item.id !== id))

        setTodos(arr)
    }

    const completeTodo = (id) => {
        for(let i=0; i<todos.length; i++) {
            if(todos[i].id === id) {
                setCompleted((completed) => [...completed, {id:todos[i].id, task:todos[i].task}])
            }
        }

        deleteTodo(id)
    }

    const editTodo = (id) => {
        let arr = todos.map((item) => {
            if(item.id === id) {
                return {...item, editMode: true}
            } else {
                return item
            }
        })

        setTodos(arr)
    }

    const clearHistory = () => {
        setCompleted([])
    }

    useEffect(() => {
        const pendingTodos = JSON.parse(localStorage.getItem("PendingTodos"))
        if(pendingTodos && pendingTodos.length > 0) {
            setTodos(pendingTodos)
        }

        const completedTodos = JSON.parse(localStorage.getItem("CompletedTodos"))
        if(completedTodos && completedTodos.length > 0) {
            setCompleted(completedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('PendingTodos', JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        localStorage.setItem('CompletedTodos', JSON.stringify(completed))
    }, [completed])

    return (
        <TodoContext.Provider value={{todos, completed, addTodo, updateTodo, deleteTodo, completeTodo, editTodo, clearHistory}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    return useContext(TodoContext)
}