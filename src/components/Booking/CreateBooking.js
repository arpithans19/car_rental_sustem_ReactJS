
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CarNavBar from '../../navbars/CarNavBar';
import NavBarUpdateDelete from '../../navbars/NavBarUpdateDelete';
import { saveBooking } from '../../store/actions/BookingAction';


function CreateBooking() {

    const newBooking = useSelector(state => state.bookingReducer.newBooking)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [bCarId, setBCarId] = useState("");
    const [bUserId, setBUserId] = useState("");
    const [bDate, setBDate] = useState("");
    const [bStartTime, setBStartTime] = useState("");
    const [bEndTime, setBEndTime] = useState("");
    

    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = () => {

        let errors = {};

        if (!bCarId) {
            errors['carIdError'] = "CarId is Required"
        }
        if (!bUserId) {
            errors['userIdError'] = "userId is Required"
        }
        if (!bDate) {
            errors['bookingDateError'] = "date is Required"
        }
        if (!bStartTime) {
            errors['startTimeError'] = "StartTime is Required"
        } else if (bStartTime <= 0) {
            errors['startTimeError'] = "Time is in correct format"
        }
        if (!bEndTime) {
            errors['endTimeError'] = "EndTime Id is Required"
        } else if (bEndTime <= 0) {
            errors['endTimeError'] = "Time is in correct format"
        }
        

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;


        if (noErrors) {
            console.log("valid form data")
            const paylaod = {
                carId: bCarId,
                userId: bUserId,
                bookingDate: bDate,
                startTime: bStartTime,
                endTime: bEndTime,
                
            }
            dispatch(saveBooking(paylaod));

        }
    }
    
    const disablePastDate = () => {
        const yesterday = new Date();
        const dd = String(yesterday.getDate()).padStart(2, "0");
        const mm = String(yesterday.getMonth() + 1).padStart(2, "0");
        const yyyy = yesterday.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className="container-fluid">
           <CarNavBar/>
            <h2 style={{ backgroundColor: "Orange" }}> Booking Form</h2>
            {
                newBooking != null && 
                alert("booking saved with id:" + newBooking.bookingId)
            }
            <div className="form-group">
                <label htmlFor="bCarId"><b className="h">CarID</b>
                    <input type="text" className="form-control" name="bCarId" value={bCarId} onChange={e => setBCarId(e.target.value)} />
                </label>
                {
                    formErrors.carIdError &&
                    <div style={{ color: 'red' }}>{formErrors.carIdError}</div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="bUserId"> <b className="h">UserID</b>
                    <input type="text" className="form-control" name="bUserId" value={bUserId} onChange={e => setBUserId(e.target.value)} />
                </label>
                {
                    formErrors.userIdError &&
                    <div style={{ color: 'red' }}>{formErrors.userIdError}</div>
                }
            </div>


            <div className="form-group">
                <label htmlFor="bDate"><b className="h">BookingDate</b>
                    <input type="date" min={disablePastDate()} className="form-control" name="bDate" value={bDate} onChange={e => setBDate(e.target.value)} />
                </label>
                {
                    formErrors.bookingDateError &&
                    <div style={{ color: 'red' }}>{formErrors.bookingDateError}</div>
                }

            </div>

            <div className="form-group">
                <label htmlFor="bStartTime"><b className="h">StartTime</b>
                    <input type="time" className="form-control" name="bStartTime" value={bStartTime} onChange={e => setBStartTime(e.target.value)} />
                </label>
                {
                    formErrors.startTimeError &&
                    <div style={{ color: 'red' }}>{formErrors.startTimeError}</div>
                }
            </div>

            <div className="form-group">
                <label htmlFor="bEndTime"><b className="h">EndTime</b>
                    <input type="time" min={disablePastDate()} className="form-control" name="bEndTime" value={bEndTime} onChange={e => setBEndTime(e.target.value)} />
                </label>
                {
                    formErrors.endTimeError &&
                    <div style={{ color: 'red' }}>{formErrors.endTimeError}</div>
                }
            </div>

                    
            <div>
                <button onClick={handleSubmit} className="btn btn-lg btn-primary">Save</button>&nbsp;
            </div>

            <div style={{ float: "left" }}>
                <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
            </div>
        </div>
    )

}

export default CreateBooking;