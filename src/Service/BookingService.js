
import axios from "axios";

import { BASE_URL } from "../store/actions/ActionConstants";

export function fetchAllBookingsService() {
    return axios.get(BASE_URL + "/booking/all");
}
export function fetchBookingByIdService(id) {
    return axios.get(BASE_URL + "/booking/find/" + id);
}
export function saveBookingService(newBooking) {
    return axios.post(BASE_URL + "/booking/save/", newBooking);
}
export function deleteBookingByIdService(id) {
    return axios.delete(BASE_URL + "/booking/delete/" + id);

}
