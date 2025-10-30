import React from "react";

function Faculty(props) {
  return (
    <div>
      <h2>Faculty Details</h2>
      <p><strong>Name:</strong> {props.facName}</p>
      <p><strong>Subject:</strong> {props.subject}</p>
      <p><strong>Experience:</strong> {props.experience} years</p>
    </div>
  );
}

export default Faculty;
