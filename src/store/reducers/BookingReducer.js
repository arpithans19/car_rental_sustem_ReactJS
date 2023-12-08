import { BOOKING_FETCH_BYID,BOOKING_FETCH_ALL} from "../actions/ActionConstants";
const initialState = {
    bookings: [],
    booking: null,
    newBooking: null,
    undoBooking: null
}

export default function bookingReducer(state = initialState, action) {

    if (action.type === BOOKING_FETCH_ALL) {
        console.log(action.payload);
        return ({
            ...state,
            bookings: action.payload
        })
    }
    if (action.type === BOOKING_FETCH_BYID) {
        console.log(action.payload);
        return ({
            ...state,
            booking: action.payload
        })
    }
    if (action.type === 'BOOKING/SAVE') {
        console.log(action.payload);
        return ({
            ...state,
            newBooking: action.payload
        })
    }
    if (action.type === 'BOOKING/DELETEBYID') {
        console.log(action.payload);
        return ({
            ...state,
            undoBooking: action.payload
        })
    }
    else {
        return state;
    }

}