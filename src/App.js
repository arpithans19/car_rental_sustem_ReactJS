import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NavBarDashboard from './navbars/NavBarDashboard';
import FetchAllUsers from './components/User/FetchAllUsers';
import FetchUser from './components/User/FetchUser';
import UpdateUser from './components/User/UpdateUser';
import AddUser from './components/User/AddUser';
import Login from './components/Authentication/Login';
import DeleteUser from './components/User/DeleteUser';
import ForgetPassword from './components/Authentication/ForgetPassword';
import FetchBookingByUserId from './components/User/FetchBookingByUserId';
import FetchAllCars from './components/Car/FetchAllCars';
import FetchAllBookings from './components/Booking/FetchAllBookings';
import Home from './components/Home';
import Logout from './components/Authentication/Logout';
import FetchCar from './components/Car/FetchCar';
// import AddBooking from './components/Booking/CreateBooking';

import CreateBooking from './components/Booking/CreateBooking';
import FetchBooking from './components/Booking/FetchBooking';
import BookingDetails from './components/Booking/BookingDetails';
import DeleteBookingById from './components/Booking/DeleteBookingById';
import DeleteBooking from './components/Booking/DeleteBooking';
import BookingDashboard from './components/Booking/BookingDashboard';
import Guest from './components/User/Guest';


function App() {
  return (
    <div className="App">
       
      
        
        
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/navbar" element={<NavBarDashboard/>}/>       
            
            <Route path='/user/all' element={<FetchAllUsers/>}/>
            <Route path='/user/get/:id' element={<FetchUser/>}/>
            <Route path='/user/update/:id' element={<UpdateUser/>}/>
            <Route path='/user/add' element={<AddUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/user/delete/:id' element={<DeleteUser/>}/>  
            <Route path='/forgetPassword' element={<ForgetPassword/>}/>
            <Route path='/user/booking/:id' element={<FetchBookingByUserId/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/car/all' element={<FetchAllCars/>}/>
            <Route path='/booking/all' element={<FetchAllBookings/>}/>
            <Route path='/car/get/:id' element={<FetchCar/>}/>
            <Route path='/booking/add' element={<CreateBooking/>}/>
           
            <Route path='/booking/get/:id' element={<FetchBooking/>}/>
            <Route path='/booking/details' element={<BookingDetails/>}/>
            <Route path='/booking/delete/byId' element={<DeleteBookingById/>}/>
            <Route path='/booking/delete' element={<DeleteBooking/>}/>
            <Route path='/booking/dashboard' element={<BookingDashboard/>}/>
            <Route path='/guest' element={<Guest/>}/>

           
          </Routes>

        </Router>
        
     
    </div>
  );
}

export default App;
