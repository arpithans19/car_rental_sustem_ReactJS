import axios from "axios";

export function doLogin(payload) {
    return (dispatch) => {
        return axios.post("http://localhost:8084/user/login", payload).then(
            resp => {
                console.log(resp);
                
                localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data);
            })
    }
}
export function doLoginSuccess(data) {
    return {
        type: 'LOGIN/SUCCESS',
        payload: data
    }
}
export function forgetPassword(payload) {
    return (dispatch) => {
        return axios.put("http://localhost:8084/user/forgetPassword", payload).then(
            resp => {
                console.log(resp);
                localStorage.setItem("myUser", JSON.stringify(resp.data));
                
                dispatch(forgotPasswordSuccess(resp.data));
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data);
                
            })
    }
}
export function forgotPasswordSuccess(data) {
    return {
        type: 'FORGETPASS',
        payload: data
    }
}