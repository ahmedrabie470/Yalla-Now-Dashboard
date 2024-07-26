import axios from "axios";
import React, { useEffect, useState }  from "react";

export default function PendingRiders() {
  // let [search, setSearch] = useState("");
  const [allPendingRiders, setPendingRiders] = useState([]);
  let token =localStorage.getItem("token")
  async function allPendingRidersData() {
    try {
      let { data } = await axios.get(
        
        "https://yallanow.runasp.net/api/Dashboard/PendingRiders?pageNumber=1&pageSize=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPendingRiders(data.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    allPendingRidersData();
  }, []);

  console.log(allPendingRiders);
  return (
    <>
     <div className="container d-flex  align-items-center users my-5  w-75 me-5  px-0 ">
        <h5>Pending Riders</h5>
       
      </div>
      <div className="container users w-75 me-5 bg-white p-3 mt-5 shadow-sm rounded-3">

          <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2  px-0">
            {" "}
            <div className="text-center">
              <p>Rider Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2  px-0">
            <div className="text-center">
              <p>Scooter type</p>
            </div>{" "}
          </div>
          <div className="col-md-2   px-0">
            <div className="text-center">
              <p>Scooter Number</p>
            </div>{" "}
          </div>
          <div className="col-md-2  px-0 ">
            <div className="text-center">
              <p>Request Time</p>
            </div>
          </div>
          <div className="col-md-2 2 px-0">
            <div className="text-center">
              <p>Details</p>
            </div>{" "}
          </div>
       
          <div className="col-md-2  px-0 ">
            <div className="text-center">
              <p>Action</p>
            </div>{" "}
          </div>
        </div>
    {allPendingRiders?.map((rider)=> (<div key={rider.id} className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
  
  <div className="col-md-2  px-0">
    <div className="text-center">
      <p>{rider.userName}</p>
    </div>{" "}
  </div>
  <div className="col-md-2   px-0">
    <div className="text-center">
      <p>{rider.vehicleType} </p>
    </div>{" "}
  </div>
  <div className="col-md-2  px-0 ">
    <div className="text-center">
      <p>{rider.licensePlate}</p>
    </div> 
  </div>
  
  <div className="col-md-2  px-0">
    <div className="text-center">
      <p>August 26, 2023 <br />
      11:00 AM</p>
    </div>{" "}
  </div>
 
  <div className="col-md-2  px-0">
    <div className="text-center">
      <p className="primary1">See Details ....</p>
    </div>{" "}
  </div>
  <div className="col-md-2 py-3  px-0  ">
    <div className="d-flex justify-content-center align-items-center">
    <button className="btn btn-dark secondary1 border-0 w-100">Accept</button>
    <button className="btn btn-dark secondary2 border-0 mx-2 w-100">Reject</button>
    </div>{" "}
  </div>
</div> ))}

                 
       
        </div>
        
    </>
  );
}
