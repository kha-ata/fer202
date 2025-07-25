import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";

const QuizReview = () => {
  const { questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const correctCount = questions.filter(
    (q) => q.userAnswer === q.correctAnswer
  ).length;

  const handleRetry = () => {
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 className="quiz-title">Quiz Review</h2>

      <div
        style={{
          marginBottom: "25px",
          backgroundColor: "#1f1f1f",
          color: "#00e676",
          padding: "10px",
          textAlign: "center",
          borderRadius: "8px",
          fontSize: "18px",
        }}
      >
        ✅ Bạn đã trả lời đúng {correctCount} / {questions.length} câu hỏi
      </div>

      {questions.map((q, index) => {
        const isCorrect = q.userAnswer === q.correctAnswer;

        return (
          <div
            key={q.id}
            className={`quiz-container ${isCorrect ? "correct" : "incorrect"}`}
          >
            <h5>
              Q{index + 1}. {q.question}
            </h5>

            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {q.options.map((opt, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      checked={q.userAnswer === opt}
                      readOnly
                    />{" "}
                    {opt}
                  </label>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "8px" }}>
              <strong>Right answer is:</strong> {q.correctAnswer}
            </div>
          </div>
        );
      })}

      {/* Nút làm lại */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button onClick={handleRetry}>🔁 Làm lại bài</button>
      </div>
    </div>
  );
};

export default QuizReview;
