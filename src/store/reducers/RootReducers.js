import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import authenticationReducer from '../reducers/AuntenticationReducer';
import carReducer from "./CarReducer";
import bookingReducer from "./BookingReducer";

const rootReducers = combineReducers({
    
    userReducer,
    authenticationReducer,
    bookingReducer,
    carReducer



})

export default rootReducers;