
import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingDetails } from '../../store/actions/BookingAction';
import NavBarUpdateDelete from '../../navbars/NavBarUpdateDelete';
import CarNavBar from '../../navbars/CarNavBar';

function FetchBooking() {
    const booking = useSelector(state => state.bookingReducer.booking)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchBookingById = () => {
        dispatch(getBookingDetails(id));
    }

    useEffect(fetchBookingById, [id]);

    return (
        <div className='contrainer-fluid'>
           <CarNavBar/>
            {
                booking !== null &&
                    <div>
                        <h2>Booking Details</h2>
                        <p>BookingId : {booking.bookingId}</p>
                        <p>BookingDate : {booking.bookingDate}</p>
                        <p>StartTime : {booking.startTime}</p>
                        <p>EndTime : {booking.endTime}</p>
                        
                    </div>
            }
            <div>
                <Link to="/booking/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}

export default FetchBooking;
