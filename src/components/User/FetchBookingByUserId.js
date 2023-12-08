import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserBookings, getUserDetails } from "../../store/actions/UserAction";
import image2 from '../../images/image2.jpg';
import '../../css/history.css';

import NavBarUpdateDelete from "../../navbars/NavBarUpdateDelete";



function FetchBookingByUserId() {

    const bookingUser = useSelector(state => state.userReducer.bookingUser)
    

    const { id } = useParams();
    const dispatch = useDispatch();



    const fetchUserById = () => {
        dispatch(getUserBookings(id));


    }
    useEffect(fetchUserById, [id]);


    return (
        <div className='container-booking'>
            <NavBarUpdateDelete />

            {
                bookingUser !== null &&


                
                <div className="row">
                    <div className="col">
                        <img src={image2} alt="card image" />
                    </div>
                    <div className="col">
                   
                        <h3>user Details</h3>
                        <p>userID:{bookingUser.user.userId}</p>
                        {/* <p>Name:{user.name}</p>
                        <p>Address:{user.address}</p>
                        <p>phone:{user.phone}</p>
                        <p>email:{user.email}</p>                       
                        <p>password:{user.password}</p> */}

                        <p>user booking details</p>
                        <p>BookingId:{bookingUser.bookingId}</p>
                        {/* <p>Booking date:{user.bookingDate}</p>
                        <p>startTime:{user.startTime}</p>
                        <p>Endtime:{user.endTime}</p>
                        <p>BookingAMnt:{user.bookingAmount}</p> */}

                        <p>cardetails</p>
                        <p>carId:{bookingUser.car.carId}</p>
                        {/* <p>car number:{user.carNumber}</p>
                        <p>carModel:{user.carModel}</p>
                        <p>seatingCapacity:{user.seatingCapacity}</p>
                        <p>rentalPrice:{user.rentalPrice}</p>
                        <p>fuelType:{user.fuelType}</p> */}                      
                        
                        
                    </div>

                </div>
            }
            <h3>No History found with this User</h3>
            
            <div>
                <Link to="/user/all" className="btn btn-secondary">Back to List</Link>

            </div>
        </div>
    )

}
export default FetchBookingByUserId;