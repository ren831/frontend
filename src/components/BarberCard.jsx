import React from "react";

function BarberCard({ barber }) {
  console.log(barber);
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <b>{barber.name}</b>
        </Card.Header>
        id:{barber.id}
      </Card.Content>
      <Card.Meta>{}</Card.Meta>
    </Card>
  );
}

export default BarberCard;
