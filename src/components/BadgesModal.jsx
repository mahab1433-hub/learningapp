import React from 'react';
import { X, Award, CheckCircle2, Lock, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/achievementsData';
import { playClickSound } from '../utils/soundEffects';

export default function BadgesModal({ 
  unlockedBadgeIds = [], 
  onClose 
}) {
  return (
    <div className="modal-overlay">
      <div className="badges-modal-dialog">
        <div className="badges-modal-header">
          <div className="badges-title-wrap">
            <span className="badges-header-icon">🏆</span>
            <div>
              <h3 className="badges-main-title">Achievement Badges</h3>
              <p className="badges-subtitle">Collect shiny trophies as you learn and conquer quizzes!</p>
            </div>
          </div>
          <button 
            onClick={() => {
              playClickSound();
              onClose();
            }} 
            className="btn-close-modal"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="badges-grid-container">
          {ACHIEVEMENTS.map((badge) => {
            const isUnlocked = unlockedBadgeIds.includes(badge.id) || badge.unlockedByDefault;

            return (
              <div 
                key={badge.id} 
                className={`badge-card ${isUnlocked ? 'badge-card-unlocked' : 'badge-card-locked'}`}
              >
                <div className="badge-icon-bubble">
                  <span className="badge-emoji">{badge.icon}</span>
                  {isUnlocked ? (
                    <span className="badge-status-star">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    </span>
                  ) : (
                    <span className="badge-status-lock">
                      <Lock className="w-3.5 h-3.5 text-gray-500" />
                    </span>
                  )}
                </div>

                <div className="badge-details">
                  <span className="badge-category-tag">{badge.category}</span>
                  <h4 className="badge-name">{badge.name}</h4>
                  <p className="badge-description">{badge.description}</p>
                  <p className="badge-requirement">
                    <strong>Goal:</strong> {badge.requirement}
                  </p>
                </div>

                <div className="badge-footer-state">
                  {isUnlocked ? (
                    <span className="unlocked-text">
                      <CheckCircle2 className="w-4 h-4 mr-1 inline text-emerald-600" /> Unlocked
                    </span>
                  ) : (
                    <span className="locked-text">Keep Learning to Unlock</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
