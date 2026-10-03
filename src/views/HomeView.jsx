import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Target, 
  Flame, 
  Star, 
  Award, 
  BookOpen, 
  Clock, 
  Play, 
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import GradeSelector from '../components/GradeSelector';
import SubjectCard from '../components/SubjectCard';
import { getCurriculumByGrade, getAllLessons, calculateGradeProgress } from '../data/curriculumData';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

export default function HomeView({ 
  currentGrade, 
  onGradeChange, 
  completedLessons = {}, 
  quizScores = {},
  dailyGoal = { target: 2, completedToday: 0 },
  streakDays = 1,
  starCoins = 0,
  totalXp = 0,
  onOpenLesson,
  onNavigateTab
}) {
  const curriculum = getCurriculumByGrade(currentGrade);
  const gradeLessons = getAllLessons(currentGrade);
  const gradeProgress = calculateGradeProgress(currentGrade, completedLessons);

  // Find Continue Learning candidate (first uncompleted or last played)
  let continueLesson = null;
  for (const lesson of gradeLessons) {
    if (!completedLessons[lesson.id]) {
      continueLesson = lesson;
      break;
    }
  }
  if (!continueLesson && gradeLessons.length > 0) {
    continueLesson = gradeLessons[0];
  }

  // Calculate daily goal percentage
  const goalProgressPercent = Math.min(
    100,
    Math.round(((dailyGoal.completedToday || 0) / (dailyGoal.target || 2)) * 100)
  );

  return (
    <div className="home-view-layout">
      {/* Hero Learning Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <div className="hero-tag-chip">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Primary School Learning Adventure</span>
          </div>

          <h1 className="hero-headline">
            Learn, Play & Grow in <span className="highlight-text">Grade {currentGrade}</span>!
          </h1>
          <p className="hero-subheading">
            {curriculum.gradeDescription || "Explore English, Mathematics, and Social Science through bite-sized lessons, interactive activities, and fun reward quizzes!"}
          </p>

          <div className="hero-cta-cluster">
            {continueLesson && (
              <button
                onClick={() => {
                  playClickSound();
                  onOpenLesson(continueLesson);
                }}
                className="btn-hero-primary"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Start Learning Now
              </button>
            )}
            <button
              onClick={() => {
                playClickSound();
                onNavigateTab('courses');
              }}
              className="btn-hero-secondary"
            >
              Explore All Courses <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Mascot / Floating Card Graphic */}
        <div className="hero-visual-mascot">
          <div className="floating-mascot-card">
            <span className="hero-mascot-emoji">{curriculum.mascot || "🌟"}</span>
            <div className="mascot-bubble">
              <span className="mascot-quote">"Ready for today's quest?"</span>
            </div>
            <div className="hero-mini-stat">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 inline mr-1" />
              <span>{starCoins} Star Coins Collected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Learning Goal & Overview Widget */}
      <section className="learning-overview-row">
        {/* Daily Goal Card */}
        <div className="overview-card daily-goal-card">
          <div className="card-top-icon-row">
            <div className="goal-icon-badge">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="goal-status-chip">
              {dailyGoal.completedToday >= dailyGoal.target ? 'Goal Met! 🎉' : 'Daily Goal'}
            </span>
          </div>

          <h3 className="goal-title">Today's Target</h3>
          <p className="goal-metric-text">
            <strong>{dailyGoal.completedToday || 0}</strong> of <strong>{dailyGoal.target || 2}</strong> lessons completed
          </p>

          {/* Goal Progress Ring/Bar */}
          <div className="goal-progress-bar-wrap">
            <div className="goal-bar-track">
              <div 
                className="goal-bar-fill"
                style={{ width: `${goalProgressPercent}%` }}
              />
            </div>
            <span className="goal-percentage">{goalProgressPercent}%</span>
          </div>

          <p className="goal-encourage-msg">
            {dailyGoal.completedToday >= dailyGoal.target
              ? 'Awesome job! You reached today\'s goal!'
              : 'Complete 1 more lesson to maintain your streak!'}
          </p>
        </div>

        {/* Progress Overview Card */}
        <div className="overview-card progress-overview-card">
          <div className="card-top-icon-row">
            <div className="goal-icon-badge badge-green">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="grade-badge-chip">Grade {currentGrade} Overall</span>
          </div>

          <h3 className="goal-title">Curriculum Progress</h3>
          <p className="goal-metric-text">
            <strong>{Object.keys(completedLessons).filter(id => id.startsWith(`g${currentGrade}`)).length}</strong> of <strong>{gradeLessons.length}</strong> lessons finished
          </p>

          <div className="goal-progress-bar-wrap">
            <div className="goal-bar-track">
              <div 
                className="goal-bar-fill fill-emerald"
                style={{ width: `${gradeProgress}%` }}
              />
            </div>
            <span className="goal-percentage">{gradeProgress}%</span>
          </div>

          <div className="mini-stats-pills">
            <span className="mini-pill">🔥 {streakDays} Day Streak</span>
            <span className="mini-pill">⭐ {starCoins} Stars</span>
            <span className="mini-pill">⚡ {totalXp} XP</span>
          </div>
        </div>

        {/* Continue Learning Quick Jump Card */}
        {continueLesson && (
          <div className="overview-card continue-learning-card">
            <div className="card-top-icon-row">
              <div className="goal-icon-badge badge-amber">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <span className="continue-chip">Up Next</span>
            </div>

            <span className="continue-subject-tag" style={{ color: continueLesson.subjectThemeColor }}>
              {continueLesson.subjectTitle}
            </span>
            <h4 className="continue-lesson-title">{continueLesson.title}</h4>
            <p className="continue-lesson-unit">{continueLesson.unitTitle}</p>

            <button
              onClick={() => {
                playClickSound();
                onOpenLesson(continueLesson);
              }}
              className="btn-continue-now"
            >
              Resume Lesson <ArrowRight className="w-4 h-4 ml-1 inline" />
            </button>
          </div>
        )}
      </section>

      {/* Grade Selector Section */}
      <section className="home-section">
        <GradeSelector
          currentGrade={currentGrade}
          onSelectGrade={onGradeChange}
          completedLessons={completedLessons}
        />
      </section>

      {/* Three Main Subjects Section for Current Grade */}
      <section className="home-section subjects-section">
        <div className="section-title-header">
          <div>
            <h2 className="section-main-title">
              Grade {currentGrade} Subjects
            </h2>
            <p className="section-main-subtitle">
              Choose a subject to dive into structured, interactive units and lessons!
            </p>
          </div>
          <button 
            onClick={() => onNavigateTab('courses')}
            className="btn-link-action"
          >
            View Full Curriculum <ArrowRight className="w-4 h-4 ml-1 inline" />
          </button>
        </div>

        <div className="subject-cards-grid">
          {Object.values(curriculum.subjects).map((subj) => (
            <SubjectCard
              key={subj.id}
              subject={subj}
              grade={currentGrade}
              completedLessons={completedLessons}
              onOpenSubject={() => onNavigateTab('courses')}
              onOpenLesson={onOpenLesson}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
