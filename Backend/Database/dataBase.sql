CREATE DATABASE RunMateDatabase;

CREATE TABLE User (
    User_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    image TEXT,
    password VARCHAR(255) NOT NULL
);
