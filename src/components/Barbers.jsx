import React from "react";
import BarberForm from "./static/BarberForm";
import Navbar from "./static/Navigation/Navbar";

function Barbers() {
  return (
    <div>
      <Navbar />
      <h1>List of Barbers</h1>
      <BarberForm />
    </div>
  );
}

export default Barbers;
