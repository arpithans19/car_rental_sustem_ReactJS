
import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteBookingById } from '../../store/actions/BookingAction';
import NavBarUpdateDelete from '../../navbars/NavBarUpdateDelete';
import CarNavBar from '../../navbars/CarNavBar';



function DeleteBookingById() {

    const [bookingId, setBookingId] = useState("");
    const booking = useSelector(state => state.bookingReducer.booking);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(getDeleteBookingById(bookingId));
    }

    return (
        <div className='contrainer-fluid'>
            <CarNavBar/>
             <label htmlFor="bookingId"><b className="h">bookingID</b>
                    <input type="text" className="form-control" name="bookingId" value={bookingId} onChange={e => setBookingId(e.target.value)} />
                </label>
                <button onClick={handleSubmit}> Submit </button>
            {
                booking !== null &&
                    <div>
                        <h2>Booking Details</h2>
                        <p>BookingId : {booking.bookingId}</p>
                        <p>BookingDate : {booking.bookingDate}</p>
                        <p>StartTime : {booking.startTime}</p>
                        <p>EndTime : {booking.endTime}</p>
                        <p>BookingAmount: {booking.bookingAmount}</p>
                    </div>
            }
            <div>
                <Link to="/booking/all" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}

export default DeleteBookingById;
