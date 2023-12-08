import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBarRHome from "../../navbars/NavBarHome";
import { forgetPassword } from "../../store/actions/AuthenticationAction";
import '../../css/forgetPass.css';


function ForgetPassword() {
    //const loggedInUser = useSelector(state => state.authenticationReducer.loggedInUser)
    const fgPassword = useSelector(state => state.authenticationReducer.fgPassword)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formErrors, setFormErrors] = useState({});

    const [uEmail, setUEmail] = useState("");
    const [uPhone, setUPhone] = useState("");
    const [uNewPassword, setUNewPassword] = useState("");

    const handleSubmit = async (e) => {

        let errors = {};

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

        if (!uNewPassword) {
            errors['passwordError'] = "password cannot be empty";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            console.log("data is valid");

            const payload = {
                email: uEmail,
                phone: uPhone,
                newPassword: uNewPassword


            }
            dispatch(forgetPassword(payload));
            alert("password changed succesfully");

        }
    }



    return (
        <div className="container-forget">
            <NavBarRHome />
            {

                fgPassword !== null ?
                     navigate('/login')
                    :




                    <div>


                        <div>
                            <h2 className="h2-forget">Forget Password</h2><br></br>

                        </div>


                        <div className="form-group1">

                        <div className="form-group">
                            <label htmlFor='email'>Email:
                                <input type="email" className="form-control" placeholder="Enter your Email" name="uEmail" value={uEmail} onChange={e => setUEmail(e.target.value)} />
                            </label>
                            {
                                formErrors.emailError &&
                                <div style={{ color: 'red' }}>{formErrors.emailError}</div>
                            }
                        </div>


                        <div className="form-group">
                            <label htmlFor='phone'>Phone:
                                <input type='phone' className="form-control" placeholder="Enter Phone number" id="uPhone" value={uPhone} onChange={e => setUPhone(e.target.value)} />
                            </label>
                            {
                                formErrors.phoneError &&
                                <div style={{ color: 'red' }}>{formErrors.phoneError}</div>
                            }
                        </div>


                        <div className="form-group">
                            <label htmlFor='phone'> Password:
                                <input type="password" className="form-control" placeholder="Enter Password" name="uNewPassword" value={uNewPassword} onChange={e => setUNewPassword(e.target.value)} />
                            </label>
                            {
                                formErrors.passwordError &&
                                <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                            }
                        </div>
                        </div>


                        <div>

                            <button onClick={handleSubmit} class="btn btn-outline-primary">Change Password</button>
                        </div>
                    </div>


            }

        </div >

    )
}
export default ForgetPassword;