
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../store/actions/BookingAction';
import NavBarUpdateDelete from '../../navbars/NavBarUpdateDelete';
import CarNavBar from '../../navbars/CarNavBar';

function FetchAllBookings() {

    const bookings = useSelector(state => state.bookingReducer.bookings)
    const dispatch = useDispatch();

    const myFunction = () => {
        dispatch(getAllBookings())
    };

    useEffect(() => {
        myFunction();
    }, []);

    return (
    <div>
        <CarNavBar/>
        <h2> All Bookings</h2>
        {
            bookings.length > 0 ?
                <table border="1">
                    <tr>
                        <th>bookingId</th>
                        <th>bookingDate</th>
                        <th>startTime</th>
                        <th>endTime</th>
                      
                        <th>View</th>
                        <th>Delete</th>

                        <th>userId</th>
                        <th>name</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>password</th>

                        <th>carId</th>
                        <th>carNumber</th>
                        <th>carModel</th>
                        <th>seatingCapacity</th>
                        <th>rentalPrice</th>
                        <th>fuelType</th>

                    </tr>
                    {
                        bookings.map((b, index) =>
                            <tr key={index}>
                                <td>{b.bookingId} </td>
                                <td>{b.bookingDate} </td>
                                <td>{b.startTime}</td>
                                <td>{b.endTime}</td>
                                
                                <td><Link to={`/booking/find/${b.bookingId}`}>View</Link></td>
                                <td><Link to={`/booking/delete/${b.bookingId}`}>Delete</Link></td>

                                <td>{b.user.userId}</td>
                                <td>{b.user.name}</td>
                                <td>{b.user.address}</td>
                                <td>{b.user.phone}</td>
                                <td>{b.user.email}</td>
                                <td>{b.user.password}</td>

                                <td>{b.car.carId}</td>
                                <td>{b.car.carNumber}</td>
                                <td>{b.car.carModel}</td>
                                <td>{b.car.seatingCapacity}</td>
                                <td>{b.car.rentalPrice}</td>
                                <td>{b.car.fuelType}</td>
                            </tr>
                        )
                    }
                </table>
                : <h3>No Bookings Available</h3>
        }
        <div>
            <Link to="/booking/dashboard">Back</Link>
        </div>
    </div>
    )
}

export default FetchAllBookings;