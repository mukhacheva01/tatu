# Деплой на Render.com

## Шаги для деплоя:

### 1. Подготовка репозитория
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Создание проекта на Render

1. Зайди на https://render.com и войди через GitHub
2. Нажми "New" → "Blueprint"
3. Подключи свой GitHub репозиторий
4. Render автоматически обнаружит `render.yaml` и создаст все сервисы

### 3. Альтернативный способ (ручной)

#### 3.1 Создать PostgreSQL базу данных
- New → PostgreSQL
- Name: `tattoo-postgres`
- Database: `tattoo_salon`
- User: `user`
- Plan: Free

#### 3.2 Создать Backend
- New → Web Service
- Connect repository
- Name: `tattoo-backend`
- Environment: Docker
- Dockerfile Path: `./backend/Dockerfile`
- Plan: Free
- Environment Variables:
  - `DATABASE_URL`: (скопируй Internal Database URL из PostgreSQL)

#### 3.3 Создать Frontend
- New → Web Service
- Connect repository
- Name: `tattoo-frontend`
- Environment: Docker
- Dockerfile Path: `./frontend/Dockerfile`
- Plan: Free
- Environment Variables:
  - `VITE_API_URL`: https://tattoo-backend.onrender.com (URL твоего backend)

### 4. Инициализация базы данных

После деплоя PostgreSQL, подключись к базе и выполни:
```bash
# В Render Dashboard → PostgreSQL → Connect → PSQL Command
psql <connection_string>
```

Затем выполни SQL из `database/init.sql`

### 5. Проверка

- Frontend: https://tattoo-frontend.onrender.com
- Backend API: https://tattoo-backend.onrender.com
- API Docs: https://tattoo-backend.onrender.com/docs

## Важные замечания

⚠️ **Free tier на Render:**
- Сервисы засыпают после 15 минут неактивности
- Первый запрос может занять 30-60 секунд (cold start)
- 750 часов в месяц бесплатно

💡 **Рекомендации:**
- Используй Render для тестирования
- Для продакшена рассмотри платный план или другой хостинг
- Настрой custom domain в Render Dashboard

## Обновление проекта

После изменений в коде:
```bash
git add .
git commit -m "Update"
git push origin main
```

Render автоматически пересоберет и задеплоит изменения.

## Исправления (28.11.2024)

### Проблема с шрифтами на продакшене
**Решение:** Шрифты перемещены из `frontend/assets/fonts` в `frontend/public/assets/fonts`
- Пути в CSS изменены с `./assets/fonts/` на `/assets/fonts/`
- Теперь Vite правильно копирует шрифты в dist при сборке

### Размытие по бокам Hero изображения
**Решение:** Изменен градиент в Hero компоненте
- `backgroundPosition` изменен с `right center` на `center`
- Градиент изменен с `from-black via-black/80 to-transparent` на `from-black via-black/70 to-black/30`
- Теперь размытие равномерное по всей ширине
