# 目標アプリ（Vite + React）

This is a code bundle for 目標一覧作成. The original project is available at https://www.figma.com/design/l32meMqmotdHHhclg2ggZM/%E7%9B%AE%E6%A8%99%E4%B8%80%E8%A6%A7%E4%BD%9C%E6%88%90.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Supabase（ログイン＋オンライン保存）セットアップ

このアプリは、Supabaseの `Auth(email/password)` と `Postgres` を使ってログイン必須・オンライン保存で動かせます。

### 1) 環境変数

`.env.example` を参考に `.env` を作成し、SupabaseのURL/Anon Keyを設定します。

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 2) テーブル作成（SQL）

Supabaseの SQL Editor で以下を実行してください。

```sql
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
```

### 3) 動作

- `/signup`でアカウント作成
- `/login`でログイン
- ログイン後、目標の作成/編集/削除がオンラインで保存されます

## iOSアプリ化（Capacitor）

このプロジェクトはCapacitorでiOSアプリとして起動できます。

### 前提

- macOS + Xcode

### 手順

1) WebをビルドしてiOSへ同期

Run:

`npm run cap:sync:ios`

2) Xcodeで開く

Run:

`npm run cap:open:ios`

3) Xcode上で実機 or Simulator を選んでRun

### ルーティングについて

Capacitor（file://）環境で壊れにくいよう、ルーティングはHashベースにしています。
