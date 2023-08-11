import React from 'react'
import {Link} from 'react-router-dom'

const Navabar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <Link to='/'>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                </Link>
                <Link to='/register'>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                </Link>
                
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </>
  )
}

export default Navabar