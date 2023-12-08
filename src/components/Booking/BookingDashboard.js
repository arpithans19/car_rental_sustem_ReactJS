import CarNavBar from "../../navbars/CarNavBar";


function BookingDashboard() {
    return (
        <div className="Welcome">
           <CarNavBar/>
            <h1 className="h2"><b>Welcome To Booking</b></h1>
            <div style={{ float: "right" }}>
                <button className="btn btn-warning">
                    <a href='/booking/details'> <b>Check your Booked Details</b> </a>
                </button>
            </div>
            <div style={{ float: "left" }}>
                <button className="btn btn-danger">
                    <a href='/booking/delete/byId'> <b>Click here to delete</b> </a>
                </button>
            </div>
            <div>
                <button className="btn btn-light">
                    <a href='/booking/add'> <b>Click here to Book</b> </a>
                </button>
            </div>



        </div>
    )
}
export default BookingDashboard;
