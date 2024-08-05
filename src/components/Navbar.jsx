import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="container mt-3 mb-4">
                <h1 className="text-center">Manage Your Todos</h1>
            </div>
            <div className="container mb-4">
                <nav className="navbar bg justify-content-center" data-bs-theme="dark">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/pending">
                                <h3>Pending-Todos</h3>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/completed">
                                <h3>Completed-Todos</h3>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
