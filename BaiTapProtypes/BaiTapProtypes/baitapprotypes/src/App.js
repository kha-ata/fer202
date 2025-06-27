import React from "react";
import AdvancedForm from "./components/AdvancedForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    alert("Dữ liệu đã gửi:\n" + JSON.stringify(formData, null, 2));
    // Hoặc xử lý lưu backend, v.v.
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React - Kiểm Tra PropTypes Nâng Cao</h1>
      <AdvancedForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
