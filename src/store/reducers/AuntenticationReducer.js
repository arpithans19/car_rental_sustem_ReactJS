const initialState={
    loggedInUser:null,
    isLoggedIn:false,
    fgPassword:null,
    fgLogged:false

}
export default function authenticationReducer(state = initialState, action) {

    if (action.type === 'LOGIN/SUCCESS') {
        console.log(action.payload);
        return ({
            ...state,
            loggedInUser: action.payload,
            isLoggedIn : true
        })
    }
    
    if (action.type === 'FORGETPASS') {
        console.log(action.payload);
        return ({
            ...state,
            fgPassword: action.payload,
            fgLogged:true

        })
    }
    else {
        return state;
    }
}
