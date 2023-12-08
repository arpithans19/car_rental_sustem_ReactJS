import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

function NavBarDashboard() {
    const myUser = localStorage.getItem("myUser");
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="nav-link" to="/">
                <img className="card-img-top rounded-circle" src={logo} style={{ width: "35px", height: "35px" }} alt="Card image" />
            </Link>

            <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item "> */}
                    {/* <button className='btn btn-sm btn-outline-warning'>
                        <Link className="nav-link" to="/car/all">cars</Link>
                    </button>&nbsp;
                </li> */}
               <li className="nav-item ">
                    <button className='btn btn-sm btn-outline-warning'>
                        <Link className="nav-link" to="/dashboard">Back</Link>
                    </button>&nbsp;
                </li>

                <li className="nav-item ">
                    <button className='btn btn-sm btn-outline-danger'>
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </button>&nbsp;
                </li>

                {/* <li className="nav-item">
                <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                </li> */}


                <div class="dropdown">

                    <button type="button" class="btn btn-lg btn-outline-success dropdown-toggle" data-toggle="dropdown">
                        More Options
                    </button>&nbsp;
                    <div class="dropdown-menu">
                        {/* <a class="dropdown-item" href="/user/all">AllUsers</a> */}
                        {/* <a class="dropdown-item" href="/dashboard">Dashboard</a> */}
                        {/* <a class="dropdown-item" href="/user/add">Register</a> */}
                        {/* <a class="dropdown-item" href={`/user/booking/${JSON.parse(myUser).userId}`}>your History</a> */}

                        <a class="dropdown-item" href={`/user/get/${JSON.parse(myUser).userId}`}>Your profile</a>

                    </div>
                </div>
            </ul>
        </nav>
    )
}



export default NavBarDashboard;