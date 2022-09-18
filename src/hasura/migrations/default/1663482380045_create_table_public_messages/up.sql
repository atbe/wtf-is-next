CREATE TABLE "public"."messages" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "message" text NOT NULL, "username" text NOT NULL, "createdAt" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
