import React, { useState } from 'react';
import { 
  BookOpen, 
  Calculator, 
  Globe, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Star, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { getCurriculumByGrade, GRADE_SUMMARIES } from '../data/curriculumData';
import { playClickSound } from '../utils/soundEffects';

const SUBJECT_FILTER_OPTIONS = [
  { id: 'all', label: 'All Subjects', icon: Layers },
  { id: 'english', label: 'English', icon: BookOpen },
  { id: 'mathematics', label: 'Mathematics', icon: Calculator },
  { id: 'social_science', label: 'Social Science', icon: Globe }
];

export default function CoursesView({ 
  currentGrade, 
  onGradeChange, 
  completedLessons = {}, 
  quizScores = {},
  onOpenLesson 
}) {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState('all');

  const curriculum = getCurriculumByGrade(currentGrade);
  const subjectsList = Object.values(curriculum.subjects).filter((s) => {
    if (selectedSubjectFilter === 'all') return true;
    return s.id === selectedSubjectFilter;
  });

  return (
    <div className="courses-view-layout">
      {/* Header and Grade Pills */}
      <div className="courses-header-banner">
        <div>
          <h1 className="courses-title">Grade {currentGrade} Courses & Lessons</h1>
          <p className="courses-subtitle">
            Follow the curriculum pathway: Subject → Course → Unit → Lesson
          </p>
        </div>

        {/* Grade Switcher Tabs */}
        <div className="grade-pills-bar">
          {GRADE_SUMMARIES.map((g) => (
            <button
              key={g.grade}
              onClick={() => {
                playClickSound();
                onGradeChange(g.grade);
              }}
              className={`grade-pill-item ${currentGrade === g.grade ? 'grade-pill-active' : ''}`}
            >
              <span>{g.mascot}</span>
              <span>{g.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Subject Filter Bar */}
      <div className="subject-filter-tabs">
        {SUBJECT_FILTER_OPTIONS.map((item) => {
          const Icon = item.icon;
          const isActive = selectedSubjectFilter === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                playClickSound();
                setSelectedSubjectFilter(item.id);
              }}
              className={`subject-filter-chip ${isActive ? 'filter-chip-active' : ''}`}
            >
              <Icon className="w-4 h-4 mr-1.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Structured Curriculum Hierarchy Tree */}
      <div className="subjects-curriculum-list">
        {subjectsList.map((subject) => (
          <div 
            key={subject.id} 
            className="subject-track-section"
            style={{ '--track-color': subject.themeColor }}
          >
            {/* Subject Banner */}
            <div className="subject-track-header" style={{ backgroundColor: subject.bgColor }}>
              <div className="track-title-group">
                <span className="track-icon-badge" style={{ backgroundColor: subject.themeColor }}>
                  {subject.id === 'english' && <BookOpen className="w-6 h-6 text-white" />}
                  {subject.id === 'mathematics' && <Calculator className="w-6 h-6 text-white" />}
                  {subject.id === 'social_science' && <Globe className="w-6 h-6 text-white" />}
                </span>
                <div>
                  <h2 className="track-name" style={{ color: subject.themeColor }}>{subject.title}</h2>
                  <p className="track-desc">{subject.tagline}</p>
                </div>
              </div>
            </div>

            {/* Units & Lessons */}
            <div className="units-container">
              {subject.units.map((unit) => (
                <div key={unit.id} className="unit-card-block">
                  <div className="unit-card-header">
                    <div className="unit-badge-indicator">
                      Unit {unit.unitNumber}
                    </div>
                    <div>
                      <h3 className="unit-block-title">{unit.title}</h3>
                      <p className="unit-block-desc">{unit.description}</p>
                    </div>
                  </div>

                  {/* Lessons Grid in Unit */}
                  <div className="lessons-grid">
                    {unit.lessons.map((lesson) => {
                      const isCompleted = !!completedLessons[lesson.id];
                      const scoreInfo = quizScores[lesson.id];

                      return (
                        <div 
                          key={lesson.id} 
                          className={`lesson-card ${isCompleted ? 'lesson-card-finished' : ''}`}
                        >
                          <div className="lesson-card-top">
                            <span className="lesson-badge-icon">{lesson.badgeIcon || '📘'}</span>
                            <div className="lesson-meta-badges">
                              <span className="meta-badge-duration">
                                <Clock className="w-3.5 h-3.5 mr-1 inline" /> {lesson.duration}
                              </span>
                              <span className="meta-badge-xp">
                                <Sparkles className="w-3.5 h-3.5 mr-1 inline text-amber-500" /> +{lesson.xp || 50} XP
                              </span>
                            </div>
                          </div>

                          <div className="lesson-card-main">
                            <span className="course-breadcrumb-text">Course: {lesson.courseTitle || subject.title}</span>
                            <h4 className="lesson-title-text">{lesson.title}</h4>
                            <p className="lesson-summary-snippet">{lesson.summary}</p>
                          </div>

                          {/* Completed Status & Stars */}
                          {isCompleted && (
                            <div className="lesson-completed-ribbon">
                              <div className="ribbon-text">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1" />
                                <span>Completed!</span>
                              </div>
                              {scoreInfo && (
                                <div className="quiz-score-pill">
                                  <span>{scoreInfo.score}%</span>
                                  <span className="quiz-stars-text">{'★'.repeat(scoreInfo.stars || 1)}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Card Action */}
                          <div className="lesson-card-footer">
                            <button
                              onClick={() => {
                                playClickSound();
                                onOpenLesson({
                                  ...lesson,
                                  grade: currentGrade,
                                  subjectId: subject.id,
                                  subjectTitle: subject.title,
                                  subjectThemeColor: subject.themeColor,
                                  subjectBgColor: subject.bgColor
                                });
                              }}
                              className={`btn-lesson-action ${isCompleted ? 'btn-action-review' : 'btn-action-start'}`}
                            >
                              {isCompleted ? (
                                <>Review Lesson <ChevronRight className="w-4 h-4 ml-1 inline" /></>
                              ) : (
                                <><Play className="w-4 h-4 mr-1 inline fill-current" /> Start Lesson</>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
