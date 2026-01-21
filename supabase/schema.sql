-- Schema for AUB-1-24 Group Portfolio
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade,
  slug text unique not null,
  full_name text not null,
  bio text,
  avatar_url text,
  phone text,
  phone_public boolean default false,
  email_public boolean default false,
  socials jsonb default '{}'::jsonb,
  skills text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles on delete cascade,
  title text not null,
  description text,
  url text,
  github_url text,
  tags text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  cover_url text,
  author_id uuid references auth.users,
  category text,
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists trips (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  location text,
  trip_date date,
  cover_url text,
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists trip_media (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid references trips on delete cascade,
  type text check (type in ('photo', 'video')),
  url text not null,
  caption text,
  order_index int default 0,
  created_at timestamptz default now()
);

-- Enable RLS
alter table profiles enable row level security;
alter table projects enable row level security;
alter table posts enable row level security;
alter table trips enable row level security;
alter table trip_media enable row level security;

-- Policies
create policy "Profiles are viewable by anyone" on profiles
  for select using (true);

create policy "Profiles are editable by owner" on profiles
  for update using (auth.uid() = user_id);

create policy "Projects are viewable by anyone" on projects
  for select using (true);

create policy "Projects are editable by profile owner" on projects
  for all using (
    auth.uid() = (select user_id from profiles where profiles.id = projects.profile_id)
  );

create policy "Published posts are viewable" on posts
  for select using (is_published = true);

create policy "Admins manage posts" on posts
  for all using (auth.jwt() ->> 'role' = 'admin');

create policy "Published trips are viewable" on trips
  for select using (is_published = true);

create policy "Admins manage trips" on trips
  for all using (auth.jwt() ->> 'role' = 'admin');

create policy "Trip media viewable with published trips" on trip_media
  for select using (
    exists (
      select 1 from trips where trips.id = trip_media.trip_id and trips.is_published = true
    )
  );

create policy "Admins manage trip media" on trip_media
  for all using (auth.jwt() ->> 'role' = 'admin');

-- Storage policies (apply in Supabase SQL editor)
-- Avatars: public read, write by owner/admin
create policy "Avatar images are public" on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Avatar uploads are restricted" on storage.objects
  for insert with check (
    bucket_id = 'avatars'
    and (auth.uid() = owner or auth.jwt() ->> 'role' = 'admin')
  );

-- Trip media: write by admin only
create policy "Trip media are public" on storage.objects
  for select using (bucket_id = 'trip-media');

create policy "Trip media uploads by admins" on storage.objects
  for insert with check (
    bucket_id = 'trip-media'
    and auth.jwt() ->> 'role' = 'admin'
  );
