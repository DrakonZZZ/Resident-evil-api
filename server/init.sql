CREATE TABLE resident_evil_characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    skills VARCHAR(255),
    living_status VARCHAR(20)
);