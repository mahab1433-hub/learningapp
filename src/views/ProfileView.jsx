import React, { useState } from 'react';
import { 
  User, 
  Award, 
  Flame, 
  Star, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Check, 
  Edit2,
  GraduationCap
} from 'lucide-react';
import { AVATARS, ACHIEVEMENTS } from '../data/achievementsData';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

export default function ProfileView({
  profile = {},
  onUpdateProfile,
  currentGrade,
  onGradeChange,
  totalXp = 0,
  starCoins = 0,
  streakDays = 1,
  completedCount = 0,
  unlockedBadgeIds = [],
  onOpenBadges,
  soundMuted = false,
  onToggleSound,
  onResetProgress
}) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name || 'Young Explorer');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSaveName = () => {
    if (nameInput.trim()) {
      playSuccessSound();
      onUpdateProfile({ ...profile, name: nameInput.trim() });
      setIsEditingName(false);
    }
  };

  const handleSelectAvatar = (avatar) => {
    playClickSound();
    playSuccessSound();
    onUpdateProfile({
      ...profile,
      avatar: avatar.emoji,
      avatarId: avatar.id,
      title: avatar.role
    });
  };

  return (
    <div className="profile-view-layout">
      {/* Profile Header Card */}
      <div className="profile-card-main">
        <div className="profile-avatar-display">
          <span className="big-avatar-emoji">{profile.avatar || '🦊'}</span>
          <span className="avatar-role-tag">{profile.title || 'Curious Learner'}</span>
        </div>

        <div className="profile-info-center">
          <div className="profile-name-row">
            {isEditingName ? (
              <div className="name-edit-form">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  maxLength={25}
                  className="input-kid-name"
                  autoFocus
                />
                <button onClick={handleSaveName} className="btn-save-name">
                  <Check className="w-4 h-4" /> Save
                </button>
              </div>
            ) : (
              <div className="name-display-group">
                <h1 className="profile-name-text">{profile.name || 'Young Explorer'}</h1>
                <button 
                  onClick={() => {
                    playClickSound();
                    setIsEditingName(true);
                  }}
                  className="btn-edit-pencil"
                  title="Change Name"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="profile-badges-strip">
            <span className="profile-pill grade-pill-color">
              <GraduationCap className="w-4 h-4 mr-1 inline" /> Grade {currentGrade} Student
            </span>
            <span className="profile-pill streak-pill-color">
              <Flame className="w-4 h-4 mr-1 inline text-amber-500 fill-amber-400" /> {streakDays} Day Streak
            </span>
          </div>
        </div>

        <div className="profile-quick-stats">
          <div className="stat-circle-box">
            <span className="circle-val">{totalXp}</span>
            <span className="circle-lbl">XP</span>
          </div>
          <div className="stat-circle-box">
            <span className="circle-val">{starCoins}</span>
            <span className="circle-lbl">Stars</span>
          </div>
          <div className="stat-circle-box">
            <span className="circle-val">{completedCount}</span>
            <span className="circle-lbl">Lessons</span>
          </div>
        </div>
      </div>

      {/* Choose Avatar Section */}
      <div className="profile-sub-section">
        <h3 className="section-title">🎨 Pick Your Learning Buddy Avatar</h3>
        <p className="section-subtitle">Choose an avatar that inspires your daily quests!</p>

        <div className="avatars-selection-grid">
          {AVATARS.map((av) => {
            const isSelected = (profile.avatarId === av.id) || (profile.avatar === av.emoji);
            return (
              <button
                key={av.id}
                onClick={() => handleSelectAvatar(av)}
                className={`avatar-choice-card ${isSelected ? 'avatar-card-selected' : ''}`}
              >
                <span className="choice-avatar-emoji">{av.emoji}</span>
                <span className="choice-avatar-name">{av.name}</span>
                <span className="choice-avatar-role">{av.role}</span>
                {isSelected && <span className="avatar-selected-tag">Active</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grade Selector on Profile */}
      <div className="profile-sub-section">
        <h3 className="section-title">🎒 Enrolled Grade</h3>
        <p className="section-subtitle">Change the grade you're actively exploring:</p>

        <div className="profile-grade-buttons">
          {[1, 2, 3, 4, 5].map((g) => (
            <button
              key={g}
              onClick={() => {
                playClickSound();
                onGradeChange(g);
              }}
              className={`btn-profile-grade ${currentGrade === g ? 'grade-btn-active' : ''}`}
            >
              Grade {g}
            </button>
          ))}
        </div>
      </div>

      {/* Settings & Reset Progress */}
      <div className="profile-sub-section">
        <h3 className="section-title">⚙️ App Settings & Audio</h3>

        <div className="settings-cards-list">
          <div className="settings-row-item">
            <div>
              <h4 className="setting-title">Game Sound Effects</h4>
              <p className="setting-desc">Play cheerful chimes, pops, and celebratory fanfares</p>
            </div>
            <button 
              onClick={() => {
                playClickSound();
                onToggleSound();
              }}
              className={`btn-toggle-switch ${!soundMuted ? 'switch-on' : 'switch-off'}`}
            >
              {!soundMuted ? 'Sound ON 🔊' : 'Sound OFF 🔇'}
            </button>
          </div>

          <div className="settings-row-item">
            <div>
              <h4 className="setting-title">Achievements Cabinet</h4>
              <p className="setting-desc">View all locked and unlocked badge trophies</p>
            </div>
            <button 
              onClick={() => {
                playClickSound();
                onOpenBadges();
              }}
              className="btn-secondary-kid"
            >
              <Award className="w-4 h-4 mr-1.5" /> View Badges
            </button>
          </div>

          {/* Reset progress */}
          <div className="settings-row-item reset-danger-row">
            <div>
              <h4 className="setting-title text-rose-600">Reset Learning Progress</h4>
              <p className="setting-desc">Clear completed lessons and reset stats to begin fresh</p>
            </div>
            {showResetConfirm ? (
              <div className="reset-confirm-group">
                <span className="reset-warn-text">Are you sure?</span>
                <button
                  onClick={() => {
                    playClickSound();
                    onResetProgress();
                    setShowResetConfirm(false);
                  }}
                  className="btn-danger-confirm"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="btn-ghost-small"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="btn-reset-outline"
              >
                <RotateCcw className="w-4 h-4 mr-1.5" /> Reset
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
