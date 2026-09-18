-- Run this once in the Supabase SQL editor for your project.
-- Stores each user's entire {decks, activeId} blob as one row, mirroring
-- the shape previously kept in localStorage under 'lsc.decks.v1'.

create table public.decks_store (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{"decks":[],"activeId":null}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.decks_store enable row level security;

create policy "select own row" on public.decks_store
  for select using (auth.uid() = user_id);

create policy "insert own row" on public.decks_store
  for insert with check (auth.uid() = user_id);

create policy "update own row" on public.decks_store
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
