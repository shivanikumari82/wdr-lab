import React, { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [standard, setStandard] = useState("");

  return (
    <div>
      <h2>Student Form</h2>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div>
        <label>Standard: </label>
        <input
          type="text"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
        />
      </div>

      <h3>Entered Data:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Standard: {standard}</p>
    </div>
  );
}

export default StudentForm;