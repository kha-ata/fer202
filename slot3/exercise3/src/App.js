import React from "react";
import "./App.css";
function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div>
      <h1>Bang nhan vien</h1>

      {/* Bắt đầu JSX table */}
      <table className="table-style">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ten</th>
            <th>Phong ban</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => {
            const { id, name, department } = emp;
            return (
              <tr key={id || index}>
                <td>{id || index + 1}</td>
                <td>{name}</td>
                <td>{department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Kết thúc JSX table */}
    </div>
  );
}

export default App;
