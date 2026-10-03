import React from 'react';
import { Home, BookOpen, BarChart3, User } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function BottomNav({ activeTab = 'home', onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="bottom-navigation-bar">
      <div className="bottom-nav-inner">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playClickSound();
                onTabChange(tab.id);
              }}
              className={`bottom-nav-item ${isActive ? 'bottom-nav-active' : ''}`}
              aria-label={tab.label}
            >
              <div className="nav-icon-wrapper">
                <Icon className="w-5 h-5" />
              </div>
              <span className="bottom-nav-label">{tab.label}</span>
              {isActive && <div className="active-nav-indicator" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
