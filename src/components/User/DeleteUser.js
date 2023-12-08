import { useEffect } from "react";
import NavBarUpdateDelete from "../../navbars/NavBarUpdateDelete";
import { deleteUser } from "../../store/actions/UserAction";
import userdelete from '../../images/userdelete.jpg';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

    function DeleteUser() {

        const user = useSelector(state => state.userReducer.user);
        const { id } = useParams();
        const dispatch = useDispatch();
        const navigate = useNavigate();
        
        const deleteHandler = () => {
            dispatch(deleteUser(id));
        }
        useEffect(deleteHandler, []);

        dispatch(deleteUser(user.id));   


        return (

            <div className='container-fluid'>
                {
                     user !== null && 
                     alert("Booking Cancelled")
                }
                

                
                    

                           


            </div >

        )

    }

export default DeleteUser;