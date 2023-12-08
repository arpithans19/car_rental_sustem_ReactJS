const initialState = {
    cars: [],
    car:null,
    car1:null

}
export default function carReducer(state = initialState, action) {

    if (action.type === 'CAR/FETCHALL') {
        console.log(action.payload);
        return ({
            ...state,
            cars: action.payload
        })
    }
    if (action.type == 'CAR/FETCHBYID') {
        console.log(action.payload);
        return ({
            ...state,
            car: action.payload
        })
    }
    else {
        return state;
    }
}