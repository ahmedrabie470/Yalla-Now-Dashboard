import React  from "react";
import avatar from "../../Asssets/Image.png";
import eye from "../../Asssets/eye.png";
import  wallet from "../../Asssets/hugeicons_wallet-done-02.png";

export default function UserDetails() {
  return (
    <>
      <div className="container d-flex  align-items-center users my-5  w-75 me-5  px-0 ">
        <h5 className="mt-5">User Details</h5>
       
      </div>
      <div className="container  text-center users w-75  me-5 bg-white mt-5 p-3 shadow-sm rounded-3">
        <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 py-2 px-0">
            {" "}
            <div>
              <p>Image</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>User Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>Mail</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0 ">
            <div>
              <p>Mobil</p>
            </div>
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Gender</p>
            </div>{" "}
          </div>
          <div className="col-md-1  py-2 px-0 ">
            <div className="text-center">
              <p>Wallet</p>
            </div>
          </div>
          <div className="col-md-1 py-2 px-3 ">
            <div>
              <p>Action</p>
            </div>{" "}
          </div>
        </div>
        <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 py-2 px-0">
            {" "}
            <div>
              <img src={avatar} alt="avatar" />
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Ahmed Said</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>jane.smith@example.com</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0 ">
            <div>
              <p>987-654-3210</p>
            </div>
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Male</p>
            </div>{" "}
          </div>
          <div className="col-md-1  d-flex justify-content-center align-items-center">
            <div className="py-2">
             <p>EGP 200.00</p>
            </div>
          </div>
          <div className="col-md-1 py-2 px-3  d-flex   justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
          <span className=" py-2"><img className=" mx-2 " src={eye} alt="" /></span> 
          <span className=" py-2"><img className="mx-2 " src={wallet} alt="" /></span> 
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="container users px-1 w-75 me-5">
        <h5 className="mt-5  p-0">Rides  History</h5>
      </div>

      <div className="container  text-center users w-75  me-5 bg-white mt-5 p-3 shadow-sm rounded-3">
        <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 py-2 px-0">
            {" "}
            <div>
              <p>Number ID</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Rider Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>From</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0 ">
            <div>
              <p>To</p>
            </div>
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Status</p>
            </div>{" "}
          </div>
          <div className="col-md-2  py-2 px-0 ">
            <div className="text-center">
              <p>Price</p>
            </div>
          </div>
        </div>
        <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 py-2 px-0">
            {" "}
            <div>
              <p>#00025985</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Ahmed Said</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>Cairo,Tagamoaa</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0 ">
            <div>
              <p>Cairo,Helwan</p>
            </div>
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p> Delivered</p>
            </div>{" "}
          </div>
          <div className="col-md-2  d-flex justify-content-center align-items-center">
            <div className="py-2">
              <span >
                EGP 200.00
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="container users px-1 w-75 me-5">
        <h5 className="mt-5  p-0">Order  History</h5>
      </div>

      <div className="container  text-center users w-75  me-5 bg-white mt-5 p-3 shadow-sm rounded-3">
        <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 py-2 px-0">
            {" "}
            <div>
              <p>Order ID</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>From</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Request Time</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0 ">
            <div>
              <p>To</p>
            </div>
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Items</p>
            </div>{" "}
          </div>
          <div className="col-md-1 py-2 px-0">
            <div>
              <p>Status</p>
            </div>{" "}
          </div>
          <div className="col-md-1  py-2 px-0 ">
            <div className="text-center">
              <p>Price</p>
            </div>
          </div>
        </div>
        <div className="row my-1 border-bottom border-1 border-dark-subtle px-3 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 py-2 px-0">
            {" "}
            <div>
              <p>#00025985</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0">
            <div>
              <p>Burger Restaurant</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>August 26, 2023
              11:00 AM</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2  px-0">
            <div>
              <p>Cairo,Tagamoaa</p>
            </div>{" "}
          </div>
          <div className="col-md-2 py-2 px-0 ">
            <div>
              <p>burger sandwich , <br/> 
              burger meal ,<span className="shade4">, +3 more</span></p>
              

              
            </div>
          </div>
          <div className="col-md-1 py-2 px-0">
            <div>
              <p> Delivered</p>
            </div>{" "}
          </div>
          <div className="col-md-1  d-flex justify-content-center align-items-center">
            <div className="py-2">
              <span >
                EGP 200.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
