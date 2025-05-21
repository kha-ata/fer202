import React from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR" },
    { id: 2, name: "Brian", department: "IT" },
    { id: 3, name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" }
  ];

  return (
    <div>
      <h1>Chon nhan vien</h1>
      <select>
        {employees.map((emp, index) => (
          <option key={emp.id || index} value={emp.name}>
            {emp.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
