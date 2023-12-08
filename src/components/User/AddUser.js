import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBarRegister from "../../navbars/NavBarRegister";

import { addUser } from "../../store/actions/UserAction";
import '../../css/Register.css';

function AddUser() {

    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});

    const [uId, setUId] = useState();
    const [uName, setUName] = useState("");
    const [uAddress, setUAddress] = useState("");
    const [uPhone, setUPhone] = useState("");
    const [uEmail, setUEmail] = useState("");
    const [uPassword, setUPassword] = useState("");


    const handleSubmit = () => {
        //validation
        let errors = {};
        
        if (!uAddress) {
            errors['addressError'] = "Address cannot be empty";
        }


        if (!uPhone) {
            errors['phoneError'] = "Phone number cannot be empty";
        }
        else if (typeof uPhone !== "undefined") {
            var pattern = new RegExp(/^[0-9]{10}$/);
            if (!pattern.test(uPhone)) {
                errors["phoneError"] ="Please enter only 10 digit valid phone numbers";           
                    
            }
        }
        
        if (!uEmail) {
            errors['emailError'] = "Email cannot be empty";
        }
        else  if(typeof uEmail!=="undefined"){
            var pattern=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/);         
         if (!pattern.test(uEmail)) {
                errors["emailError"] ="Please enter valid email address";           
                    
            }
        }
        
        if (!uPassword) {
            errors['passwordError'] = "password cannot be empty";
        }
        
        if (!uName) {
            errors["nameError"] = "Name cannot be empty";
        }
         else if (typeof uName !== "undefined") {
            var pattern = new RegExp(/^[A-Za-z]+$/);
            if (!pattern.test(uName)) {
                errors["nameError"] =
                    "Please type only alphabets not number or special character";
            }
        }


        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            console.log("data is valid");

            const payload = {
                userId: uId,
                name: uName,
                address: uAddress,
                phone: uPhone,
                email: uEmail,
                password: uPassword

            }
            dispatch(addUser(payload));
            alert("user added succesfully!!!" + user.userId);
            navigate('/login');

        }


    }

    return (

        <div className="container-addUser">
            <NavBarRegister />


            <h2 style={{ fontStyle: "italic", color: "blue" }}>User Registration </h2>
           
            <form className="form">
            

            <div >

                <label htmlFor="uName">
                    <b> UserName:</b>
                    <input type="text" className="form-control" name="uName" placeholder="Enter your Name" value={uName} onChange={e => setUName(e.target.value)} />


                </label>
                {
                    formErrors.nameError &&
                    <div style={{ color: 'red' }}>{formErrors.nameError}</div>
                }
            </div>
            <div>
                <label htmlFor="uAddress">
                    <b>Address:</b>
                    <input type="text" className="form-control" name="uAddress" placeholder="Enter your Address" value={uAddress} onChange={e => setUAddress(e.target.value)} />


                </label>
                {
                    formErrors.addressError &&
                    <div style={{ color: 'red' }}>{formErrors.addressError}</div>
                }

            </div>
            <div >
                <label htmlFor="uPhone">
                    <b>Phone:</b>
                    <input type="text" className="form-control" name="uPhone" placeholder="Enter PhoneNumber" value={uPhone} onChange={e => setUPhone(e.target.value)} />
                </label>
                {
                    formErrors.phoneError &&
                    <div style={{ color: 'red' }}>{formErrors.phoneError}</div>
                }
            </div>
            <div>
                <label>
                    <b>Email:</b>
                    <input type="email" className="form-control" name="uEmail" placeholder="Enter your Email" value={uEmail} onChange={e => setUEmail(e.target.value)} />
                </label>
                {
                    formErrors.emailError &&
                    <div style={{ color: 'red' }}>{formErrors.emailError}</div>
                }
            </div>
            <div>
                <label>
                    <b>Password:</b>
                    <input type="password" className="form-control" placeholder="Enter Password" name="uPassword" value={uPassword} onChange={e => setUPassword(e.target.value)} />
                </label>
                {
                    formErrors.passwordError &&
                    <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                }
            </div>&nbsp;
            </form>


            <div>
                <button onClick={handleSubmit} className="btn btn-secondary">
                    Register</button>&nbsp;
            </div>

            <div style={{ float: "right" }}>

                
                <button type="button" class="btn btn-secondary"><Link to="/">Back</Link></button>
            </div>
            


        </div>


    )
}
export default AddUser;
