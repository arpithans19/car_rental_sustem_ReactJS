import axios from 'axios';
import { BASE_URL } from '../../store/actions/ActionConstants';
import UserService from '../../Service/UserService';

let User = {
    userId:1,
    name:"Arpitha N",
    address:"Bangalore",
    phone:7892553169,
    email:"arpitha123@gmail.com"    
}
test("Testing all user funciton.", async () => {
    axios.post(BASE_URL+"/user/login",User).then((resp) =>{
        let carRentalSystem=result.data;
        expect(User).toBe(carRentalSystem);
    }
    );
});
test("Testing all user funciton.", async () => {
    axios.post(BASE_URL+"/user/forgetPassword",User).then((resp) =>{
        let carRentalSystem=result.data;
        expect(User).toBe(carRentalSystem);
    }
    );
});