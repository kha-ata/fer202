import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực đầu vào
const validateInput = (value) => {
  return value.length >= 5; // Giá trị phải có ít nhất 5 ký tự
};

function ValidatedInput() {
  const [value, setValue] = useState(""); // State lưu trữ giá trị đầu vào
  const [isValid, setIsValid] = useState(true); // State theo dõi tính hợp lệ
  const [errorMessage, setErrorMessage] = useState(""); // State lưu thông báo lỗi

  // useEffect để xác thực mỗi khi giá trị đầu vào thay đổi
  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput); // Cập nhật tính hợp lệ
    if (!isValidInput) {
      setErrorMessage("Giá trị phải có ít nhất 5 ký tự!"); // Thông báo lỗi
    } else {
      setErrorMessage(""); // Xóa thông báo lỗi
    }
  }, [value]); // Chạy lại mỗi khi value thay đổi

  return (
    <Form>
      <Form.Group controlId="validatedInput">
        <Form.Label>Nhập một giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} // Cập nhật giá trị
          isValid={isValid} // Trạng thái hợp lệ
          isInvalid={!isValid} // Trạng thái không hợp lệ
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage} {/* Hiển thị thông báo lỗi */}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;