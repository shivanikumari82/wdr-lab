import React from "react";
import Faculty from "./Faculty";

function App() {
  // data to be passed
  const facultyData = {
    name: "Ramesh",
    subject: "Java",
    experience: 13
  };

  return (
    <div>
      <h1>Faculty Information</h1>
      {/* Passing data as props */}
      <Faculty
        facName={facultyData.name}
        subject={facultyData.subject}
        experience={facultyData.experience}
      />
    </div>
  );
}

export default App;
