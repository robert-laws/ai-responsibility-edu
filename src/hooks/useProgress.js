import { useState, useEffect, useCallback } from 'react';
import { topics } from '../data/lessons';

const STORAGE_KEY = 'ai-responsibility-progress';

const getStoredProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { lessons: {}, quizzes: {} };
  } catch {
    return { lessons: {}, quizzes: {} };
  }
};

const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    console.warn('Failed to save progress to localStorage');
  }
};

export function useProgress() {
  const [progress, setProgress] = useState(getStoredProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const isLessonComplete = useCallback(
    (topicId, lessonId) => {
      const key = `${topicId}:${lessonId}`;
      return !!progress.lessons[key];
    },
    [progress.lessons]
  );

  const markLessonComplete = useCallback((topicId, lessonId) => {
    const key = `${topicId}:${lessonId}`;
    setProgress((prev) => ({
      ...prev,
      lessons: {
        ...prev.lessons,
        [key]: { completedAt: new Date().toISOString() },
      },
    }));
  }, []);

  const getTopicProgress = useCallback(
    (topicId) => {
      const topic = topics.find((t) => t.id === topicId);
      if (!topic) return 0;

      const completedCount = topic.lessons.filter((lesson) =>
        isLessonComplete(topicId, lesson.id)
      ).length;

      return Math.round((completedCount / topic.lessons.length) * 100);
    },
    [isLessonComplete]
  );

  const getQuizScore = useCallback(
    (topicId) => {
      return progress.quizzes[topicId] || null;
    },
    [progress.quizzes]
  );

  const saveQuizScore = useCallback((topicId, score, total, percentage) => {
    setProgress((prev) => ({
      ...prev,
      quizzes: {
        ...prev.quizzes,
        [topicId]: {
          score,
          total,
          percentage,
          completedAt: new Date().toISOString(),
        },
      },
    }));
  }, []);

  const getOverallProgress = useCallback(() => {
    const totalLessons = topics.reduce((sum, t) => sum + t.lessons.length, 0);
    const completedLessons = Object.keys(progress.lessons).length;
    return Math.round((completedLessons / totalLessons) * 100);
  }, [progress.lessons]);

  const resetProgress = useCallback(() => {
    setProgress({ lessons: {}, quizzes: {} });
  }, []);

  return {
    isLessonComplete,
    markLessonComplete,
    getTopicProgress,
    getQuizScore,
    saveQuizScore,
    getOverallProgress,
    resetProgress,
  };
}
