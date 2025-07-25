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
    // ✅ Kiểm tra trống
    if (
      !form.name.trim() ||
      !form.description.trim() ||
      !form.price.trim() ||
      !form.currentPrice.trim() ||
      !form.image.trim()
    ) {
      alert("❌ Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }

    // ✅ Kiểm tra giá là số và > 0
    const price = parseFloat(form.price);
    const currentPrice = parseFloat(form.currentPrice);
    if (isNaN(price) || isNaN(currentPrice) || price <= 0 || currentPrice <= 0) {
      alert("❌ Giá và Giá KM phải là số lớn hơn 0!");
      return;
    }

    // ✅ Gửi sản phẩm hợp lệ
    dispatch(addProduct({
      ...form,
      price,
      currentPrice,
    }));

    // ✅ Reset form
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
      

      <div className="product-list">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={`/images/${p.image}`} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>
              <del>{p.price}đ</del> <b>{p.currentPrice}đ</b>
            </p>
<button onClick={() => navigate(`/product/${p.id}`)}>Chi tiết</button>
            <button onClick={() => dispatch(deleteProduct(p.id))}>Xoá</button>
          </div>
        ))}
      </div>
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
          type="number"
          placeholder="Giá"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
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
    </div>
  );
};

export default ProductList;