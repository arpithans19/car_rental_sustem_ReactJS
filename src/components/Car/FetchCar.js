import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getCarDetails} from '../../store/actions/CarAction';
import '../../css/carbyId.css';

import car3 from '../../images/car3.webp';
import CarNavBar from '../../navbars/CarNavBar';


function FetchCar() {

    
    const car = useSelector(state=>state.carReducer.car)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchCarById = () => {
       dispatch(getCarDetails(id));
    }

    useEffect(fetchCarById, [id]);

    return (
        <div className='carbyid'>
            <CarNavBar/>
            {
                car !== null &&
                <div className="row">
                    <div className="col">
                        <img src={car3} alt="card image" />
                    </div>
                    <div className="col">
                        <h2>Car Details</h2>
                        <p>CarId : {car.carId}</p>
                        <p>CarNumber : {car.carNumber}</p>
                        <p>Model : {car.carModel}</p>
                        <p>FuelType : {car.fuelType}</p>
                        <p>SeatingCapacity : {car.seatingCapacity}</p>
                        <p>RentalPrice : {car.rentalPrice}</p>

                        {/* <Link to={`/booking/add/${booking.bookingId}`} className="btn btn-secondary">Update</Link> &nbsp;&nbsp; */}

                        <div>
                <Link to="/booking/dashboard" className="btn btn-success">BookNow</Link>
            </div>

            <br></br>
            <div>
                <Link to="/car/all" className="btn btn-primary">Back</Link>
            </div>

                    </div>
                    

                </div>
            }
            
           
            
        </div>
    )
}

export default FetchCar;