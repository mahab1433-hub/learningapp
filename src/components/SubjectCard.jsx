import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  Globe, 
  Play, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { calculateSubjectProgress } from '../data/curriculumData';
import { playClickSound } from '../utils/soundEffects';

const ICON_MAP = {
  BookOpen: BookOpen,
  Calculator: Calculator,
  Globe: Globe
};

export default function SubjectCard({ 
  subject, 
  grade = 1, 
  completedLessons = {}, 
  onOpenSubject,
  onOpenLesson 
}) {
  const IconComponent = ICON_MAP[subject.icon] || BookOpen;
  const progressData = calculateSubjectProgress(grade, subject.id, completedLessons);

  // Find first uncompleted lesson or first lesson
  let targetLesson = null;
  for (const unit of subject.units) {
    for (const lesson of unit.lessons) {
      if (!completedLessons[lesson.id]) {
        targetLesson = lesson;
        break;
      }
    }
    if (targetLesson) break;
  }
  if (!targetLesson && subject.units[0]?.lessons[0]) {
    targetLesson = subject.units[0].lessons[0];
  }

  const isComplete = progressData.percentage === 100;

  return (
    <div 
      className="subject-card"
      style={{
        '--subject-color': subject.themeColor,
        '--subject-bg': subject.bgColor
      }}
    >
      <div className="subject-card-top">
        <div className="subject-icon-box">
          <IconComponent className="w-8 h-8" />
        </div>
        <div className="subject-badge-pill">
          {progressData.completed}/{progressData.total} Lessons
        </div>
      </div>

      <div className="subject-card-content">
        <h3 className="subject-title">{subject.title}</h3>
        <p className="subject-tagline">{subject.tagline}</p>

        {/* Units summary list */}
        <div className="subject-units-peek">
          {subject.units.map((unit) => (
            <div key={unit.id} className="unit-peek-pill">
              <span className="unit-pill-dot" />
              <span className="unit-pill-title">{unit.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="subject-progress-block">
        <div className="progress-labels-row">
          <span className="progress-lbl">Mastery</span>
          <span className="progress-percent-val">{progressData.percentage}%</span>
        </div>
        <div className="progress-track-kid">
          <div 
            className="progress-fill-kid"
            style={{ width: `${progressData.percentage}%`, backgroundColor: subject.themeColor }}
          />
        </div>
      </div>

      {/* Action Footer */}
      <div className="subject-card-footer">
        <button
          onClick={() => {
            playClickSound();
            if (targetLesson) {
              onOpenLesson(targetLesson);
            } else {
              onOpenSubject(subject.id);
            }
          }}
          className="btn-subject-cta"
        >
          {isComplete ? (
            <>
              <CheckCircle className="w-4 h-4 mr-1 inline text-emerald-600" /> Review Lessons
            </>
          ) : progressData.completed > 0 ? (
            <>
              Continue Learning <ArrowRight className="w-4 h-4 ml-1 inline" />
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-1 inline fill-current" /> Start Learning
            </>
          )}
        </button>
      </div>
    </div>
  );
}
