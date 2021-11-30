import { render } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routerList } from '../../../utils/router';

import './style.module.scss'

const Header = () => {
    const renderNavLinks=()=>{
        return routerList.map((route, index) => {
            return <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "active_link nav-link" : "nav-link"}
                    to={route.path}>{route.displayName}</NavLink>
            </li>
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Demo</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        {renderNavLinks()}
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};



export default Header;



