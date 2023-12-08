import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

function CarNavBar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark sticky-top ">
            <Link className="nav-link" to="/dashboard"><img className="card-img-top rounded-circle" src={logo} style={{ width: "35px", height: "35px" }} alt="Card image" /></Link>

            <ul className="navbar-nav ml-auto">

                
                <li className="nav-item">
                    <button onClick={() => navigate(-1)} className="btn btn-outline-warning btn-sm">Back</button>&nbsp;&nbsp;
                </li>
                <li className="nav-item">
                    <button onClick={() => navigate('/logout')} className="btn btn-outline-danger btn-sm">Logout</button>
                </li>


            </ul>
        </nav>
    )


}



export default CarNavBar;