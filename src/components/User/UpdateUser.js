import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBarUpdateDelete from '../../navbars/NavBarUpdateDelete';
import { updateUser } from '../../store/actions/UserAction';

import '../../css/updateUser.css';



function UpdateUser() {

    const user = useSelector(state => state.userReducer.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [uId, setUId] = useState(user.userId);
    const [uName, setUName] = useState(user.name);
    const [uAddress, setUAddress] = useState(user.address);
    const [uPhone, setUPhone] = useState(user.phone);
    const [uEmail, setUEmail] = useState(user.email);
    const [uPassword, setUPassword] = useState(user.password);


    const handleSubmit = () => {
        const payload = {
            userId: uId,
            name: uName,
            address: uAddress,
            phone: uPhone,
            email: uEmail,
            password: uPassword
        }
        dispatch(updateUser(payload));
        alert("User Upadted with: "+ user.userId);
        navigate(-1);
    }
    return (
        <div>
            <div className="container-updateUser">
                <NavBarUpdateDelete/>
                <div>
                    <h2 className='h2-updateUser'>Update your Details</h2>
                </div><br></br>


                <div className="form-group">
                    <label htmlFor='uId'>UserId:
                    <input type="text" className="form-control" name="uId" value={uId} disabled />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='uName'>UserName:
                    <input type="text" className="form-control" name="uName" value={uName} onChange={e => setUName(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='uAddress'>UserAddress
                    <input type="text" className="form-control" name="uAddress" value={uAddress} onChange={e => setUAddress(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='uPhone'>UserPhone:
                    <input type="text" className="form-control" name="uPhone" value={uPhone} disabled />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor='uEmail'>UserEmail:
                    <input type="email" className="form-control" name="uEmail" value={uEmail} disabled />
                    </label>
                </div>

                {/* <div className="form-group">
                    <label htmlFor='uPassword'>UserPassword</label>
                    <input type="password" className="form-control" name="uPassword" value={uPassword} disabled />
                </div> */}

                <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Update</button>
                </div>
                <div style={{ float: "right" }}>
                    {/* <Link to="/" className="btn btn-secondary">BackToHome</Link> */}
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
                </div>
            </div>
        </div>
    )

}
export default UpdateUser;





