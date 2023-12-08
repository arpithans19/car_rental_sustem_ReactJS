import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getUserDetails } from "../../store/actions/UserAction";
import image2 from '../../images/image2.jpg';
import '../../css/User.css';
import NavBarUpdateDelete from "../../navbars/NavBarUpdateDelete";



function FetchUser() {

    const user = useSelector(state => state.userReducer.user)
    const { id } = useParams();
    const dispatch = useDispatch();   
    

    const fetchUserById = () => {
        dispatch(getUserDetails(id));
    }
    useEffect(fetchUserById, [id]);

   
    return (
        <div className='container-fetchById'>
            <NavBarUpdateDelete />

            {
                user !== null &&
                <div className="row">
                    <div className="col">
                        <img src={image2} alt="card image" />
                    </div>
                    <div className="col">
                        <h3>Your Details</h3>
                        <p>User ID:<b>{user.userId}</b></p>
                        <p>Name:<b>{user.name}</b></p>
                        <p>Address:<b>{user.address}</b></p>
                        <p>phone:<b>{user.phone}</b></p>
                        <p>Email:<b>{user.email}</b></p>
                        {/* <p>password:{user.password}</p> */}
                        <Link to={`/user/update/${user.userId}`} className="btn btn-secondary">Update</Link> &nbsp;&nbsp;
                        

                        
                        
                    </div>

                </div>
            }
            
            <div>
                <Link to="/dashboard" className="btn btn-secondary">Back</Link>

            </div>
        </div>
    )

}
export default FetchUser;