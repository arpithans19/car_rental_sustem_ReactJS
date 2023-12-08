import axios from 'axios';
import { BASE_URL } from '../../store/actions/ActionConstants';


let Car = {
    carId: 1,
    carNumber: "Ka-07-ec-1167",
    carModel: "Hyundai-i20",
    seatingCapacity: 5,
    rentalPrice: 600,
    fuelType: "petrol"
}
import axios from 'axios';
import { BASE_URL } from '../../store/actions/ActionConstants';


let Car = {
    carId: 1,
    carNumber: "Ka-07-ec-1167",
    carModel: "Hyundai-i20",
    seatingCapacity: 5,
    rentalPrice: 600,
    fuelType: "petrol"
}
test("Testing Car fetch by id function.", async () => {
    axios.get(BASE_URL+"/car/get/" + Car.carId).then((resp) =>{
        let carRentalSystem=result.data;
        expect(Car.carId).toBe(carRentalSystem.carId);
    }
    );
});
test("Testing all Car  function.", async () => {
    axios.get(BASE_URL+"/car/all/" ).then((resp) =>{
        let carRentalSystem=result.data;
        expect(Car).toBe(carRentalSystem);
    }
    );
});
test("Testing Car fetch by id function.", async () => {
    axios.get(BASE_URL+"/car/get/" + Car.carId).then((resp) =>{
        let carRentalSystem=result.data;
        expect(Car.carId).toBe(carRentalSystem.carId);
    }
    );
});
test("Testing all Car  function.", async () => {
    axios.get(BASE_URL+"/car/all/" ).then((resp) =>{
        let carRentalSystem=result.data;
        expect(Car).toBe(carRentalSystem);
    }
    );
});