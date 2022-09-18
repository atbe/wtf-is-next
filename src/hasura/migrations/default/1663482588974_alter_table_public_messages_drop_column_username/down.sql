alter table "public"."messages" alter column "username" drop not null;
alter table "public"."messages" add column "username" text;
