# Tattoo Salon Landing

Лендинг для тату салона с React, Tailwind CSS, Python (FastAPI) и PostgreSQL.

## Структура проекта

```
├── frontend/          # React + Tailwind + Vite
├── backend/           # FastAPI + SQLAlchemy
├── database/          # PostgreSQL init scripts
└── docker-compose.yml # Docker конфигурация
```

## Запуск проекта

### С Docker:
```bash
docker-compose up
```

### Без Docker:

**База данных:**
```bash
psql -U postgres -f database/init.sql
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Отредактируйте .env с вашими данными БД
uvicorn main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Доступ

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Секции лендинга

1. **Hero** - главный экран с заголовком
2. **About** - информация о салоне
3. **Artists** - карточки мастеров
4. **Gallery** - галерея работ
5. **Contact** - форма обратной связи

## API Endpoints

- `POST /api/contact` - отправка формы
- `GET /api/artists` - список мастеров
- `GET /api/gallery` - галерея изображений
