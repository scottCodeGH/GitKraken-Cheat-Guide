import { useLocalStorage } from './useLocalStorage';
import { UserProgress } from '@/types';

const initialProgress: UserProgress = {
  completedSections: [],
  bookmarkedSections: [],
};

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<UserProgress>('gitkraken-guide-progress', initialProgress);

  const markAsCompleted = (sectionId: string) => {
    setProgress(prev => ({
      ...prev,
      completedSections: [...new Set([...prev.completedSections, sectionId])],
    }));
  };

  const markAsIncomplete = (sectionId: string) => {
    setProgress(prev => ({
      ...prev,
      completedSections: prev.completedSections.filter(id => id !== sectionId),
    }));
  };

  const toggleBookmark = (sectionId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarkedSections: prev.bookmarkedSections.includes(sectionId)
        ? prev.bookmarkedSections.filter(id => id !== sectionId)
        : [...prev.bookmarkedSections, sectionId],
    }));
  };

  const setLastVisited = (sectionId: string) => {
    setProgress(prev => ({
      ...prev,
      lastVisited: sectionId,
    }));
  };

  const isCompleted = (sectionId: string) => progress.completedSections.includes(sectionId);
  const isBookmarked = (sectionId: string) => progress.bookmarkedSections.includes(sectionId);

  return {
    progress,
    markAsCompleted,
    markAsIncomplete,
    toggleBookmark,
    setLastVisited,
    isCompleted,
    isBookmarked,
  };
}
