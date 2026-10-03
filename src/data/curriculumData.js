// Master Curriculum Registry for Grades 1 to 5
// Subjects: English, Mathematics, Social Science

import { grade1Data } from './grades/grade1.js';
import { grade2Data } from './grades/grade2.js';
import { grade3Data } from './grades/grade3.js';
import { grade4Data } from './grades/grade4.js';
import { grade5Data } from './grades/grade5.js';

export const CURRICULUM = {
  1: grade1Data,
  2: grade2Data,
  3: grade3Data,
  4: grade4Data,
  5: grade5Data
};

export const GRADE_SUMMARIES = [
  {
    grade: 1,
    title: "Grade 1",
    subtitle: "Little Explorers",
    age: "Ages 5-6",
    mascot: "🌟",
    color: "#0284C7",
    bgSoft: "#E0F2FE",
    topics: "Alphabet, Phonics, Counting to 50, Basic Shapes, Myself & Family"
  },
  {
    grade: 2,
    title: "Grade 2",
    subtitle: "Curious Creators",
    age: "Ages 6-7",
    mascot: "🚀",
    color: "#10B981",
    bgSoft: "#D1FAE5",
    topics: "Nouns, Verbs, Place Value, Clocks, Money, Community Helpers"
  },
  {
    grade: 3,
    title: "Grade 3",
    subtitle: "Active Builders",
    age: "Ages 7-8",
    mascot: "⚡",
    color: "#8B5CF6",
    bgSoft: "#EDE9FE",
    topics: "Parts of Speech, Tenses, Fractions Intro, Maps & Directions, Festivals"
  },
  {
    grade: 4,
    title: "Grade 4",
    subtitle: "Smart Navigators",
    age: "Ages 8-9",
    mascot: "🏆",
    color: "#F59E0B",
    bgSoft: "#FEF3C7",
    topics: "Prepositions, Factors, Multiples, Decimals, Indian Geography & Heritage"
  },
  {
    grade: 5,
    title: "Grade 5",
    subtitle: "Junior Scholars",
    age: "Ages 9-10",
    mascot: "🎓",
    color: "#EC4899",
    bgSoft: "#FCE7F3",
    topics: "Active/Passive Voice, Percentages, Geometry, Constitution & Democracy"
  }
];

export function getCurriculumByGrade(grade) {
  return CURRICULUM[grade] || CURRICULUM[1];
}

export function getAllLessons(grade = null) {
  const lessons = [];
  const gradesToScan = grade ? [grade] : [1, 2, 3, 4, 5];

  gradesToScan.forEach(g => {
    const data = CURRICULUM[g];
    if (!data) return;

    Object.values(data.subjects).forEach(subject => {
      subject.units.forEach(unit => {
        unit.lessons.forEach(lesson => {
          lessons.push({
            ...lesson,
            grade: g,
            subjectId: subject.id,
            subjectTitle: subject.title,
            subjectThemeColor: subject.themeColor,
            subjectBgColor: subject.bgColor
          });
        });
      });
    });
  });

  return lessons;
}

export function getLessonById(lessonId) {
  const all = getAllLessons();
  return all.find(l => l.id === lessonId) || null;
}

export function getNextLesson(currentLessonId) {
  const all = getAllLessons();
  const index = all.findIndex(l => l.id === currentLessonId);
  if (index !== -1 && index + 1 < all.length) {
    return all[index + 1];
  }
  return null;
}

export function calculateGradeProgress(grade, completedLessonsMap = {}) {
  const gradeLessons = getAllLessons(grade);
  if (!gradeLessons.length) return 0;

  const completedCount = gradeLessons.filter(l => !!completedLessonsMap[l.id]).length;
  return Math.round((completedCount / gradeLessons.length) * 100);
}

export function calculateSubjectProgress(grade, subjectId, completedLessonsMap = {}) {
  const subjectLessons = getAllLessons(grade).filter(l => l.subjectId === subjectId);
  if (!subjectLessons.length) return 0;

  const completedCount = subjectLessons.filter(l => !!completedLessonsMap[l.id]).length;
  return {
    completed: completedCount,
    total: subjectLessons.length,
    percentage: Math.round((completedCount / subjectLessons.length) * 100)
  };
}
