import React, { Fragment, useEffect, useState } from "react";
import eye from "../../Asssets/eye.png";
import block from "../../Asssets/Block.png";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Riders() {
  let [search, setSearch] = useState("");
  const [allRiders, setAllRiders] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleDisplayInfo = () => {
    setIsVisible(true);
  };
  const handleHideInfo = () => {
    setIsVisible(false);
  };


let token =localStorage.getItem("token")
async function getRiderData() {
    try {
      let { data } = await axios.get(
        "https://yallanow.runasp.net/api/Dashboard/AllDrivers?pageNumber=1&pageSize=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllRiders(data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // Unauthorized error handling
        console.log("Unauthorized access. Token may be expired or invalid.");
        // Example: Redirect to login page or show a message to the user
      } else {
        // Handle other errors
        console.error("Unexpected error occurred:", err)
  }}}
  async function blockRider(driverId){
    try {
    
      let data =await axios.put(`/api/Dashboard/UpdateDriverStatus?DriverID=${driverId}`,
        {NewStatus:3},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setBlockedUsers(data);
      console.log(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  useEffect(() => {
    getRiderData();
  }, []);

  return (
    <>
      <div className="container   users w-75  me-5 mt-5 rounded-3">
        <div className="row ">
          <h5 className="mt-5  p-0">Riders</h5>
          <div className="d-flex  p-0 justify-content-between d-flex align-items-center">
            <div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control rounded-2 px-3 mx-0 shadow-sm  "
                placeholder="Search by name "
              />
            </div>
            <div className="p-4">
              <Link>
                <img
                  src={eye}
                  id="hover-trigger"
                  onClick={handleDisplayInfo}
                  alt=""
                />
              </Link>
              {isVisible && (
                <div id="details">
                  <h1>Rider Details Will Appear But After Finish The Work</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container  text-center users w-75  me-5 bg-white mt-3  shadow-sm rounded-3">
      {allRiders?<>
        <div className="row px-3  d-flex justify-content-center align-items-center  mt-3">
          <div className="col-md-2 my-2 mainDiv   px-0">
            <div>
              <p>Image</p>
            </div>{" "}
          </div>
          <div className="col-md-2 my-2 mainDiv  px-0">
            <div>
              <p>Rider Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2 my-2 mainDiv   px-0">
            <div>
              <p>Scooter type</p>
            </div>{" "}
          </div>
          <div className="col-md-2 my-2 mainDiv  px-0 ">
            <div>
              <p>Scooter color</p>
            </div>
          </div>
          <div className="col-md-2 my-2 mainDiv  px-0">
            <div>
              <p>Number</p>
            </div>{" "}
          </div>
          <div className="col-md-1 my-2   px-0 ">
            <div className="text-center">
              <p>Ride Type</p>
            </div>
          </div>
          <div className="col-md-1 my-2  px-3 ">
            <div>
              <p>Action</p>
            </div>{" "}
          </div>
        </div>
        <hr />
        {allRiders?.data
          ?.filter((rider) => {
            return search.toLowerCase() === ""
              ? rider
              : rider?.userName.toLowerCase().includes(search.toLowerCase());
          })
          .map((rider) => (
            <Fragment key={rider.driverId}>
              <div className="text-decoration-none text-dark  row px-3  d-flex justify-content-center align-items-center  mt-3">
                <div className="col-md-2 my-2 mainDiv   px-0">
                  {" "}
                  <div className=" d-flex align-items-center justify-content-center">
                    <img
                      className="rounded-circle"
                      width={80}
                      height={80}
                      src={rider.papersFilePath}
                      alt="avatar"
                    />
                  </div>{" "}
                </div>
                <div className="col-md-2 my-2 mainDiv  px-0">
                  <div>
                    <p>{rider.userName}</p>
                  </div>{" "}
                </div>
                <div className="col-md-2 my-2 mainDiv   px-0">
                  <div>
                    <p>{rider.vehicleType}</p>
                  </div>{" "}
                </div>
                <div className="col-md-2 my-2 mainDiv  px-0 ">
                  <div>
                    <p>{rider.vehicleColor}</p>
                  </div>
                </div>
                <div className="col-md-2 my-2 mainDiv  px-0">
                  <div>
                    <p> {rider.phoneNumber}</p>
                  </div>{" "}
                </div>
                <div className="col-md-1 my-2  d-flex justify-content-center align-items-center">
                  <div className="">
                    <span className=" badge primary   primary1 rounded-1">
                      {rider.vehicleType}
                    </span>
                  </div>
                </div>
                <div className="col-md-1 my-2  px-3 ">
                  <div className="d-flex justify-content-center  align-items-center">
                    <img className="mx-2" id="hover-trigger" onClick={()=>blockRider(rider.driverId)} src={block} alt="block" />
                    <Link to={`/riderDetails/${rider.driverId}`}>
                      <img
                        id="hover-trigger"
                        onClick={handleDisplayInfo}
                        src={eye}
                        alt="eye"
                      />
                    </Link>
                    {isVisible && (
                      <div className="text-white" id="details">
                        <h1>hi</h1>
                      </div>
                    )}
                  </div>{" "}
                </div>
              </div>
              <hr />
            </Fragment>
          ))}
      </>:<div><h2>No Rider Now</h2></div>}
   
      </div>
</>
  );
}
