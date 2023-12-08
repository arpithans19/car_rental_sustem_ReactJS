import { USER_ADD, USER_DELETE, USER_FETCH_ALL, USER_FETCH_BYID, USER_UPDATE } from "../actions/ActionConstants";

const initialState = {
    users: [],
    user: null,
    newUser: null,
    updateUser: null,
    deleteUser: null,
    bookingUser:null
}
export default function userReducer(state = initialState, action) {

    // we are updating state here
    if (action.type === USER_FETCH_ALL) {
        console.log(action.payload);
        return ({
            ...state,
            users: action.payload
        })
    }

    if (action.type === USER_FETCH_BYID) {
        console.log(action.payload);
        return ({
            ...state,
            user: action.payload
        })
    }

    if (action.type === 'USER/FETCHBOOKING') {
        console.log(action.payload);
        return ({
            ...state,
            bookingUser: action.payload
        })
    }

    if (action.type === USER_UPDATE) {
        console.log(action.payload);
        return ({
            ...state,
            updateUser: action.payload
        })
    }

    if (action.type === USER_ADD) {
        console.log(action.payload);
        return ({
            ...state,
            addUser: action.payload
        })
    }

    if (action.type === USER_DELETE) {
        console.log(action.payload);
        return ({
            ...state,
            deleteUser: action.payload
        })
        
    }

    else {
        return state;
    }
}

