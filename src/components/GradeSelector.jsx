import React from 'react';
import { GRADE_SUMMARIES, calculateGradeProgress } from '../data/curriculumData';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { playClickSound, playStarSound } from '../utils/soundEffects';

export default function GradeSelector({ currentGrade, onSelectGrade, completedLessons = {} }) {
  return (
    <div className="grade-selector-container">
      <div className="grade-selector-header">
        <h3 className="section-title">🎒 Choose Your Grade Level</h3>
        <p className="section-subtitle">Switch between grades anytime to explore tailored learning adventures!</p>
      </div>

      <div className="grade-cards-grid">
        {GRADE_SUMMARIES.map((item) => {
          const isSelected = currentGrade === item.grade;
          const progress = calculateGradeProgress(item.grade, completedLessons);

          return (
            <div
              key={item.grade}
              onClick={() => {
                if (!isSelected) {
                  playClickSound();
                  playStarSound();
                  onSelectGrade(item.grade);
                }
              }}
              className={`grade-select-card ${isSelected ? 'grade-card-selected' : ''}`}
              style={{
                '--grade-accent': item.color,
                '--grade-bg-soft': item.bgSoft
              }}
            >
              <div className="grade-card-top">
                <span className="grade-card-mascot">{item.mascot}</span>
                <span className="grade-card-age">{item.age}</span>
              </div>

              <div className="grade-card-body">
                <h4 className="grade-card-title">{item.title}</h4>
                <p className="grade-card-subtitle">{item.subtitle}</p>
                <p className="grade-card-topics">{item.topics}</p>
              </div>

              {/* Progress meter */}
              <div className="grade-card-progress">
                <div className="progress-info-row">
                  <span className="progress-text-label">Progress</span>
                  <span className="progress-val-text">{progress}%</span>
                </div>
                <div className="progress-track-small">
                  <div 
                    className="progress-fill-small"
                    style={{ width: `${progress}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>

              <div className="grade-card-action">
                {isSelected ? (
                  <span className="grade-active-badge">
                    <CheckCircle2 className="w-4 h-4 mr-1 inline" /> Active Grade
                  </span>
                ) : (
                  <span className="grade-select-cta">
                    Select Grade <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
