import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function NavBarRHome() {

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top" style={{fontSize:"30Px",marginLeft:"0px"}}>
            <Link className="nav-link" to="/"><img className="card-img-top rounded-circle" src={logo} style={{ width: "35px", height: "35px" }} alt="Card image" /></Link>

            <ul className="navbar-nav ml-auto">


                <li className="nav-item">
                    <button className='btn btn-sm btn-outline-success '>
                        <Link className="nav-link" to="/login">Login</Link>
                    </button>&nbsp;
                </li>
                <li className="nav-item">
                    <button className='btn btn-sm btn-outline-warning'>
                        <Link className="nav-link" to="/user/add">Register</Link>
                    </button>&nbsp;
                </li>
                <li className="nav-item">
                    <button className='btn btn-sm btn-outline-primary'>
                        <Link className="nav-link" to="/guest">Guest</Link>
                    </button>&nbsp;
                </li>
                {/* <li className="nav-item">
                    <button className='btn btn-sm btn-outline-warning'>
                        <Link className="nav-link" to="/booking/all">Bookings</Link>
                    </button>&nbsp;
                </li> */}
                <div class="dropdown">

                    {/* <button type="button" class="btn btn-lg btn-outline-success dropdown-toggle" data-toggle="dropdown">
                        Links
                    </button>&nbsp;
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/user/all">AllUsers</a>
                        <a class="dropdown-item" href="/dashboard">Dashboard</a>
                    </div> */}
                </div>

            </ul>
        </nav>
    )
}



export default NavBarRHome;