import React from "react";

function App() {
  // Arrow function dùng rest parameters để nhận nhiều tham số tuổi
  const averageAge = (...ages) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    return (total / ages.length).toFixed(2); // Làm tròn 2 chữ số
  };

  // Gọi hàm với danh sách tuổi
  const avg = averageAge(20, 25, 30, 35, 40);

  return (
    <div>
      <h1>Tinh tuoi trung binh</h1>
      <p>Tuoi trung binh la: {avg}</p>
    </div>
  );
}

export default App;
