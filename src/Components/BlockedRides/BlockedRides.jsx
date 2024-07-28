import React, { Fragment, useEffect, useState } from "react";
import eye from "../../Asssets/eye.png";
import block from "../../Asssets/Block.png";
import axios from "axios";
export default function BlockedRiders() {
  // let [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [allBlockedRiders, setBlockedRiders] = useState([]);
  const [unBlockRider, setUnBlockRider] = useState([]);

  let token =localStorage.getItem("token")
  async function getBlockedRiders() {
    try {
      let { data } = await axios.get(
        "https://yallanow.runasp.net/api/Dashboard/BlockedDrivers?pageNumber=1&pageSize=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBlockedRiders(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  console.log(allBlockedRiders);
  async function unblockRider (driverId){
    try {
    
      let data =await axios.put(`https://yallanow.runasp.net/api/Dashboard/UpdateDriverStatus?DriverID=${driverId}`,
        {NewStatus:1},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setUnBlockRider(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }  useEffect(() => {
    getBlockedRiders();
  }, []);

  const handleDisplayInfo = () => {
    setIsVisible(true);
  };
  const handleHideInfo = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="container users w-75 me-5">
        <div className="row">
          <p className="mt-5  p-0">Blocked Riders</p>
          <div className="d-flex  p-0 justify-content-between d-flex align-items-center">
            <div>
              <input
                // onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control  px-3 mx-0 shadow-sm w-100 "
                placeholder="Search by name "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container   users w-75  me-5 bg-white mt-5 p-3 shadow-sm rounded-3">
      {allBlockedRiders?.length>0 ? <>
      
        <div className="row px-3  d-flex justify-content-center align-items-center  mt-3">
          <div className="col-md-2 text-center mainDiv  px-0">
            <div>
              <p>Image</p>
            </div>{" "}
          </div>
          <div className="col-md-2 text-center mainDiv  px-0">
            <div>
              <p>Rider Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2 text-center mainDiv   px-0">
            <div>
              <p>Scooter type</p>
            </div>{" "}
          </div>
          <div className="col-md-2 text-center mainDiv  px-0 ">
            <div>
              <p>Scooter color</p>
            </div>
          </div>
          <div className="col-md-2 text-center mainDiv  px-0">
            <div>
              <p>Number</p>
            </div>{" "}
          </div>
          <div className="col-md-1 text-center   px-0 ">
            <div className="">
              <p>Ride Type</p>
            </div>
          </div>
          <div className="col-md-1 text-center  px-0 ">
            <div>
              <p>Action</p>
            </div>{" "}
          </div>
        </div>
        <hr />

{allBlockedRiders?.data?.map((rider)=>(<Fragment key={rider.driverId}>
  <div
         
         className="row px-3 text-decoration-none text-black  d-flex justify-content-center align-items-center  mt-3"
       >
         <div className="col-md-2 text-center mainDiv   px-0">
           {" "}
           <div>
             <img width={80} height={80} className="rounded-circle" src={rider.papersFilePath} alt="avatar" />
           </div>{" "}
         </div>
         <div className="col-md-2 text-center mainDiv  px-0">
           <div>
             <p>{rider.userName}</p>
           </div>{" "}
         </div>
         <div className="col-md-2 text-center mainDiv   px-0">
           <div>
             <p>{rider.vehicleType}</p>
           </div>{" "}
         </div>
         <div className="col-md-2 text-center mainDiv  px-0 ">
           <div>
             <p>{rider.vehicleColor}</p>
           </div>
         </div>
         <div className="col-md-2 text-center mainDiv  px-0">
           <div>
             <p>  {rider.phoneNumber}</p>
           </div>{" "}
         </div>
         <div className="col-md-1 text-center px-0   d-flex justify-content-center align-items-center">
           <div className="">
             <span className=" badge primary  primary1 rounded-1">
             {rider.vehicleType}
             </span>
           </div>
         </div>
         <div className="col-md-1 text-center  px-3  ">
           <div className="d-flex justify-content-center align-items-center ">
             <img className="mx-2 " onClick={()=>unblockRider(rider.driverId)} src={block} alt="block" />
             <img
               id="hover-trigger"
               onClick={handleDisplayInfo}
               src={eye}
               alt="eye"
             />
             {isVisible && (
               <div id="details">
                 <h2>Details</h2>
                 <p>Additional information here...</p>
                 <button onClick={handleHideInfo}>Close</button>
               </div>
             )}
           </div>{" "}
         </div>
       </div>
       <hr />
</Fragment>))}
      </>:<div ><h2 className="text-center">No Blocked Riders</h2></div>}
        
      </div>
    </>
  );
}
