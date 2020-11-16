

CREATE TABLE users (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL,
  "first_name" varchar,
  "last_name" varchar,
  "password" varchar NOT NULL,
  UNIQUE ("username", "_id"),
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE plants (
  "_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  "plant_obj" json NOT NULL,
  UNIQUE ("_id"),
  CONSTRAINT "plants_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "plants_pk0" FOREIGN KEY ("user_id") REFERENCES users("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE session (
  "_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  UNIQUE ("_id", "session_id"),
  CONSTRAINT "session_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "session_pk0" FOREIGN KEY ("user_id") REFERENCES users("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE followers (
  "_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  "follower_id" bigint NOT NULL,
  UNIQUE ("_id"),
  CONSTRAINT "follower_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "follower_pk0" FOREIGN KEY ("user_id") REFERENCES users("_id"),
  CONSTRAINT "follower_pk1" FOREIGN KEY ("follower_id") REFERENCES users("_id")
);