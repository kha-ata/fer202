import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === id)
  );

  if (!product) return <p>Không tìm thấy sản phẩm!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        style={{ width: "300px", objectFit: "contain", marginBottom: "10px" }}
      />
      <p>
        <strong>Mô tả:</strong> {product.description}
      </p>
      <p>
        <del>{product.price}đ</del> <strong>{product.currentPrice}đ</strong>
      </p>
      <button onClick={() => navigate(`/edit/${id}`)}>✏️ Chỉnh sửa</button>
      <button onClick={() => navigate("/")}>⬅️ Quay lại</button>
    </div>
  );
};

export default ProductDetail;
