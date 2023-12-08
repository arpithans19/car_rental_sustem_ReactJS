import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUser } from '../../store/actions/UserAction';
import image1 from '../../images/image1.png';
import NavBarDashboard from '../../navbars/NavBarDashboard';


function FetchAllUsers() {
    
    // getting value from local state using useSelector
    const user = useSelector(state => state.userReducer.users)

    //component dispacthing action by clicking button in Ui
    // at the time of mounting(componentDidMount)-its for hook ,
    // for redux we r using  useEffect
    const dispatch = useDispatch();

    
    //1st we r setting this value in authentication action
    //then getting value from specified local storage
    //Json.stringify--converting javascript object to JSON object
    const myUser = localStorage.getItem("myUser");


// component dispatching request to a Myfunction(middlewareFunction)
    const myFunction = async () => {

        //getAlluser--request/action its calling to API\
        // it will dispatch to Action
        dispatch(getAllUser())

    };
    useEffect(() => { myFunction() }, []);


    return (

        <div className='container-fetchAll'>
            <NavBarDashboard />
            {
                myUser !== null &&
                <h3>Welcome {JSON.parse(myUser).name}</h3>

            }
            <div class="row">
                {
                    user.map((p, index) =>
                        <div key={index} className="col-sm-3">

                            <Link to={`/user/get/${p.userId}`}>
                                {/* <Link to={`/user/booking/${p.userId}`}> */}

                                <div className="card" style={{ width: "250px", height: "300px" }}>
                                    <img className="card-img-top" src={image1} alt="Card image" />
                                    <div className='card-body'>
                                        <h5 className='car-title'>Name: {p.name}</h5>
                                        <p className='card-text'>ID: {p.userId}</p>
                                        

                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>


    )
}
export default FetchAllUsers;