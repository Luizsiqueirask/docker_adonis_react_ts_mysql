import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
            <Link className="navbar-brand" to="/">Petshop Web</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownBlog" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Person</Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                <li><Link className="dropdown-item" to="/person/add-person">Registar Pessoa</Link></li>
                                <li><Link className="dropdown-item" to="/person/view-people">Visualizar Pessoa</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pet</Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                <li><Link className="dropdown-item" to="/pet/add-pet">Registar Pet</Link></li>
                                <li><Link className="dropdown-item" to="/pet/view-pets">Visualizar Pets</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
  )
}

export default Navbar
