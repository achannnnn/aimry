-- Supabase SQL Editor で実行

create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  progress integer not null default 0,
  target integer not null default 0,
  unit text,
  motivation text,
  tags text[],
  deadline date not null,
  created_at timestamptz not null default now(),
  order_index integer not null default 0,
  year integer not null,
  progress_history jsonb not null default '[]'::jsonb
);

alter table public.goals enable row level security;

drop policy if exists goals_select_own on public.goals;
drop policy if exists goals_insert_own on public.goals;
drop policy if exists goals_update_own on public.goals;
drop policy if exists goals_delete_own on public.goals;

create policy goals_select_own on public.goals
for select using (auth.uid() = user_id);

create policy goals_insert_own on public.goals
for insert with check (auth.uid() = user_id);

create policy goals_update_own on public.goals
for update using (auth.uid() = user_id);

create policy goals_delete_own on public.goals
for delete using (auth.uid() = user_id);
