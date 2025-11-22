import { atom } from 'nanostores';
import type { Language } from './translations';

// Get initial language from localStorage or default to Spanish
const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'es') {
      return saved;
    }
  }
  return 'es';
};

export const currentLanguage = atom<Language>(getInitialLanguage());

export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }
}

export function toggleLanguage() {
  const current = currentLanguage.get();
  setLanguage(current === 'es' ? 'en' : 'es');
}
