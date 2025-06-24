import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
import './QuizApp.css';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        },
        // Thêm nhiều câu nữa nếu thích
      ],
      currentQuestion: 0,
      selectedAnswer: "",
      score: 0,
      quizEnd: false,
      showResult: false
    };
  }

  handleSelect = (option) => {
    this.setState({ selectedAnswer: option });
  };

  handleSubmit = () => {
    const { selectedAnswer, questions, currentQuestion, score } = this.state;
    let updatedScore = score;
    if (selectedAnswer === questions[currentQuestion].answer) {
      updatedScore += 1;
    }

    if (currentQuestion + 1 < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedAnswer: "",
        score: updatedScore,
      });
    } else {
      this.setState({
        score: updatedScore,
        quizEnd: true,
      });
    }
  };

  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      selectedAnswer: "",
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, selectedAnswer, score, quizEnd } = this.state;
    return (
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz App</h1>
        <div className="quiz-card">
          {!quizEnd ? (
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              selectedAnswer={selectedAnswer}
              onSelect={this.handleSelect}
              onSubmit={this.handleSubmit}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
            />
          ) : (
            <Result score={score} total={questions.length} onReplay={this.handleReplay} />
          )}
        </div>
      </div>
    );
  }
}

export default QuizApp;
