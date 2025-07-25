import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: "#1f1f1f",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
      <div>
        <strong>JavaScript Quiz</strong>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#bbb", textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to="/quiz/result"
          style={{ color: "#bbb", textDecoration: "none" }}
        >
          Quiz Review
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
