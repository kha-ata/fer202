import React from 'react';
import './Question.css';

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A Question component that displays a single question
 * and its options, and updates the selected answer
 * when an option is clicked.
 *
 * @param {string} question - The question text
 * @param {string[]} options - The option texts
 * @param {string} selectedAnswer - The currently selected answer
 * @param {function(string):void} onSelect - Called when an option is clicked, with the selected option as an argument
 * @param {function():void} onSubmit - Called when the submit button is clicked

/*******  6da4ffe0-8d47-4c42-9940-9a99bf54ac2c  *******/
const Question = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  onSubmit,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="question-container">
      <h2>Question {questionNumber} of {totalQuestions}</h2>
      <div className="question-text">{question}</div>
      <div className="options-list">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={onSubmit} disabled={!selectedAnswer}>
        {questionNumber === totalQuestions ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Question;
