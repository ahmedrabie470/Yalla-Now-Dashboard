import React  from "react";

export default function RiderHistory() {
  // let [search, setSearch] = useState("");

  return ( 
    <>
      <div className="container   users w-75  me-5 mt-5 rounded-4">
        <div className="row ">
          <h5 className="mt-5 px-0">Rides History</h5>
          <div className="d-flex px-0 py-3 justify-content-between d-flex align-items-center">
            <div>
              <input
                // onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control rounded-2 mx-0 mt-2 shadow-sm  "
                placeholder="Search by name "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container   text-center users w-75  me-5 bg-white mt-5 p-3 shadow-sm rounded-3">
        <div className="row my-1  d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 px-0">
            {" "}
            <div>
              <p>Number ID</p>
            </div>{" "}
          </div>
          <div className="col-md-2 px-0">
            <div>
              <p>User Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2  px-0">
            <div>
              <p>Rider Name</p>
            </div>{" "}
          </div>
          <div className="col-md-2 px-0 ">
            <div>
              <p>From</p>
            </div>
          </div>
          <div className="col-md-2 px-0">
            <div>
              <p>To</p>
            </div>{" "}
          </div>
          <div className="col-md-1   px-0  ">
            <div>
              <p >Status</p>
            </div>
          </div>
          <div className="col-md-1  px-3 ">
            <div>
              <p>Price</p>
            </div>{" "}
          </div>
        </div>
        <hr  />
        <div className="row my-1 d-flex justify-content-center align-items-center border-dark mt-3">
          <div className="col-md-2 px-0">
            {" "}
            <div>
              <p>#0000_125</p>
            </div>{" "}
          </div>
          <div className="col-md-2 px-0">
            <div>
              <p>Ahmed aly</p>
            </div>{" "}
          </div>
          <div className="col-md-2  px-0">
            <div>
              <p>Ahmed aly</p>
            </div>{" "}
          </div>
          <div className="col-md-2 px-0 ">
            <div>
              <p>Cairo,Tagamoaa</p>
            </div>
          </div>
          <div className="col-md-2 px-0">
            <div>
              <p>Cairo,Helwan</p>
            </div>{" "}
          </div>
          <div className="col-md-1  d-flex justify-content-center align-items-center">
            <div className="py-2">
              <p>InProgress</p>
            </div>
          </div>
          <div className="col-md-1  px-4  ">
            <div>
              <p>EG 200.00</p>
            </div>{" "}
          </div>
        </div>
        <hr  />

      </div>
    </>
  );
}
