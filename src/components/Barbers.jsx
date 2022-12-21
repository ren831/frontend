import React from "react";
import ReviewForm from "./ReviewForm";
import BarberForm from "./static/BarberForm";

function Barbers() {
  return (
    <div>
      <h1>List of Barbers</h1>
      <BarberForm />
      <ReviewForm />
    </div>
  );
}

export default Barbers;
