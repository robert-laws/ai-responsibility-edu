import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { quizzes, getQuizByTopic, calculateScore } from '../data/quizzes';
import { topics } from '../data/lessons';
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../hooks/useProgress';

function Quiz() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { getQuizScore, saveQuizScore, getTopicProgress } = useProgress();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const quiz = topicId ? getQuizByTopic(topicId) : null;

  const handleSelectAnswer = (answerIndex) => {
    if (showFeedback) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerIndex,
    }));
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowFeedback(false);
    } else {
      // Quiz complete
      const result = calculateScore(topicId, answers);
      saveQuizScore(topicId, result.score, result.total, result.percentage);
      setQuizComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowFeedback(false);
    setQuizComplete(false);
  };

  // Show topic selection if no topic selected
  if (!topicId) {
    return (
      <div className="quiz">
        <h1>Test Your Knowledge</h1>
        <p className="page-intro">
          Choose a topic to quiz yourself on what you&apos;ve learned.
        </p>

        <div className="quiz-topics">
          {topics.map((topic) => {
            const quizData = quizzes[topic.id];
            const previousScore = getQuizScore(topic.id);
            const lessonProgress = getTopicProgress(topic.id);

            return (
              <div key={topic.id} className="quiz-topic-card">
                <div className="topic-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{quizData?.questions.length || 0} questions</p>

                {previousScore && (
                  <p className="previous-score">
                    Best score: {previousScore.percentage}%
                  </p>
                )}

                <Link to={`/quiz/${topic.id}`} className="btn-primary">
                  {previousScore ? 'Retake Quiz' : 'Start Quiz'}
                </Link>

                {lessonProgress < 100 && (
                  <p className="quiz-recommendation">
                    <Link to={`/learning/${topic.id}`}>
                      Complete lessons first ({lessonProgress}% done)
                    </Link>
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="quiz-tip">
          <p>
            <strong>Tip:</strong> Complete the{' '}
            <Link to="/learning">learning modules</Link> first to prepare for
            the quizzes.
          </p>
        </div>
      </div>
    );
  }

  // Show quiz results
  if (quizComplete && quiz) {
    const result = calculateScore(topicId, answers);
    const getMessage = () => {
      if (result.percentage >= 80) return 'Excellent work! You have a strong understanding of this topic.';
      if (result.percentage >= 60) return 'Good job! Review the explanations for questions you missed.';
      return 'Keep learning! Consider reviewing the lessons and trying again.';
    };

    return (
      <div className="quiz">
        <Link to="/quiz" className="back-link">
          ← All Quizzes
        </Link>

        <div className="quiz-container quiz-results">
          <h1>Quiz Complete!</h1>
          <div className="results-score">
            {result.score}/{result.total}
          </div>
          <p className="results-message">{getMessage()}</p>

          <div className="results-breakdown">
            <h3>Question Review</h3>
            {quiz.questions.map((q, index) => {
              const isCorrect = answers[index] === q.correctAnswer;
              return (
                <div
                  key={q.id}
                  className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <p>
                    <strong>Q{index + 1}:</strong> {q.question}
                  </p>
                  {!isCorrect && (
                    <p className="result-explanation">
                      <em>{q.explanation}</em>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="results-actions">
            <button onClick={handleRetry} className="btn-secondary">
              Retry Quiz
            </button>
            <Link to={`/learning/${topicId}`} className="btn-secondary">
              Review Lessons
            </Link>
            <Link to="/quiz" className="btn-primary">
              More Quizzes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Show quiz questions
  if (quiz) {
    const question = quiz.questions[currentQuestion];
    const selectedAnswer = answers[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;
    const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

    return (
      <div className="quiz">
        <Link to="/quiz" className="back-link">
          ← All Quizzes
        </Link>

        <div className="quiz-container">
          <div className="quiz-progress">
            <ProgressBar
              value={progress}
              label={`Question ${currentQuestion + 1} of ${quiz.questions.length}`}
            />
          </div>

          <div className="question-number">
            {quiz.title}
          </div>
          <h2 className="question-text">{question.question}</h2>

          <div className="answer-options">
            {question.options.map((option, index) => {
              let className = 'answer-option';
              if (showFeedback) {
                if (index === question.correctAnswer) {
                  className += ' correct';
                } else if (index === selectedAnswer && !isCorrect) {
                  className += ' incorrect';
                }
              } else if (selectedAnswer === index) {
                className += ' selected';
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              <p className="feedback-title">
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </p>
              <p>{question.explanation}</p>
            </div>
          )}

          {showFeedback && (
            <div className="quiz-actions">
              <button onClick={handleNextQuestion} className="btn-primary">
                {currentQuestion < quiz.questions.length - 1
                  ? 'Next Question →'
                  : 'See Results'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="quiz">
      <h1>Quiz Not Found</h1>
      <Link to="/quiz" className="btn-primary">
        Browse Quizzes
      </Link>
    </div>
  );
}

export default Quiz;
