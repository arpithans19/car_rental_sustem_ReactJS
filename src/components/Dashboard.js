import NavBarDashboard from "../navbars/NavBarDashboard";
import { Link } from 'react-router-dom';
import '../css/dashboard.css';




function Dashboard() {

  const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div className="dashboard">
          <NavBarDashboard/>
            {myUser !== null ?
                <div>
                    <h3 style={{fontStyle:"italic",color:"blue"}}>Welcome {JSON.parse(myUser).name}</h3>
                    {/* <div>
                    <button className="btn btn-outline-success"><Link to="car/all">Select car for your ride</Link></button>
                    </div>        */}
                    <button className='btn btn-sm btn-outline-warning'>
                        <Link className="car" to="/car/all"><h4>Select car for your ride</h4></Link>
                    </button>              


                </div>
                
                : <h2>Please Login</h2>
            }

        </div>
    )

}
export default Dashboard;