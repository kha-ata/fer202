import React from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Nhom nhan vien theo department
  const grouped = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(emp);
    return acc;
  }, {}); // Khoi tao acc la object rong

  return (
    <div>
      <h1>Danh sach nhan vien theo phong ban</h1>
      {Object.entries(grouped).map(([dept, list]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {list.map((emp, index) => (
              <li key={emp.id || index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
