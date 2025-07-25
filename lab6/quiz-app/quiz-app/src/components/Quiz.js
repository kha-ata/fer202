import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAnswer, nextQuestion } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex } = useSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    dispatch(selectAnswer({ questionId: currentQuestion.id, answer }));

    // Nếu chưa phải câu cuối thì tự chuyển sang câu sau
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        dispatch(nextQuestion());
      }, 400); // đợi 400ms để thấy hiệu ứng chọn
    } else {
      // Nếu là câu cuối cùng thì tự đi đến trang kết quả
      setTimeout(() => {
        navigate("/quiz/result");
      }, 600);
    }
  };

  return (
    <div className="quiz-wrapper">
      <h2 className="quiz-title">JavaScript Quiz</h2>

      <div className="quiz-container">
        <h4>
          Q{currentQuestionIndex + 1}. {currentQuestion.question}
        </h4>

        <div className="options">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              className={currentQuestion.userAnswer === opt ? "active" : ""}
              onClick={() => handleAnswer(opt)}
              disabled={currentQuestion.userAnswer !== null} // chỉ cho chọn 1 lần
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
