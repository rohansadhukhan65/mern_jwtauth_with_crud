import React from 'react'
import { Link } from 'react-router-dom';
import {TITLE} from '../constants';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sha navbar-dark bg-dark">
                <div className="container">
                    <Link to='/' className="navbar-brand" >{TITLE}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav px-3 ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register"><i class="fas fa-user me-2"></i> Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="fas fa-sign-in-alt me-2"/> Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
