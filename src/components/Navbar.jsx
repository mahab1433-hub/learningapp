import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Star, 
  Volume2, 
  VolumeX, 
  GraduationCap, 
  Award,
  ChevronDown
} from 'lucide-react';
import { playClickSound, setSoundMuted, getSoundMuted } from '../utils/soundEffects';

export default function Navbar({ 
  currentGrade = 1, 
  onGradeChange, 
  starCoins = 0, 
  streakDays = 1, 
  profile = {},
  soundMuted = false,
  onToggleSound,
  onOpenProfile,
  onOpenBadges
}) {
  return (
    <header className="app-navbar">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <div className="navbar-brand" onClick={() => window.location.hash = '#home'}>
          <div className="logo-sparkle-box">
            <span className="logo-emoji">🌟</span>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">WonderSparks</span>
            <span className="brand-subtitle">Primary Learning Hub</span>
          </div>
        </div>

        {/* Grade Quick Switcher Dropdown */}
        <div className="navbar-grade-pill">
          <GraduationCap className="w-4 h-4 text-indigo-500" />
          <span className="grade-label-text">Grade:</span>
          <select 
            value={currentGrade} 
            onChange={(e) => {
              playClickSound();
              onGradeChange(Number(e.target.value));
            }}
            className="grade-select-dropdown"
          >
            {[1, 2, 3, 4, 5].map((g) => (
              <option key={g} value={g}>
                Grade {g}
              </option>
            ))}
          </select>
        </div>

        {/* User Stats: Streak, Stars, Audio, Avatar */}
        <div className="navbar-stats-cluster">
          {/* Daily Streak */}
          <div className="stat-pill streak-pill" title={`${streakDays} Day Learning Streak!`}>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse" />
            <span className="stat-val">{streakDays}</span>
            <span className="stat-label-hide-mobile">Day Streak</span>
          </div>

          {/* Star Coins */}
          <div className="stat-pill stars-pill" title={`${starCoins} Star Coins Earned`}>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
            <span className="stat-val">{starCoins}</span>
          </div>

          {/* Sound Toggle */}
          <button 
            onClick={() => {
              playClickSound();
              onToggleSound();
            }}
            className="stat-icon-btn"
            title={soundMuted ? "Unmute Sounds" : "Mute Sounds"}
            aria-label="Toggle Sound"
          >
            {soundMuted ? (
              <VolumeX className="w-5 h-5 text-gray-400" />
            ) : (
              <Volume2 className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Badges Trophy Button */}
          <button 
            onClick={() => {
              playClickSound();
              onOpenBadges();
            }}
            className="stat-icon-btn badge-btn"
            title="View Achievements"
          >
            <Award className="w-5 h-5 text-amber-500" />
          </button>

          {/* Student Profile Avatar */}
          <div 
            onClick={() => {
              playClickSound();
              onOpenProfile();
            }}
            className="navbar-avatar-btn"
            title="View Student Profile"
          >
            <span className="avatar-emoji">{profile.avatar || '🦊'}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
