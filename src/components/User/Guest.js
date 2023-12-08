import { Link } from "react-router-dom";
import GuestNavBar from "../../navbars/GuestNavBar";
import '../../css/guest.css';

function Guest() {

    return (
        <div >
            <GuestNavBar />

            <div className="para" style={{ color: "green", fontStyle: "italic", backgroundColor: "lightcyan" }}>
                <h3 style={{ color: "blue" }}><b>Car Rental System</b></h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <p> It is an Online system through which users can view available cars,register,view profile and book a car</p>&nbsp;
                <p>Nowadays,most of the people prefer car for the trip.</p>
                <p>Because car journey to any trip with our family or friends give happiness and makesa us to feel comfortable</p>
                <p> Many advantages in CAr rental system rather than using own cars for thier journey</p>
                <p>It save a lot time ,money and labour.</p>
                <p> it provieds custom feature development and support with software</p>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;



                    <div>
                    <p>Do you want to book a car ???</p>
                    <p>Please Register here</p>
                    <Link to='/user/add'>Register</Link>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;


                <div style={{ float: "right" }}>
                    <p>For more information </p>
                    <p>Contact</p>
                    <p>e-mail: carrentalsystem@gmail.com</p>
                    <p> phone: 0801234567</p>
                    <p>address: Bangalore</p>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>


        </div>
    )

}
export default Guest;