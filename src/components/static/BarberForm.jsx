import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./Authentication/Globals";

function BarberForm({ addBarber }) {
  const [barberName, setBarberName] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const params = {
      barberName: barberName,
    };
    fetch(baseUrl + "/barbers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((r) => r.json())
      .then((data) => {
        addBarber(data);
      });
  }
  return (
    <div>
      <h3>Add New Barber</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={barberName}
          onChange={(e) => setBarberName(e.target.value)}
        />
        <button type="submit">Add Barber</button>
      </form>
    </div>
  );
}

export default BarberForm;
