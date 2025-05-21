import React from "react";

function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  // Kiem tra xem co nhan vien nao co tuoi tu 10 den 20 khong
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h1>Kiem tra tuoi nhan vien</h1>
      <p>Co nhan vien nao tu 10 den 20 tuoi khong? {isTeenager ? "true" : "false"}</p>
    </div>
  );
}

export default App;
