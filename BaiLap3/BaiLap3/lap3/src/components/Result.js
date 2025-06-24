import React from 'react';
import './Result.css';

const Result = ({ score, total, onReplay }) => {
  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Ended</h2>
      <div className="score-text">
        <span>Your Score:</span> <b>{score} / {total}</b>
      </div>
      <button className="replay-btn" onClick={onReplay}>Replay Quiz</button>
    </div>
  );
};

export default Result;
