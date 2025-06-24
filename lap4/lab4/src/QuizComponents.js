import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, ProgressBar, Alert, Badge } from 'react-bootstrap';
import { useQuiz } from './QuizContext';

// Question Creator Component
export const QuestionCreator = () => {
  const { quizData, setQuizData, setQuizMode } = useQuiz();
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    answers: ['', '', ''],
    correctAnswer: ''
  });

  const handleQuestionChange = (value) => {
    setNewQuestion(prev => ({ ...prev, question: value }));
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...newQuestion.answers];
    updatedAnswers[index] = value;
    setNewQuestion(prev => ({ ...prev, answers: updatedAnswers }));
  };

  const handleCorrectAnswerChange = (value) => {
    setNewQuestion(prev => ({ ...prev, correctAnswer: value }));
  };

  const addQuestion = () => {
    if (newQuestion.question && newQuestion.answers.every(answer => answer.trim()) && newQuestion.correctAnswer) {
      setQuizData(prev => [...prev, { ...newQuestion }]);
      setNewQuestion({
        question: '',
        answers: ['', '', ''],
        correctAnswer: ''
      });
    } else {
      alert('Please fill in all fields before adding the question.');
    }
  };

  const removeQuestion = (index) => {
    setQuizData(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4 h3">Create Quiz Questions</Card.Title>
              
              <Form className="mb-4">
                <Form.Group className="mb-3">
                  <Form.Label>Question:</Form.Label>
                  <Form.Control
                    type="text"
                    value={newQuestion.question}
                    onChange={(e) => handleQuestionChange(e.target.value)}
                    placeholder="Enter your question"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Answer Options:</Form.Label>
                  {newQuestion.answers.map((answer, index) => (
                    <Form.Control
                      key={index}
                      type="text"
                      value={answer}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      placeholder={`Answer option ${index + 1}`}
                      className="mb-2"
                    />
                  ))}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correct Answer:</Form.Label>
                  <Form.Select
                    value={newQuestion.correctAnswer}
                    onChange={(e) => handleCorrectAnswerChange(e.target.value)}
                  >
                    <option value="">Select the correct answer</option>
                    {newQuestion.answers.map((answer, index) => (
                      answer && <option key={index} value={answer}>{answer}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Button
                  variant="success"
                  onClick={addQuestion}
                  className="w-100"
                >
                  Add Question
                </Button>
              </Form>

              <Card.Title className="h4 mb-3">
                Current Questions <Badge bg="secondary">{quizData.length}</Badge>
              </Card.Title>
              
              <div className="mb-4" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {quizData.map((item, index) => (
                  <Alert key={index} variant="light" className="border mb-2">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="flex-grow-1">
                        <strong>{index + 1}. {item.question}</strong>
                        <div className="mt-2">
                          {item.answers.map((answer, ansIndex) => (
                            <div key={ansIndex} className={answer === item.correctAnswer ? 'text-success fw-bold' : 'text-muted'}>
                              • {answer} {answer === item.correctAnswer && '(Correct)'}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeQuestion(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Alert>
                ))}
              </div>

              <Button
                variant="primary"
                onClick={() => setQuizMode('take')}
                disabled={quizData.length === 0}
                className="w-100"
              >
                Start Quiz ({quizData.length} questions)
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Quiz Taking Component
export const QuizTaker = () => {
  const {
    quizData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    showResults,
    setShowResults,
    setQuizMode
  } = useQuiz();

  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    setSelectedAnswer(selectedAnswers[currentQuestionIndex] || '');
  }, [currentQuestionIndex, selectedAnswers]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: selectedAnswer
    }));

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setSelectedAnswer('');
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow text-center">
              <Card.Body>
                <div className="mb-4">
                  <h2 className="display-4 text-danger mb-3">Quiz Completed!</h2>
                  <div className="display-1 text-muted mb-2">{score}</div>
                  <p className="h4 text-muted">Your score: {score} out of {quizData.length}</p>
                </div>

                <div className="text-start mb-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {quizData.map((question, index) => {
                    const userAnswer = selectedAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <Alert key={index} variant={isCorrect ? 'success' : 'danger'} className="mb-3">
                        <Alert.Heading as="h6">{index + 1}. {question.question}</Alert.Heading>
                        <p className="mb-1">
                          <strong>Your answer:</strong> {userAnswer || 'No answer selected'}
                        </p>
                        {!isCorrect && (
                          <p className="mb-0">
                            <strong>Correct answer:</strong> {question.correctAnswer}
                          </p>
                        )}
                      </Alert>
                    );
                  })}
                </div>

                <Row>
                  <Col md={6} className="mb-2">
                    <Button
                      variant="primary"
                      onClick={resetQuiz}
                      className="w-100"
                    >
                      Retake Quiz
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="secondary"
                      onClick={() => setQuizMode('create')}
                      className="w-100"
                    >
                      Create Questions
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">
                  Question {currentQuestionIndex + 1} of {quizData.length}
                </h4>
                <Button
                  variant="link"
                  onClick={() => setQuizMode('create')}
                  className="p-0"
                >
                  Back to Create
                </Button>
              </div>
              
              <ProgressBar 
                now={((currentQuestionIndex + 1) / quizData.length) * 100} 
                className="mb-4"
                style={{ height: '8px' }}
              />

              <Card.Title className="h5 mb-4">{currentQuestion.question}</Card.Title>
              
              <Form className="mb-4">
                {currentQuestion.answers.map((answer, index) => (
                  <Form.Check
                    key={index}
                    type="radio"
                    id={`answer-${index}`}
                    name="answer"
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={() => handleAnswerSelect(answer)}
                    label={answer}
                    className="mb-3 p-3 border rounded"
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </Form>

              <div className="d-flex justify-content-between">
                <Button
                  variant="secondary"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                
                <Button
                  variant="danger"
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                >
                  {currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next'}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Main Quiz Content Component
export const QuizContent = () => {
  const { quizMode } = useQuiz();

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary mb-3">
            <span className="text-warning">FPT</span> UNIVERSITY
          </h1>
          <h2 className="h3 text-dark mb-2">ReactJS Quiz Application</h2>
          <p className="text-muted">Create your own quiz questions and test your knowledge!</p>
        </div>

        {quizMode === 'create' ? <QuestionCreator /> : <QuizTaker />}
      </Container>
    </div>
  );
};