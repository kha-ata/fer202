import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
} from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    currentPrice: "",
    image: "",
  });

 useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleAdd = () => {
    dispatch(addProduct(form));
    setForm({
      name: "",
      description: "",
      price: "",
      currentPrice: "",
      image: "",
    });
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ margin: "20px" }}>
        <input
          placeholder="Tên"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Mô tả"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          placeholder="Giá"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Giá KM"
          value={form.currentPrice}
          onChange={(e) => setForm({ ...form, currentPrice: e.target.value })}
        />
        <input
          placeholder="Ảnh (laptop1.png)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>

      <div className="product-list">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={`/images/${p.image}`} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>
              <del>{p.price}đ</del> <b>{p.currentPrice}đ</b>
            </p>
            <button onClick={() => navigate(`/product/${p.id}`)}>
              Chi tiết
            </button>
            <button onClick={() => dispatch(deleteProduct(p.id))}>Xoá</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
