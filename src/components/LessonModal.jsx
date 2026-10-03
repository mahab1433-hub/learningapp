import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  BookOpen, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  Star,
  Check,
  HelpCircle
} from 'lucide-react';
import InteractiveActivity from './InteractiveActivity';
import QuizEngine from './QuizEngine';
import { speakText, stopSpeaking } from '../utils/speechHelper';
import { playClickSound, playSuccessSound, playStarSound } from '../utils/soundEffects';

export default function LessonModal({ 
  lesson, 
  onClose, 
  onLessonCompleted, 
  onNextLesson,
  hasNextLesson = false,
  isAlreadyCompleted = false 
}) {
  const [activeTab, setActiveTab] = useState('explanation'); // 'explanation' | 'visuals' | 'activity' | 'practice' | 'quiz'
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [practiceAnswers, setPracticeAnswers] = useState({});
  const [practiceRevealed, setPracticeRevealed] = useState({});

  useEffect(() => {
    // Scroll modal to top when tab changes
    const modalBody = document.getElementById('lesson-modal-scroll');
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    return () => {
      stopSpeaking();
    };
  }, [activeTab, lesson]);

  if (!lesson) return null;

  const handleReadExplanation = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      // Clean markdown for audio
      const textToSpeak = `${lesson.title}. ${lesson.summary}. ${lesson.explanation.replace(/[*#_$`]/g, '')}`;
      speakText(textToSpeak, () => setIsSpeaking(false));
    }
  };

  const handlePracticeSelect = (pIndex, opt, correct) => {
    playClickSound();
    setPracticeAnswers(prev => ({ ...prev, [pIndex]: opt }));
    setPracticeRevealed(prev => ({ ...prev, [pIndex]: true }));
    if (opt === correct) {
      playSuccessSound();
    }
  };

  const handleQuizDone = (result) => {
    if (onLessonCompleted) {
      onLessonCompleted(lesson.id, result.percentage, lesson.xp || 50, result.stars);
    }
  };

  const tabs = [
    { id: 'explanation', label: '1. Learn', icon: BookOpen },
    { id: 'visuals', label: '2. Visuals', icon: Eye },
    { id: 'activity', label: '3. Activity', icon: Sparkles },
    { id: 'practice', label: '4. Practice', icon: CheckCircle2 },
    { id: 'quiz', label: '5. Quiz & Win', icon: Award }
  ];

  return (
    <div className="modal-overlay">
      <div className="lesson-modal-dialog">
        {/* Top Header */}
        <div className="lesson-modal-header" style={{ borderTopColor: lesson.subjectThemeColor || '#6366F1' }}>
          <div className="modal-title-meta">
            <span className="subject-pill-tag" style={{ backgroundColor: lesson.subjectBgColor, color: lesson.subjectThemeColor }}>
              {lesson.badgeIcon || '📘'} {lesson.subjectTitle} • Grade {lesson.grade}
            </span>
            <span className="unit-meta-crumb">{lesson.unitTitle}</span>
            <h2 className="lesson-main-heading">{lesson.title}</h2>
          </div>

          <div className="modal-top-actions">
            <button
              onClick={handleReadExplanation}
              className={`btn-sound-listen ${isSpeaking ? 'btn-sound-active' : ''}`}
              title="Listen to lesson"
            >
              <Volume2 className="w-4 h-4 mr-1" />
              {isSpeaking ? 'Stop Reading' : 'Listen 🔊'}
            </button>
            <button 
              onClick={() => {
                stopSpeaking();
                onClose();
              }} 
              className="btn-close-modal"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Step Stepper Navigation Tabs */}
        <div className="lesson-stepper-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playClickSound();
                  setActiveTab(tab.id);
                }}
                className={`stepper-tab-btn ${isActive ? 'stepper-tab-active' : ''}`}
              >
                <Icon className="w-4 h-4 mr-1.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div id="lesson-modal-scroll" className="lesson-modal-body">
          {/* TAB 1: EXPLANATION */}
          {activeTab === 'explanation' && (
            <div className="lesson-section-container">
              <div className="summary-banner">
                <span className="summary-icon">💡</span>
                <div>
                  <h4 className="summary-title">Today's Big Idea</h4>
                  <p className="summary-text">{lesson.summary}</p>
                </div>
              </div>

              <div className="explanation-prose">
                {lesson.explanation.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('###')) {
                    return <h3 key={idx} className="prose-subheading">{paragraph.replace('###', '').trim()}</h3>;
                  }
                  if (paragraph.includes('*')) {
                    return (
                      <ul key={idx} className="prose-bullet-list">
                        {paragraph.split('\n').map((li, lidx) => {
                          if (li.trim().startsWith('*')) {
                            return <li key={lidx}>{li.replace('*', '').trim()}</li>;
                          }
                          return null;
                        })}
                      </ul>
                    );
                  }
                  return <p key={idx} className="prose-paragraph">{paragraph.trim()}</p>;
                })}
              </div>

              <div className="step-forward-bar">
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('visuals');
                  }}
                  className="btn-primary-kid"
                >
                  See Visual Examples <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: VISUAL EXAMPLES */}
          {activeTab === 'visuals' && (
            <div className="lesson-section-container">
              <div className="section-intro">
                <h3 className="section-title">🎨 Visual Examples & Real World Pictures</h3>
                <p className="section-desc">Tap each card to explore how this works in real life!</p>
              </div>

              <div className="visual-examples-grid">
                {lesson.visualExamples && lesson.visualExamples.map((ex, idx) => (
                  <div key={idx} className="visual-card-item">
                    <div className="visual-card-emoji-wrap">
                      <span className="visual-emoji">{ex.icon}</span>
                      {ex.tag && <span className="visual-tag-badge">{ex.tag}</span>}
                    </div>
                    <h4 className="visual-card-title">{ex.title}</h4>
                    <p className="visual-card-text">{ex.text}</p>
                  </div>
                ))}
              </div>

              <div className="step-forward-bar">
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('explanation');
                  }}
                  className="btn-secondary-kid"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" /> Back to Learn
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('activity');
                  }}
                  className="btn-primary-kid"
                >
                  Play Interactive Activity <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE ACTIVITY */}
          {activeTab === 'activity' && (
            <div className="lesson-section-container">
              <InteractiveActivity 
                activity={lesson.activity} 
                onComplete={() => {
                  playStarSound();
                }} 
              />

              <div className="step-forward-bar">
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('visuals');
                  }}
                  className="btn-secondary-kid"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" /> Back to Visuals
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('practice');
                  }}
                  className="btn-primary-kid"
                >
                  Try Practice Questions <ArrowRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: PRACTICE QUESTIONS */}
          {activeTab === 'practice' && (
            <div className="lesson-section-container">
              <div className="section-intro">
                <h3 className="section-title">✍️ Quick Check Practice</h3>
                <p className="section-desc">Test your understanding before the challenge quiz! No pressure, just learning.</p>
              </div>

              <div className="practice-cards-list">
                {lesson.practiceQuestions && lesson.practiceQuestions.map((pq, pidx) => {
                  const userAnswer = practiceAnswers[pidx];
                  const isRevealed = practiceRevealed[pidx];
                  const isCorrect = userAnswer === pq.correctAnswer;

                  return (
                    <div key={pq.id || pidx} className="practice-question-card">
                      <div className="practice-q-header">
                        <span className="practice-q-num">Practice {pidx + 1}</span>
                        {isRevealed && (
                          <span className={`status-pill ${isCorrect ? 'status-correct' : 'status-wrong'}`}>
                            {isCorrect ? 'Correct! 🎉' : 'Needs Another Look 🤔'}
                          </span>
                        )}
                      </div>
                      <p className="practice-q-text">{pq.question}</p>

                      <div className="practice-options-row">
                        {pq.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handlePracticeSelect(pidx, opt, pq.correctAnswer)}
                            className={`practice-opt-btn ${
                              isRevealed && opt === pq.correctAnswer ? 'opt-correct' :
                              isRevealed && userAnswer === opt && !isCorrect ? 'opt-wrong' :
                              userAnswer === opt ? 'opt-selected' : ''
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {isRevealed && (
                        <div className="practice-explanation-note">
                          <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{pq.explanation}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="step-forward-bar">
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('activity');
                  }}
                  className="btn-secondary-kid"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" /> Back to Activity
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTab('quiz');
                  }}
                  className="btn-primary-kid pulse-on-ready"
                >
                  Start Mini Quiz & Earn Badges! <Award className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: MINI QUIZ */}
          {activeTab === 'quiz' && (
            <div className="lesson-section-container">
              <QuizEngine
                quizQuestions={lesson.quiz || []}
                lessonTitle={lesson.title}
                onQuizCompleted={handleQuizDone}
                onNextLesson={onNextLesson}
                hasNextLesson={hasNextLesson}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
