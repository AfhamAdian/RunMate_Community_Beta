CREATE DATABASE RunMateDatabase;
--User
CREATE TABLE User (
    User_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    image TEXT,
    password VARCHAR(255) NOT NULL
);

ALTER TABLE
    IF EXISTS public."User"
ADD
    COLUMN user_name "char" NOT NULL;