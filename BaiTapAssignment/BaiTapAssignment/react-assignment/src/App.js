import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router >
        <h1 style={{ textAlign: "center", margin: "20px" }}>Product List</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
