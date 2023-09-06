CREATE DATABASE hilitoapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content TEXT,
    idAuthor INTEGER REFERENCES users(id),
    idCategory INTEGER REFERENCES categories(id)
);

INSERT INTO posts (content, idauthor, idCategory) VALUES
  ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 1, 1),
  ('Lorem ip consectetur adipiscing elit. ', 1, 1);

ALTER TABLE posts
ADD COLUMN author_name TEXT;
UPDATE posts
SET author_name = (
    SELECT username
    FROM users
    WHERE id = posts.idAuthor
);

ALTER TABLE posts
ADD COLUMN category_name TEXT;
UPDATE posts
SET category_name = (
    SELECT name
    FROM categories
    WHERE id = posts.idcategory
);


