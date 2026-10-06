export const SITE = {
  logo: 'babich',
  author: { ru: 'Никита Бабиченко', en: 'Nikita Babichenko' },
  // Ник в Telegram без @. Пусто — кнопка в шапке скрыта.
  telegram: 'babichweb',
};

export const LANGS = ['ru', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const T = {
  ru: {
    blog: 'Блог',
    blogTitle: 'Блог',
    blogLead: 'Мысли о жизни, работе и ИИ.',
    back: 'Назад',
    min: 'мин',
    empty: 'Постов пока нет.',
    otherLang: 'Read in English',
    about: 'Обо мне',
    privacy: 'Политика конфиденциальности',
    career: 'Карьера',
    hackathons: 'Хакатоны',
    hackLead: 'В составе команды «Хардкод», я капитан и отвечаю за бэкенд.',
    write: 'Написать в Telegram',
  },
  en: {
    blog: 'Blog',
    blogTitle: 'Blog',
    blogLead: 'Thoughts on life, work and AI.',
    back: 'Back',
    min: 'min',
    empty: 'No posts yet.',
    otherLang: 'Читать на русском',
    about: 'About',
    privacy: 'Privacy Policy',
    career: 'Career',
    hackathons: 'Hackathons',
    hackLead: 'With the Hardcode team, where I am the captain and handle the backend.',
    write: 'Message me on Telegram',
  },
} as const;
