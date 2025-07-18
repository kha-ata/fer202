// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/actions';
import './ProductList.css'; // Tạo file CSS để style cho đẹp

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 'P001',
    name: 'Laptop ABC',
    price: 20999000,
    description: 'Laptop cấu hình mạnh cho lập trình viên.',
    catalogs: ['Laptop', 'Thiết bị điện tử'],
  },
  {
    id: 'P002',
    name: 'Bàn phím cơ XYZ',
    price: 1500000,
    description: 'Bàn phím cơ cho cảm giác gõ tuyệt vời.',
    catalogs: ['Phụ kiện', 'Gaming Gear'],
  },
  {
    id: 'P003',
    name: 'Màn hình 4K',
    price: 7500000,
    description: 'Màn hình sắc nét, màu sắc trung thực.',
    catalogs: ['Màn hình', 'Thiết bị văn phòng'],
  },
];

const ProductList = () => {
  // useDispatch là một hook để "gửi" action đến reducer
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleUpdateCart = (productId) => {
    dispatch(updateCart(productId));
  };
  
  const handleDeleteFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Giá: {product.price.toLocaleString('vi-VN')} VNĐ</p>
            <p>{product.description}</p>
            <p>Danh mục: {product.catalogs.join(', ')}</p>
            <div className="product-buttons">
                {/* Yêu cầu 2 */}
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                {/* Yêu cầu 3 */}
                <button onClick={() => handleUpdateCart(product.id)}>Update to Cart</button>
                {/* Yêu cầu 4 */}
                <button className="delete-btn" onClick={() => handleDeleteFromCart(product.id)}>Delete from Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
