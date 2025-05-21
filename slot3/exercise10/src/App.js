import React, { useState } from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Lọc danh sách theo searchTerm, không phân biệt hoa thường
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Tìm kiếm nhân viên theo tên</h1>
      <input
        type="text"
        placeholder="Nhập tên nhân viên..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp, index) => (
            <li key={emp.id || index}>
              {emp.name} - {emp.department}
            </li>
          ))
        ) : (
          <li>Không tìm thấy nhân viên phù hợp</li>
        )}
      </ul>
    </div>
  );
}

export default App;
