// LocalStorage Persistence System for Student Learning Progress

const STORAGE_KEY = 'wondersparks_primary_learning_v1';

const DEFAULT_DATA = {
  profile: {
    name: 'Young Explorer',
    avatar: '🦊',
    avatarId: 'fox',
    title: 'Curious Learner'
  },
  currentGrade: 1,
  totalXp: 150,
  starCoins: 45,
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyGoal: {
    target: 2,
    completedToday: 1,
    date: new Date().toISOString().split('T')[0]
  },
  completedLessons: {
    'g1-eng-u1-l1': true,
    'g1-math-u1-l1': true
  },
  quizScores: {
    'g1-eng-u1-l1': { score: 100, total: 5, stars: 3, date: new Date().toISOString() },
    'g1-math-u1-l1': { score: 80, total: 5, stars: 2, date: new Date().toISOString() }
  },
  unlockedBadges: [
    'first_step',
    'curious_mind'
  ],
  soundEnabled: true,
  voiceEnabled: true
};

export function loadProgress() {
  if (typeof window === 'undefined') return DEFAULT_DATA;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      saveProgress(DEFAULT_DATA);
      return DEFAULT_DATA;
    }
    const parsed = JSON.parse(saved);

    // Check daily streak & daily goal refresh
    const today = new Date().toISOString().split('T')[0];
    if (parsed.dailyGoal?.date !== today) {
      parsed.dailyGoal = {
        target: 2,
        completedToday: 0,
        date: today
      };
    }

    return { ...DEFAULT_DATA, ...parsed };
  } catch (e) {
    console.error('Failed to load learning progress', e);
    return DEFAULT_DATA;
  }
}

export function saveProgress(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save learning progress', e);
  }
}

export function markLessonComplete(lessonId, scorePercent, xpReward = 50, starsEarned = 3) {
  const data = loadProgress();

  const isFirstTime = !data.completedLessons[lessonId];
  data.completedLessons[lessonId] = true;

  if (isFirstTime) {
    data.totalXp = (data.totalXp || 0) + xpReward;
    data.starCoins = (data.starCoins || 0) + starsEarned * 5;
    if (data.dailyGoal) {
      data.dailyGoal.completedToday = (data.dailyGoal.completedToday || 0) + 1;
    }
  }

  saveProgress(data);
  return data;
}

export function saveQuizResult(lessonId, score, totalQuestions, stars) {
  const data = loadProgress();
  const percentage = Math.round((score / totalQuestions) * 100);

  data.quizScores[lessonId] = {
    score: percentage,
    rawScore: score,
    total: totalQuestions,
    stars,
    date: new Date().toISOString()
  };

  saveProgress(data);
  return data;
}

export function resetAllProgress() {
  saveProgress(DEFAULT_DATA);
  return DEFAULT_DATA;
}
