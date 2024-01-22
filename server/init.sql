CREATE TABLE resident_evil_characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    skills VARCHAR(255),
    living_status VARCHAR(20),
    affiliation VARCHAR(255),
    origin VARCHAR(255),
    infection_status VARCHAR(255),
    notable_traits VARCHAR(255),
    first_appearance VARCHAR(255),
    notes VARCHAR(255)
);

COPY resident_evil_characters FROM '/docker-entrypoint-initdb.d/char.csv' DELIMITER ',' CSV HEADER;
