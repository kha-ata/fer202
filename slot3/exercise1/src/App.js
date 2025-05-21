// App.js
import React from "react";

function App() {
  const employee = {
    name: "John Doe",
    age: 30,
    department: "IT",
  };

  // ES6 object destructuring
  const { name, age, department } = employee;

  return (
    <div>
      <p>{name}</p>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default App;
