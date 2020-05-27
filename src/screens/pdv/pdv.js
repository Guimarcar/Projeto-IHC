import React from "react";
import "./pdv.css";
import { Link } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

import pdv_off_img from "../../_assets/pdv_off.jpg";

function Pdv() {
  return (
    <>
      <Link className="link" to="/gerenciar">
        ->
      </Link>
      <img className="pdv_off_img" src={pdv_off_img} alt="PDV OFF" />
    </>
  );
}

export default Pdv;
