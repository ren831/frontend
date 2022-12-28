import React, { useState, useEffect } from "react";
import BarberCard from "./BarberCard";
import ReviewForm from "./ReviewForm";
import BarberForm from "./static/BarberForm";
import { baseUrl } from "./static/Authentication/Globals";

function Barbers() {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/barbers")
      .then((r) => r.json())
      .then((data) => setBarbers(data));
  }, []);

  let barberArr = barbers.map((barber) => {
    return (
      <BarberCard key={barber.id} barber={barber} reviews={barber.reviews} />
    );
  });

  console.log(barberArr);

  function addBarber(newBarber) {
    const upddatedBarber = [...barbers, newBarber];
    setBarbers(upddatedBarber);
  }

  return (
    <div>
      <h1>List of Barbers</h1>
      <BarberCard barberArr={barberArr} />
      <BarberForm addBarber={addBarber} />
      <ReviewForm />
    </div>
  );
}

export default Barbers;
