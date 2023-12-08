import axios from "axios";

import { BASE_URL } from "../store/actions/ActionConstants";

export function fetchAllUsersService(){
    return axios.get(BASE_URL+"/user/all");
}

export function fetchUserByIdService(id){
    return axios.get(BASE_URL+"/user/" + id);
}

export function addUserService(user){
    return axios.post(BASE_URL+"/user/addUser", user); 
}

export function updateUserService(user){
    return axios.put(BASE_URL+"/user/update", user);    
}

export function deleteUserService(id){
    return axios.delete(BASE_URL+"/user/delete/" +id);   
}
