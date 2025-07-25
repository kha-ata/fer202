import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestionIndex: 0,
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script",
      userAnswer: null,
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Causing flashbacks",
        "Validating forms",
        "None of these",
      ],
      correctAnswer: "Storing numbers, dates, or other values",
      userAnswer: null,
    },
    {
      id: 3,
      question: "Which of the following can't be done with JavaScript?",
      options: [
        "Validating a form",
        "Sending a form's contents by email",
        "Changing HTML content",
        "Hiding elements",
      ],
      correctAnswer: "Sending a form's contents by email",
      userAnswer: null,
    },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) question.userAnswer = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    goToFirst: (state) => {
      state.currentQuestionIndex = 0;
    },
    goToLast: (state) => {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    resetQuiz: (state) => {
      state.questions.forEach((q) => (q.userAnswer = null));
      state.currentQuestionIndex = 0;
    },
  },
});

export const {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  goToFirst,
  goToLast,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
