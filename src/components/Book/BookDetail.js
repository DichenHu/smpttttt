import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { link, Link } from "react-router-dom";

const BookDetail = () => {
  var { id } = useParams();
  var React = require("react");
  var QRCode = require("qrcode.react");
 
  
    

  
  return (
    
    <div>
      {" "}
      <React.Fragment>
      <QRCode value="https://www.coronavirus.vic.gov.au/where-get-tested-covid-19" />,
        <Link to="/addPerson" className="btn btn-lg btn-info">

          Click here to booking
        </Link>
      </React.Fragment>
      {id}
    </div>
  );
};

export default BookDetail;
