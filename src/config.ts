export const SITE = {
  logo: 'babich',
  author: { ru: 'Никита Бабиченко', en: 'Nikita Babichenko' },
  // Ник в Telegram без @. Пусто — кнопка в шапке скрыта.
  telegram: '',
};

export const LANGS = ['ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const T = {
  ru: {
    blog: 'Блог',
    blogTitle: 'Блог',
    blogLead: 'Заметки о жизни, работе и том, что вокруг.',
    back: 'Назад',
    min: 'мин',
    empty: 'Постов пока нет.',
    otherLang: 'Read in English',
  },
  en: {
    blog: 'Blog',
    blogTitle: 'Blog',
    blogLead: 'Notes on life, work and everything around.',
    back: 'Back',
    min: 'min',
    empty: 'No posts yet.',
    otherLang: 'Читать на русском',
  },
} as const;
