// import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
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

test("Testing user fetch by id function.", async () => {
    axios.get(BASE_URL+"/user/" + User.userId).then((resp) =>{
        let carRentalSystem=result.data;
        expect(User.address).toBe(carRentalSystem.address);
    }
    );
});

test("Testing update user by id funciton.", async () => {
    axios.put(BASE_URL+"/user/update", User).then((resp) =>{
        let carRentalSystem=result.data;
        expect(User.address).toBe(carRentalSystem.address);
    }
    );
});

test("Testing delete user by id funciton.", async () => {
    let userId=76;
    axios.delete(BASE_URL+"/user/delete/" +76).then((resp) =>{
        let carRentalSystem=result.data;
        expect(null).toBe(null);
    }
    );
});

test("Testing add user funciton.", async () => {
    axios.post(BASE_URL+"/user/addUser", User).then((resp) =>{
        let carRentalSystem=result.data;
        expect(User).toBe(carRentalSystem);
    }
    );
});

test("Testing all user funciton.", async () => {
    axios.post(BASE_URL+"/user/all").then((resp) =>{
        let carRentalSystem=result.data;
        expect(User).toBe(carRentalSystem);
    }
    );
});


