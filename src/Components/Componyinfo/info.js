import React from "react";

function CompanyInfo() {
  return (
    <div className="container=fluid">
      <div className="row bg-success py-4 shadow">
        <center className="text-white">
          <h3>Compony Information</h3>
        </center>
      </div>
      <div className="row  mt-5 ">
        <div className="col-lg-4 card shadow offset-lg-3 mx-auto col-md-8 offset-md-2 col-sm-12 ">
          <div className="mt-3 ">
            <span className="fw-bold">Compony :</span> Geeksynergy Technologes
          </div>
          <div className="mt-3 ">
            <span className="fw-bold">Address :</span>Sanjay Nagar Banglore
          </div>
          <div className="mt-3 ">
            <span className="fw-bold">Phone :</span> +91xxxxxxx09
          </div>
          <div className="mt-3 mb-3">
            <span className="fw-bold">Email :</span> xxx@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
