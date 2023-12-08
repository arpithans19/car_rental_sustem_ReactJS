import axios from "axios";

export function getAllCars() {
        
    return (dispatch) => {

        return axios.get("http://localhost:8084/car/all").then(
            resp => {
                dispatch(getAllCarSuccess(resp.data));


            }
        )
    }
}
export function getAllCarSuccess(data) {
    return {
        type: "CAR/FETCHALL",
        payload: data
    }
}
export function getCarDetails(id) {
    return (dispatch) => {
        return axios.get("http://localhost:8084/car/get/" + id).then(resp => {
            console.log(resp.status);
            dispatch(getCarByIdSuccess(resp.data))
        })
    }
}
export function getCarByIdSuccess(data) {
    return {
        type: "CAR/FETCHBYID",
        payload: data
    }
}