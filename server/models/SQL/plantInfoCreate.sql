

CREATE TABLE users (
  "_id" serial NOT NULL,
  "email" varchar NOT NULL,
  "first_name" varchar,
  "last_name" varchar,
  "password" varchar NOT NULL,
  UNIQUE ("email", "_id"),
  PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE plants (
  "_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  UNIQUE ("_id"),
  CONSTRAINT "plants_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "plants_pk0" FOREIGN KEY ("user_id") REFERENCES users("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE session (
  "_id" serial NOT NULL,
  "user_id" bigint NOT NULL,
  UNIQUE ("_id"),
  CONSTRAINT "session_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "session_fk0" FOREIGN KEY ("user_id") REFERENCES users("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE posts (
  "_id" serial NOT NULL,
  "plant_id" bigint NOT NULL,
  "url" varchar,
  "created_at" timestamp,
  CONSTRAINT "posts_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "posts_fk0" FOREIGN KEY ("plant_id") REFERENCES plants("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE relationships (
  "_id" serial NOT NULL,
  "follower_id" bigint,
  "followed_id" bigint,
  "created_at" timestamp,
  "updated_at" timestamp,
  UNIQUE ("_id"),
  CONSTRAINT "relationships_pk" PRIMARY KEY ("_id"),
  CONSTRAINT "relationships_fk0" FOREIGN KEY ("follower_id") REFERENCES users("_id"),
  CONSTRAINT "relationships_fk1" FOREIGN KEY ("followed_id") REFERENCES users("_id")
);