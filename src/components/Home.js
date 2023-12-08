import NavBarRHome from "../navbars/NavBarHome";
import '../css/Home.css';



function Home() {
    return (

        <div className="container-home">
            <NavBarRHome />
            
            <header>
                <h1 className="h1">
                    Welcome to Car Rental System</h1>
            </header>


            <div className="home2">
                <h5 className="h5-info">Hassel-free ,affordable commute Rental cars </h5><br></br>
            </div>
            <div className="home3">
            
                {/* <h6 classname="h6-info">
                    Car rental system is a smart mobility service with<br></br>
                    an all-electric fleet of cars that can be<br></br>
                    picked up anywhere & dropped off in any safe parking area
                </h6> */}
            </div>
            


        </div>


    )

}
export default Home;