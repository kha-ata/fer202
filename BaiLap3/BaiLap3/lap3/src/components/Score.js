import React from 'react';

const Result = ({ score, total, onReplay }) => {
  return (
    <div>
      <h2>Your Result</h2>
      <p>
        You scored {score} out of {total}!
      </p>
      <button onClick={onReplay}>Replay Quiz</button>
      {/* Thêm nút chia sẻ nếu muốn */}
    </div>
  );
};

export default Result;
