CREATE DATABASE RunMateDatabase;

--User
CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    image TEXT,
    user_name VARCHAR(255)
);

--post
CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    post_content TEXT,
    image TEXT,
    video TEXT,
    user_id INTEGER REFERENCES "user"(user_id) ON DELETE CASCADE
);

--Like
CREATE TABLE "like" (
    post_id INTEGER REFERENCES post(post_id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES "user"(user_id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, user_id)
);

--comment
CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    comment_content TEXT,
    comment_image TEXT,
    comment_video TEXT,
    post_id INTEGER REFERENCES post(post_id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES "user"(user_id) ON DELETE CASCADE
);

--Friends
CREATE TABLE friends (
    user_id_1 INTEGER REFERENCES "user"(user_id) ON DELETE CASCADE,
    user_id_2 INTEGER REFERENCES "user"(user_id) ON DELETE CASCADE,
    request_approve BOOLEAN NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id_1, user_id_2)
);

--Reply
CREATE TABLE reply (
    comment_1_id INTEGER REFERENCES comment(comment_id) ON DELETE CASCADE,
    comment_2_id INTEGER REFERENCES comment(comment_id) ON DELETE CASCADE,
    PRIMARY KEY (comment_1_id, comment_2_id)
);