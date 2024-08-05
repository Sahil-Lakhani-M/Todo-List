import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TodoContextProvider } from './context/TodoContextProvider.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CompletedTodos from './components/CompletedTodos.jsx'
import PendingTodos from './components/PendingTodos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <PendingTodos />
      },
      {
        path: 'pending',
        element: <PendingTodos />
      },
      {
        path: 'completed',
        element: <CompletedTodos />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </TodoContextProvider>
  </React.StrictMode>,
)
