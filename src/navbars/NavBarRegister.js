import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function NavBarRegister() {

    return (
        <nav className="navbar navbar-expand-sm bg-dark  navbar-dark sticky-top ">
            <Link className="nav-link" to="/"><img className="card-img-top rounded-circle" src={logo} style={{ width: "35px", height: "35px" }} alt="Card image" /></Link>

            <ul className="navbar-nav ml-auto">


                <li className="nav-item">
                    <button className='btn btn-outline-success btn-sm'>
                        <Link className="nav-link" to="/login">Login</Link>
                    </button>&nbsp;
                </li>
                <li className="nav-item">
                <button className='btn btn-outline-warning btn-sm'>
                    <Link className="nav-link" to="/forgetPassword">ForgetPassword</Link>
                    </button>
                </li>


            </ul>
        </nav>
    )
}



export default NavBarRegister;