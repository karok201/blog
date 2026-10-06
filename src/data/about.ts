import type { Lang } from '../config';

type Text = Record<Lang, string>;

export interface Job {
  company: string;
  period: Text;
  grades?: { title: string; period: Text }[];
}

export interface Hackathon {
  when: Text;
  event: Text;
  result: Text;
  project?: { name: Text; about: Text; stack: string[] };
}

export const INTRO: Text = {
  ru: 'Software Engineer. Довожу продукты от идеи до продакшена и руковожу хакатон-командой «Хардкод». Здесь пишу о жизни, работе и ИИ.',
  en: 'Software Engineer. I take products from idea to production and lead the hackathon team Hardcode. Here I write about life, work and AI.',
};

export const JOBS: Job[] = [
  {
    company: 'Lachestry',
    period: { ru: 'март 2023 — сейчас', en: 'Mar 2023 — now' },
    grades: [
      { title: 'Senior 1', period: { ru: 'сентябрь 2026 — сейчас', en: 'Sep 2026 — now' } },
      { title: 'Middle 3', period: { ru: 'сентябрь 2025 — сентябрь 2026', en: 'Sep 2025 — Sep 2026' } },
      { title: 'Middle 2', period: { ru: 'март 2025 — сентябрь 2025', en: 'Mar 2025 — Sep 2025' } },
      { title: 'Middle 1', period: { ru: 'сентябрь 2024 — март 2025', en: 'Sep 2024 — Mar 2025' } },
      { title: 'Junior 3', period: { ru: 'март 2024 — сентябрь 2024', en: 'Mar 2024 — Sep 2024' } },
      { title: 'Junior 2', period: { ru: 'июнь 2023 — март 2024', en: 'Jun 2023 — Mar 2024' } },
      { title: 'Junior 1', period: { ru: 'март 2023 — июнь 2023', en: 'Mar 2023 — Jun 2023' } },
    ],
  },
  {
    company: 'IT Delta',
    period: { ru: 'август 2022 — декабрь 2022', en: 'Aug 2022 — Dec 2022' },
  },
];

export const HACKATHONS: Hackathon[] = [
  {
    when: { ru: '2026', en: '2026' },
    event: { ru: 'MTS True Tech Hack', en: 'MTS True Tech Hack' },
    result: { ru: 'Финалист среди 1000 команд, финал в Москве', en: 'Finalist out of 1,000 teams, final in Moscow' },
    project: {
      name: { ru: 'WikiLive для MWS Tables', en: 'WikiLive for MWS Tables' },
      about: {
        ru: 'Редактор базы знаний с живыми таблицами MWS Tables внутри страниц: совместное редактирование в реальном времени, история версий, граф связей и AI-ассистент с контекстным поиском.',
        en: 'A knowledge base editor with live MWS Tables embedded in pages: real-time collaborative editing, version history, a page link graph and an AI assistant with contextual search.',
      },
      stack: ['React', 'Tiptap', 'Yjs', 'NestJS', 'PostgreSQL', 'Redis', 'Qdrant', 'FastAPI'],
    },
  },
  {
    when: { ru: 'Осень 2025', en: 'Fall 2025' },
    event: { ru: 'Cyber Garden Hardware, кейс RealLab', en: 'Cyber Garden Hardware, RealLab case' },
    result: { ru: 'Победа', en: 'Winner' },
    project: {
      name: { ru: 'Smart Controller', en: 'Smart Controller' },
      about: {
        ru: 'Портативный пульт, который по радиоканалу управляет устройствами, плюс мобильное приложение и админ-панель для мониторинга. Рабочий прототип с себестоимостью около 1 800 ₽.',
        en: 'A portable remote that controls devices over radio, plus a mobile app and an admin panel for monitoring. A working prototype that costs about 1,800 ₽ to build.',
      },
      stack: ['C++', 'Arduino', 'Flutter', 'Python', 'SQLite'],
    },
  },
  {
    when: { ru: 'Весна 2025', en: 'Spring 2025' },
    event: { ru: 'Хакатон «Весна» ДГТУ, кейс ТНС энерго', en: 'DSTU “Vesna” hackathon, TNS Energo case' },
    result: { ru: 'Победа', en: 'Winner' },
    project: {
      name: { ru: 'ТНС Кворум', en: 'TNS Kvorum' },
      about: {
        ru: 'Дистанционные заседания совета директоров: повестка, материалы, электронное голосование и подсчёт итогов. Голоса фиксируются в блокчейне, поэтому результат нельзя подменить.',
        en: 'Remote board of directors meetings: agenda, materials, electronic voting and vote counting. Votes are recorded on a blockchain, so the result cannot be tampered with.',
      },
      stack: ['Flutter', 'Laravel', 'Filament', 'MySQL', 'Ethereum'],
    },
  },
  {
    when: { ru: 'Осень 2024', en: 'Fall 2024' },
    event: { ru: 'Хакатон, кейс Т-Банка', en: 'Hackathon, T-Bank case' },
    result: { ru: 'Победа', en: 'Winner' },
    project: {
      name: { ru: 'Т-Капитал', en: 'T-Capital' },
      about: {
        ru: 'Мобильный финансовый помощник: операции вручную и по скану чека, «финансовое здоровье», аналитика за период и рекомендации продуктов экосистемы банка.',
        en: 'A mobile finance assistant: transactions entered by hand or by scanning a receipt, a “financial health” score, period analytics and recommendations from the bank’s ecosystem.',
      },
      stack: ['Flutter', 'Backend API'],
    },
  },
  {
    when: { ru: '2024', en: '2024' },
    event: { ru: 'Cyber Garden Hardware', en: 'Cyber Garden Hardware' },
    result: { ru: '3 место', en: '3rd place' },
  },
  {
    when: { ru: '2022', en: '2022' },
    event: { ru: 'Cyber Garden School, кейс Гринатома', en: 'Cyber Garden School, Greenatom case' },
    result: { ru: 'Победа', en: 'Winner' },
  },
];
