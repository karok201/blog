# blog

Личный блог на [Astro](https://astro.build), публикуется на https://karok201.github.io/blog/.

## Новый пост

Создать файл `src/content/blog/ru/<slug>.md` (и при желании перевод с тем же `<slug>` в `src/content/blog/en/`):

```md
---
title: Заголовок
description: Одно предложение для карточки и превью.
date: 2026-10-06
tags: [тег]
cover: ./cover.jpg   # необязательно, путь относительно файла поста
draft: false
---

Текст поста в Markdown.
```

Затем `git push` — GitHub Actions соберёт и выложит сайт за 1–2 минуты.

## Локально

```bash
npm install
npm run dev      # http://localhost:4321/blog/
```

Ник в Telegram для кнопки в шапке задаётся в `src/config.ts`.
