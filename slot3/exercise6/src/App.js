import React from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Loc nhan vien thuoc phong IT
  const itEmployees = employees.filter(emp => emp.department === "IT");

  return (
    <div>
      <h1>Danh sach nhan vien phong IT</h1>
      <ul>
        {itEmployees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
