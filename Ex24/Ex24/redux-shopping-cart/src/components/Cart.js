// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux'; // Hook để "lấy" dữ liệu từ store
import './Cart.css';

const Cart = () => {
  // useSelector nhận vào một hàm, lấy ra phần state bạn cần (ở đây là state.cart)
  const cartItems = useSelector((state) => state.cart);

  // Tính tổng tiền
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
        <div className="cart-container">
            <h2>Giỏ hàng của bạn</h2>
            <p>Giỏ hàng đang trống.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Số lượng: {item.quantity}</span>
            <span>Giá: {(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</span>
          </li>
        ))}
      </ul>
      <hr />
      <h3 className="cart-total">Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VNĐ</h3>
    </div>
  );
};

export default Cart;
