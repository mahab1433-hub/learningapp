import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  Volume2, 
  Award, 
  Sparkles,
  Trophy,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  playClickSound, 
  playSuccessSound, 
  playErrorSound, 
  playStarSound, 
  playFanfareSound 
} from '../utils/soundEffects';
import { speakText, stopSpeaking } from '../utils/speechHelper';

export default function QuizEngine({ 
  quizQuestions = [], 
  lessonTitle = '', 
  onQuizCompleted, 
  onNextLesson,
  hasNextLesson = false 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showCurrentExplanation, setShowCurrentExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (option) => {
    if (showCurrentExplanation) return; // Prevent changing after revealing
    playClickSound();

    const isCorrect = option === currentQuestion.correctAnswer;
    if (isCorrect) {
      playSuccessSound();
    } else {
      playErrorSound();
    }

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: option
    }));
    setShowCurrentExplanation(true);
  };

  const handleNextQuestion = () => {
    playClickSound();
    stopSpeaking();
    setIsSpeaking(false);
    setShowCurrentExplanation(false);

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);

    // Calculate score
    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const percent = Math.round((correctCount / totalQuestions) * 100);
    let starsEarned = 1;
    if (percent >= 90) starsEarned = 3;
    else if (percent >= 60) starsEarned = 2;

    if (percent >= 70) {
      playFanfareSound();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    } else {
      playSuccessSound();
    }

    if (onQuizCompleted) {
      onQuizCompleted({
        score: correctCount,
        total: totalQuestions,
        percentage: percent,
        stars: starsEarned
      });
    }
  };

  const handleRetryQuiz = () => {
    playClickSound();
    stopSpeaking();
    setIsSpeaking(false);
    setSelectedAnswers({});
    setShowCurrentExplanation(false);
    setCurrentIndex(0);
    setQuizFinished(false);
  };

  const handleReadAloud = (text) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      speakText(text, () => setIsSpeaking(false));
    }
  };

  // If Quiz is Finished: Show Results & Detailed Review
  if (quizFinished) {
    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });
    const percent = Math.round((correctCount / totalQuestions) * 100);
    const starsEarned = percent >= 90 ? 3 : percent >= 60 ? 2 : 1;

    return (
      <div className="quiz-result-view">
        <div className="quiz-score-card">
          <div className="trophy-badge-circle">
            <Trophy className="w-12 h-12 text-amber-500 animate-bounce" />
          </div>

          <h3 className="score-heading">
            {percent === 100 ? 'Incredible! Perfect Score! 🌟' :
             percent >= 70 ? 'Super Star! Outstanding Work! 🎉' :
             'Good Effort! Keep Practicing! 💪'}
          </h3>
          <p className="score-subtext">You completed the challenge quiz for "{lessonTitle}"</p>

          <div className="stars-earned-row">
            {[1, 2, 3].map((star) => (
              <span 
                key={star} 
                className={`star-pill ${star <= starsEarned ? 'star-active animate-pulse' : 'star-inactive'}`}
              >
                ★
              </span>
            ))}
          </div>

          <div className="score-metrics-grid">
            <div className="metric-box">
              <span className="metric-num text-emerald-600">{correctCount} / {totalQuestions}</span>
              <span className="metric-lbl">Correct Answers</span>
            </div>
            <div className="metric-box">
              <span className="metric-num text-indigo-600">{percent}%</span>
              <span className="metric-lbl">Accuracy</span>
            </div>
            <div className="metric-box">
              <span className="metric-num text-amber-600">+{correctCount * 10}</span>
              <span className="metric-lbl">XP Earned</span>
            </div>
          </div>

          <div className="quiz-result-actions">
            <button onClick={handleRetryQuiz} className="btn-secondary-kid">
              <RotateCcw className="w-4 h-4 mr-1" /> Retry Quiz
            </button>
            {hasNextLesson && onNextLesson && (
              <button onClick={onNextLesson} className="btn-primary-kid">
                Next Lesson <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            )}
          </div>
        </div>

        {/* Detailed Question by Question Review */}
        <div className="quiz-review-section">
          <h4 className="review-title">Review Answers & Explanations</h4>
          <div className="review-list">
            {quizQuestions.map((q, idx) => {
              const userAnswer = selectedAnswers[idx];
              const isCorrect = userAnswer === q.correctAnswer;
              return (
                <div 
                  key={idx} 
                  className={`review-card ${isCorrect ? 'review-card-correct' : 'review-card-wrong'}`}
                >
                  <div className="review-header">
                    <span className="review-qnum">Question {idx + 1}</span>
                    <span className={`status-pill ${isCorrect ? 'status-correct' : 'status-wrong'}`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-1 inline" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 mr-1 inline" /> Needs Review
                        </>
                      )}
                    </span>
                  </div>

                  <p className="review-question-text">{q.question}</p>

                  <div className="review-answers-box">
                    <div className="answer-row">
                      <span className="ans-label">Your Answer:</span>
                      <span className={`ans-val ${isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}`}>
                        {userAnswer || 'Not answered'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div className="answer-row">
                        <span className="ans-label">Correct Answer:</span>
                        <span className="ans-val text-emerald-700 font-bold">{q.correctAnswer}</span>
                      </div>
                    )}
                  </div>

                  {q.explanation && (
                    <div className="review-explanation-box">
                      <HelpCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p className="explanation-text">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Quiz in Progress: Show Current Question
  const userAnswerForCurrent = selectedAnswers[currentIndex];
  const isAnswered = userAnswerForCurrent !== undefined;
  const isCurrentCorrect = userAnswerForCurrent === currentQuestion.correctAnswer;

  return (
    <div className="quiz-in-progress-card">
      {/* Progress & Header */}
      <div className="quiz-progress-header">
        <div className="quiz-step-info">
          <span className="quiz-badge-step">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="quiz-type-tag">
            {currentQuestion.type === 'multiple-choice' ? 'Multiple Choice' :
             currentQuestion.type === 'true-false' ? 'True / False' : 'Fill in the Blank'}
          </span>
        </div>
        <button
          onClick={() => handleReadAloud(currentQuestion.question)}
          className={`btn-sound-listen ${isSpeaking ? 'btn-sound-active' : ''}`}
          title="Listen to question"
        >
          <Volume2 className="w-4 h-4 mr-1" />
          {isSpeaking ? 'Speaking...' : 'Listen 🔊'}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-track">
        <div 
          className="quiz-progress-fill"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question Text */}
      <div className="quiz-question-box">
        <h3 className="current-question-text">{currentQuestion.question}</h3>
        {currentQuestion.hint && !showCurrentExplanation && (
          <p className="question-hint">💡 Hint: {currentQuestion.hint}</p>
        )}
      </div>

      {/* Options */}
      <div className={`quiz-options-container ${currentQuestion.type === 'true-false' ? 'options-tf-row' : 'options-vertical-grid'}`}>
        {currentQuestion.options.map((option, idx) => {
          const isSelected = userAnswerForCurrent === option;
          let btnClass = 'quiz-option-button';

          if (showCurrentExplanation) {
            if (option === currentQuestion.correctAnswer) {
              btnClass += ' option-btn-correct';
            } else if (isSelected && !isCurrentCorrect) {
              btnClass += ' option-btn-wrong';
            } else {
              btnClass += ' option-btn-disabled';
            }
          } else if (isSelected) {
            btnClass += ' option-btn-selected';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(option)}
              disabled={showCurrentExplanation}
              className={btnClass}
            >
              <span className="option-letter-index">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="option-text-content">{option}</span>
              {showCurrentExplanation && option === currentQuestion.correctAnswer && (
                <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto flex-shrink-0" />
              )}
              {showCurrentExplanation && isSelected && !isCurrentCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 ml-auto flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Explanation Banner after choosing */}
      {showCurrentExplanation && (
        <div className={`immediate-feedback-box ${isCurrentCorrect ? 'feed-correct' : 'feed-wrong'}`}>
          <div className="feedback-lead">
            {isCurrentCorrect ? (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-700" />
                <span className="font-bold text-emerald-800">Spot on! Well done! ⭐</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span className="font-bold text-rose-800">
                  Not quite! The correct answer is: {currentQuestion.correctAnswer}
                </span>
              </>
            )}
          </div>
          {currentQuestion.explanation && (
            <p className="feed-explanation-text">{currentQuestion.explanation}</p>
          )}

          <div className="feedback-next-wrap">
            <button onClick={handleNextQuestion} className="btn-primary-kid pulse-on-ready">
              {currentIndex + 1 < totalQuestions ? (
                <>Next Question <ArrowRight className="w-4 h-4 ml-1 inline" /></>
              ) : (
                <>Complete Quiz & See Score <Award className="w-4 h-4 ml-1 inline" /></>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
