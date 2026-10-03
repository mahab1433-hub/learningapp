import React from 'react';
import { 
  BarChart3, 
  Flame, 
  Star, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Globe,
  Trophy,
  Calendar,
  Clock
} from 'lucide-react';
import { 
  getCurriculumByGrade, 
  calculateGradeProgress, 
  calculateSubjectProgress, 
  getAllLessons,
  getLessonById
} from '../data/curriculumData';
import { ACHIEVEMENTS } from '../data/achievementsData';
import { playClickSound } from '../utils/soundEffects';

export default function ProgressView({ 
  currentGrade, 
  completedLessons = {}, 
  quizScores = {},
  totalXp = 0,
  starCoins = 0,
  streakDays = 1,
  unlockedBadgeIds = [],
  onOpenBadges,
  onOpenLesson
}) {
  const allLessons = getAllLessons();
  const completedCount = Object.keys(completedLessons).length;
  const gradeProgress = calculateGradeProgress(currentGrade, completedLessons);

  // Subject progresses for current grade
  const engProgress = calculateSubjectProgress(currentGrade, 'english', completedLessons);
  const mathProgress = calculateSubjectProgress(currentGrade, 'mathematics', completedLessons);
  const socProgress = calculateSubjectProgress(currentGrade, 'social_science', completedLessons);

  // Quiz statistics
  const quizEntries = Object.entries(quizScores);
  const totalQuizzesTaken = quizEntries.length;
  const averageScore = totalQuizzesTaken > 0
    ? Math.round(quizEntries.reduce((acc, [, val]) => acc + (val.score || 0), 0) / totalQuizzesTaken)
    : 0;

  // Unlocked achievements count
  const unlockedBadgesCount = ACHIEVEMENTS.filter(
    b => unlockedBadgeIds.includes(b.id) || b.unlockedByDefault
  ).length;

  return (
    <div className="progress-view-layout">
      {/* Overview Banner */}
      <div className="progress-hero-banner">
        <div className="progress-hero-main">
          <div className="hero-stat-badge">
            <BarChart3 className="w-5 h-5 text-indigo-600 mr-2" />
            <span>Learning Dashboard & Analytics</span>
          </div>
          <h1 className="progress-title">Your Learning Journey</h1>
          <p className="progress-subtitle">
            Celebrate every milestone, track quiz scores, and watch your knowledge bloom!
          </p>
        </div>

        <div className="progress-top-stats-grid">
          <div className="stat-card-gradient gradient-orange">
            <Flame className="w-7 h-7 text-amber-500 fill-amber-400" />
            <div className="stat-card-text">
              <span className="big-stat-val">{streakDays} Days</span>
              <span className="stat-subtext">Active Streak</span>
            </div>
          </div>

          <div className="stat-card-gradient gradient-yellow">
            <Star className="w-7 h-7 text-yellow-500 fill-yellow-400" />
            <div className="stat-card-text">
              <span className="big-stat-val">{starCoins}</span>
              <span className="stat-subtext">Star Coins</span>
            </div>
          </div>

          <div className="stat-card-gradient gradient-purple">
            <Sparkles className="w-7 h-7 text-indigo-500" />
            <div className="stat-card-text">
              <span className="big-stat-val">{totalXp} XP</span>
              <span className="stat-subtext">Experience Points</span>
            </div>
          </div>

          <div className="stat-card-gradient gradient-green">
            <Trophy className="w-7 h-7 text-emerald-500" />
            <div className="stat-card-text">
              <span className="big-stat-val">{unlockedBadgesCount} / {ACHIEVEMENTS.length}</span>
              <span className="stat-subtext">Badges Earned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grade Progress & Subject Breakdown */}
      <div className="progress-sections-grid">
        {/* Overall Grade Mastery */}
        <div className="progress-box-card">
          <div className="box-card-header">
            <h3 className="box-card-title">Grade {currentGrade} Overall Mastery</h3>
            <span className="progress-pill-percentage">{gradeProgress}%</span>
          </div>

          <p className="box-card-desc">
            Completed {Object.keys(completedLessons).filter(id => id.startsWith(`g${currentGrade}`)).length} lessons in Grade {currentGrade}.
          </p>

          <div className="master-progress-track">
            <div 
              className="master-progress-fill"
              style={{ width: `${gradeProgress}%` }}
            />
          </div>

          {/* Subject Level Progress Bars */}
          <div className="subject-progress-bars-list">
            {/* English */}
            <div className="subject-progress-row">
              <div className="subject-progress-meta">
                <span className="subject-dot dot-english" />
                <span className="subject-name-lbl">English</span>
                <span className="subject-count-lbl">{engProgress.completed}/{engProgress.total}</span>
              </div>
              <div className="sub-progress-bar">
                <div 
                  className="sub-progress-fill fill-english"
                  style={{ width: `${engProgress.percentage}%` }}
                />
              </div>
            </div>

            {/* Mathematics */}
            <div className="subject-progress-row">
              <div className="subject-progress-meta">
                <span className="subject-dot dot-math" />
                <span className="subject-name-lbl">Mathematics</span>
                <span className="subject-count-lbl">{mathProgress.completed}/{mathProgress.total}</span>
              </div>
              <div className="sub-progress-bar">
                <div 
                  className="sub-progress-fill fill-math"
                  style={{ width: `${mathProgress.percentage}%` }}
                />
              </div>
            </div>

            {/* Social Science */}
            <div className="subject-progress-row">
              <div className="subject-progress-meta">
                <span className="subject-dot dot-social" />
                <span className="subject-name-lbl">Social Science</span>
                <span className="subject-count-lbl">{socProgress.completed}/{socProgress.total}</span>
              </div>
              <div className="sub-progress-bar">
                <div 
                  className="sub-progress-fill fill-social"
                  style={{ width: `${socProgress.percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Performance Card */}
        <div className="progress-box-card">
          <div className="box-card-header">
            <h3 className="box-card-title">Quiz Performance</h3>
            <span className="quiz-avg-badge">{averageScore}% Avg</span>
          </div>

          <p className="box-card-desc">
            You've taken {totalQuizzesTaken} mini quizzes so far!
          </p>

          <div className="quiz-history-list">
            {quizEntries.length === 0 ? (
              <div className="empty-quiz-state">
                <p>No quizzes taken yet. Complete your first lesson to take a mini quiz!</p>
              </div>
            ) : (
              quizEntries.map(([lessonId, record]) => {
                const lesson = getLessonById(lessonId);
                return (
                  <div key={lessonId} className="quiz-history-item">
                    <div className="quiz-item-left">
                      <span className="quiz-item-icon">{lesson?.badgeIcon || '📝'}</span>
                      <div>
                        <h4 className="quiz-item-title">{lesson?.title || lessonId}</h4>
                        <span className="quiz-item-subject">{lesson?.subjectTitle || 'Lesson'}</span>
                      </div>
                    </div>
                    <div className="quiz-item-right">
                      <span className="quiz-score-val">{record.score}%</span>
                      <span className="quiz-star-display">{'★'.repeat(record.stars || 1)}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Badges Shelf Preview */}
      <div className="progress-badges-shelf">
        <div className="shelf-header">
          <div>
            <h3 className="shelf-title">Trophy Cabinet</h3>
            <p className="shelf-desc">Keep learning to collect all {ACHIEVEMENTS.length} badges!</p>
          </div>
          <button 
            onClick={() => {
              playClickSound();
              onOpenBadges();
            }}
            className="btn-shelf-action"
          >
            View All Badges <Award className="w-4 h-4 ml-1 inline text-amber-500" />
          </button>
        </div>

        <div className="shelf-badges-row">
          {ACHIEVEMENTS.slice(0, 6).map((badge) => {
            const isUnlocked = unlockedBadgeIds.includes(badge.id) || badge.unlockedByDefault;
            return (
              <div 
                key={badge.id}
                className={`shelf-badge-item ${isUnlocked ? 'badge-on' : 'badge-off'}`}
                title={badge.name}
              >
                <div className="badge-circ-icon">
                  <span>{badge.icon}</span>
                </div>
                <span className="shelf-badge-name">{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
