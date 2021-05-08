import React from "react";
import "../../styles.scss";

import DisplayCard from "../../components/displayCard";

export default function DisplayResults({ doctors, user }) {
  return (
    <div className="display-container">
      <h1>Available Appointments</h1>
      {doctors.length ? (
        doctors.map((d) => {
          return <DisplayCard doc={d} user={user} />;
        })
      ) : (
        <div>No Appointments</div>
      )}

      {/* <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard /> */}
    </div>
  );
}
