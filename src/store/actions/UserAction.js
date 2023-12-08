import axios from 'axios';
import { addUserService, deleteUserService, fetchUserByIdService, fetchAllUsersService, updateUserService } from '../../Service/UserService';
import { USER_ADD, USER_DELETE, USER_FETCH_BYID, USER_FETCH_ALL, USER_UPDATE } from './ActionConstants';


export function getAllUser() {
    
    return (dispatch) => {
        return fetchAllUsersService().then(
            resp => {
               
                dispatch(
                    getAllUserSuccess(resp.data)
                    );


            }
        )
    }
}

export function getAllUserSuccess(data) {
    return {
        type: USER_FETCH_ALL,
        payload: data
    }
}


export function getUserDetails(id) {
    return (dispatch) => {
        return fetchUserByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getUserByIdSuccess(resp.data))

        })
    }
}
export function getUserByIdSuccess(data) {
    return {
        type: USER_FETCH_BYID,
        payload: data
    }
}


export function updateUser(user) {
    return (dispatch) => {
        return updateUserService(user).then(resp => {
            dispatch(updateUserSuccess(resp.data));
        }
        )
    }
}
export function updateUserSuccess(data) {
    return {
        type:USER_UPDATE,
        payload: data
    }
}


export function addUser(user) {
    return (dispatch) => {
        return addUserService(user).then(resp => {
            dispatch(addUserSuccess(resp.data));
             alert("User added succesfully!!!");
        })
        
    }
}
export function addUserSuccess(data) {
    return {
        type: USER_ADD,
        payload: data
    }
}


export function deleteUser(id){
    return(dispatch)=>{
        return deleteUserService(id).then(resp =>{
            console.log(resp.status);
            dispatch(deleteUserSuccess(resp.data));
            
        })
        
    }
}
export function deleteUserSuccess(data){
    return{
        type:USER_DELETE,        
        payload:data
    }
}

export function getUserBookings(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8084/user/booking/" + id).then(resp => {
            console.log(resp.status);
            dispatch(getUserBookingSuccess(resp.data))

        })
    }
}
export function getUserBookingSuccess(data) {
    return {
        type: "USER/FETCHBOOKING",
        payload: data
    }
}
