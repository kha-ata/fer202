import React, { useState, createContext, useContext } from 'react';

// Initial quiz data
export const initialQuizData = [
  {
    question: 'What is ReactJS?',
    answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];

// Create Quiz Context
export const QuizContext = createContext();

// Quiz Provider Component
export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizMode, setQuizMode] = useState('take'); // 'create' or 'take'

  const value = {
    quizData,
    setQuizData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    showResults,
    setShowResults,
    quizMode,
    setQuizMode
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use Quiz Context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};