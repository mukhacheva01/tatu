-- Database is created by POSTGRES_DB env variable

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100),
    bio TEXT,
    image_url VARCHAR(255)
);

CREATE TABLE gallery_images (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    image_url VARCHAR(255) NOT NULL,
    artist_id INTEGER REFERENCES artists(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO artists (name, specialty, bio) VALUES
('Korn Dutra', 'Custom designs', 'Мастер индивидуальных эскизов'),
('Artist Name', 'Realism', 'Специалист по реализму'),
('Artist Name', 'Traditional', 'Традиционные татуировки');
