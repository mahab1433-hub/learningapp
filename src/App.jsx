import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import HomeView from './views/HomeView';
import CoursesView from './views/CoursesView';
import ProgressView from './views/ProgressView';
import ProfileView from './views/ProfileView';
import LessonModal from './components/LessonModal';
import BadgesModal from './components/BadgesModal';
import { 
  loadProgress, 
  saveProgress, 
  markLessonComplete, 
  saveQuizResult, 
  resetAllProgress 
} from './utils/storage';
import { setSoundMuted, getSoundMuted, playFanfareSound, playStarSound } from './utils/soundEffects';
import { getNextLesson, getAllLessons } from './data/curriculumData';
import confetti from 'canvas-confetti';
import './App.css';

export default function App() {
  const [userData, setUserData] = useState(() => loadProgress());
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'courses' | 'progress' | 'profile'
  const [activeLesson, setActiveLesson] = useState(null);
  const [isBadgesOpen, setIsBadgesOpen] = useState(false);
  const [soundMuted, setSoundMutedState] = useState(() => getSoundMuted());

  // Listen to hash change for basic routing support
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'courses', 'progress', 'profile'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const next = !soundMuted;
    setSoundMuted(next);
    setSoundMutedState(next);
  };

  const handleGradeChange = (grade) => {
    const updated = { ...userData, currentGrade: grade };
    setUserData(updated);
    saveProgress(updated);
  };

  const handleUpdateProfile = (profile) => {
    const updated = { ...userData, profile };
    setUserData(updated);
    saveProgress(updated);
  };

  const handleOpenLesson = (lesson) => {
    setActiveLesson(lesson);
  };

  const handleLessonCompleted = (lessonId, scorePercent, xp = 50, stars = 3) => {
    let updated = markLessonComplete(lessonId, scorePercent, xp, stars);
    updated = saveQuizResult(lessonId, scorePercent, 5, stars);

    // Check achievement unlock conditions
    const newBadges = [...(updated.unlockedBadges || [])];
    const completedCount = Object.keys(updated.completedLessons || {}).length;

    if (completedCount >= 1 && !newBadges.includes('first_step')) {
      newBadges.push('first_step');
    }
    if (scorePercent === 100 && !newBadges.includes('quiz_ace')) {
      newBadges.push('quiz_ace');
    }
    if (updated.starCoins >= 50 && !newBadges.includes('star_collector')) {
      newBadges.push('star_collector');
    }

    updated.unlockedBadges = newBadges;
    saveProgress(updated);
    setUserData(updated);

    // Confetti celebration
    if (scorePercent >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleNextLessonFromModal = () => {
    if (!activeLesson) return;
    const next = getNextLesson(activeLesson.id);
    if (next) {
      playStarSound();
      setActiveLesson(next);
    } else {
      setActiveLesson(null);
    }
  };

  const handleResetProgress = () => {
    const reset = resetAllProgress();
    setUserData(reset);
  };

  return (
    <div className="app-root-container">
      {/* Top Navigation */}
      <Navbar
        currentGrade={userData.currentGrade || 1}
        onGradeChange={handleGradeChange}
        starCoins={userData.starCoins || 0}
        streakDays={userData.streakDays || 1}
        profile={userData.profile || {}}
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        onOpenProfile={() => handleTabChange('profile')}
        onOpenBadges={() => setIsBadgesOpen(true)}
      />

      {/* Main View Router */}
      <main className="app-main-content">
        {activeTab === 'home' && (
          <HomeView
            currentGrade={userData.currentGrade || 1}
            onGradeChange={handleGradeChange}
            completedLessons={userData.completedLessons || {}}
            quizScores={userData.quizScores || {}}
            dailyGoal={userData.dailyGoal || { target: 2, completedToday: 0 }}
            streakDays={userData.streakDays || 1}
            starCoins={userData.starCoins || 0}
            totalXp={userData.totalXp || 0}
            onOpenLesson={handleOpenLesson}
            onNavigateTab={handleTabChange}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesView
            currentGrade={userData.currentGrade || 1}
            onGradeChange={handleGradeChange}
            completedLessons={userData.completedLessons || {}}
            quizScores={userData.quizScores || {}}
            onOpenLesson={handleOpenLesson}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            currentGrade={userData.currentGrade || 1}
            completedLessons={userData.completedLessons || {}}
            quizScores={userData.quizScores || {}}
            totalXp={userData.totalXp || 0}
            starCoins={userData.starCoins || 0}
            streakDays={userData.streakDays || 1}
            unlockedBadgeIds={userData.unlockedBadges || []}
            onOpenBadges={() => setIsBadgesOpen(true)}
            onOpenLesson={handleOpenLesson}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            profile={userData.profile || {}}
            onUpdateProfile={handleUpdateProfile}
            currentGrade={userData.currentGrade || 1}
            onGradeChange={handleGradeChange}
            totalXp={userData.totalXp || 0}
            starCoins={userData.starCoins || 0}
            streakDays={userData.streakDays || 1}
            completedCount={Object.keys(userData.completedLessons || {}).length}
            unlockedBadgeIds={userData.unlockedBadges || []}
            onOpenBadges={() => setIsBadgesOpen(true)}
            soundMuted={soundMuted}
            onToggleSound={handleToggleSound}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Child-Friendly Bottom Navigation (Mobile & Tablet) */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Lesson Player Modal */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
          onLessonCompleted={handleLessonCompleted}
          onNextLesson={handleNextLessonFromModal}
          hasNextLesson={!!getNextLesson(activeLesson.id)}
          isAlreadyCompleted={!!userData.completedLessons[activeLesson.id]}
        />
      )}

      {/* Badges Cabinet Modal */}
      {isBadgesOpen && (
        <BadgesModal
          unlockedBadgeIds={userData.unlockedBadges || []}
          onClose={() => setIsBadgesOpen(false)}
        />
      )}
    </div>
  );
}
