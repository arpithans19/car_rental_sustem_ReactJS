import axios from 'axios';
import { BASE_URL } from '../../store/actions/ActionConstants';

let Booking = {
    bookingId:1,
    bookingDate:"2022-07-07",
    endTime:"18:06",
    startTime:"18:05",
    carId:1,
    userId:1

}

test("Testing Booking fetch by id function.", async () => {
    axios.get(BASE_URL+"/booking/find/" + Booking.bookingId).then((resp) =>{
        let carRentalSystem=result.data;
        expect(Booking.bookingId).toBe(carRentalSystem.bookingId);
    }
    );
});
test("Testing Booking fetch by id function.", async () => {
    axios.get(BASE_URL+"/booking/all/" ).then((resp) =>{
        let carRentalSystem=result.data;
        expect(Booking).toBe(carRentalSystem);
    }
    );
});