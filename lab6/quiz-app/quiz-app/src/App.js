import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import QuizReview from "./components/QuizReview";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/quiz/result" element={<QuizReview />} />
        {/* Nếu có thêm các trang News, Contact thì thêm ở đây */}
      </Routes>
    </div>
  );
}

export default App;
