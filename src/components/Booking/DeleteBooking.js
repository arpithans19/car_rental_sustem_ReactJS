
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getDeleteBookingById} from '../../store/actions/BookingAction';
import NavBarUpdateDelete from '../../navbars/NavBarUpdateDelete';
import CarNavBar from '../../navbars/CarNavBar';

function DeleteBooking() {
    const undoBooking = useSelector(state => state.bookingReducer.undoBooking)

    const { id } = useParams();
    const dispatch = useDispatch();

    const deleteBookingById = () => { 
        dispatch(getDeleteBookingById(id));
     }
    useEffect(() =>
     {  deleteBookingById(); }, [id]);

    return (
    <div>
        <CarNavBar/>
        {
        undoBooking !== null && alert("Booking Cancelled")}
    </div>
    )
}
export default DeleteBooking;