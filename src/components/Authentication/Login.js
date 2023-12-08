import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../store/actions/AuthenticationAction';
import { Link, useNavigate } from 'react-router-dom';
import NavBarLogin from '../../navbars/NavBarLogin';
import '../../css/login.css';

function Login() {
    const loggedInUser = useSelector(state => state.authenticationReducer.loggedInUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const doSignIn = () => {

        let errors = {};
        if (!email) {
            errors['emailError'] = "Email cannot be empty";
        }
        else if (typeof email !== "undefined") {
            var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})*(\.\w{2,3})+$/);
            if (!pattern.test(email)) {
                errors["emailError"] = "Please enter valid email address";

            }
        }
        if (!password) {
            errors['passwordError'] = "Password cannot be empty";
        }
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            console.log("data is valid");

            const payload = {
                email: email,
                password: password
            }
            dispatch(doLogin(payload));
        }

    }

    return (
        <div className="container-login">
            <NavBarLogin />
            {
                loggedInUser !== null ?
                    navigate('/dashboard')
                    :

                    <div>
                        <div>
                            <h2 className='h2-loginpage'>Login Page</h2><br></br>


                        </div>




                        <div className="form-group">
                            <label htmlFor='email'>Email:
                                <input type="email" className="form-control" placeholder="Enter your Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </label>
                            {
                                formErrors.emailError &&
                                <div style={{ color: 'red' }}>{formErrors.emailError}</div>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'>Password:
                                <input type="password" className="form-control" name="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </label>
                            {
                                formErrors.passwordError &&
                                <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                            }
                        </div>



                        <div>
                            <button onClick={doSignIn} class="btn btn-outline-success">Login</button>&nbsp;

                            <Link to='/forgetPassword' className="btn btn-outline-warning">Forget Password</Link>


                        </div>&nbsp;&nbsp;
                        <div>
                            <p style={{color:"blue"}}>If you are not a registered User, Please <b>Register</b></p>
                        </div>






                    </div>

            }
            {/* <Footer /> */}
        </div>
    )
}

export default Login;