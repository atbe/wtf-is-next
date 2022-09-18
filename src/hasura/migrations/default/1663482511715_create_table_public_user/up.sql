CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "username" text NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
