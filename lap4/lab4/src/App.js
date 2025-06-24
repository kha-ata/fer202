import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QuizProvider } from './QuizContext';
import { QuizContent } from './QuizComponents';

// Main App Component - Chỉ việc gọi thôi
export default function App() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}