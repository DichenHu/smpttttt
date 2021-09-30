import React, { Component } from "react";
import { useParams } from "react-router-dom";
import {link, Link} from "react-router-dom";

const BookDetail = () => {
  var { id } = useParams();

  return (
    <div>
      {" "}
      <React.Fragment>
        <Link to="/addPerson" className="btn btn-lg btn-info">
          Click here to booking
        </Link>
      </React.Fragment>
      {id}
    </div>
  );
};

export default BookDetail;
