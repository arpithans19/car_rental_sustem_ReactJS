
import { deleteBookingByIdService, fetchAllBookingsService, fetchBookingByIdService, saveBookingService } from '../../Service/BookingService';
import { BOOKING_SAVE, BOOKING_DELETEBYID, BOOKING_FETCH_BYID, BOOKING_FETCH_ALL } from './ActionConstants';

//my function is dispatching to middleware
//middlewear(getALluser ) is sending request to to API
//rc vng response from ApI
//and dispatching response to the store
export function getAllBookings() {

    return (dispatch) => {
        return fetchAllBookingsService().then(
            resp => {
                // response(action)  dispatching to store
                dispatch(
                    getAllBookingsSuccess(resp.data)
                );

            }
        )
    }
}
// getAllUserSuccess(data is action creator
//instead of dispatching above response,we r creating one action
//and return response to store /to reducer
//now here it will become a response we r calling action to dispatch
export function getAllBookingsSuccess(data) {
    return {
        type: BOOKING_FETCH_ALL,
        payload: data
    }
}


export function getBookingDetails(id) {
    return (dispatch) => {
        return fetchBookingByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getBookingByIdSuccess(resp.data))

        })
    }
}
export function getBookingByIdSuccess(data) {
    return {
        type: BOOKING_FETCH_BYID,
        payload: data
    }
}

export function saveBooking(newBooking) {
    return (dispatch) => {
        return saveBookingService(newBooking).then(resp => {
            dispatch(saveBookingSuccess(resp.data));
        })

    }
}
export function saveBookingSuccess(data) {
    return {
        type: BOOKING_SAVE,
        payload: data
    }
}

export function getDeleteBookingById(id) {
    return (dispatch) => {
        return deleteBookingByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getDeleteBookingByIdSuccess(resp.data));

        })

    }
}
export function getDeleteBookingByIdSuccess(data) {
    return {
        type: BOOKING_DELETEBYID,
        payload: data
    }
}
