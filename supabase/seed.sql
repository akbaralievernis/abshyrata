-- Seed demo data for AUB-1-24 Group Portfolio
insert into profiles (slug, full_name, bio, avatar_url, phone, phone_public, email_public, socials, skills)
values
  ('aiysa-toktosunova', 'Aisya Toktosunova', 'Full-stack developer focused on secure web systems.', null, '+996 555 123 456', true, false, '{"github":"https://github.com"}', array['Next.js','TypeScript','Supabase']),
  ('azamat-bekturov', 'Azamat Bekturov', 'Backend engineer specializing in scalable APIs.', null, '+996 555 987 321', true, true, '{"github":"https://github.com"}', array['PostgreSQL','Supabase','Node.js']),
  ('nargiza-saparbaeva', 'Nargiza Saparbaeva', 'UI/UX designer with accessible design systems.', null, '+996 555 456 789', false, true, '{"dribbble":"https://dribbble.com"}', array['Figma','Tailwind CSS']),
  ('amirbek-omurzakov', 'Amirbek Omurzakov', 'Full-stack developer building analytics dashboards.', null, '+996 555 654 321', true, true, '{"github":"https://github.com"}', array['React','Analytics']),
  ('gulzat-ilekova', 'Gulzat Ilekova', 'Frontend engineer for education platforms.', null, '+996 555 222 333', false, false, '{"linkedin":"https://linkedin.com"}', array['React','Accessibility']),
  ('bakytbek-alymbekov', 'Bakytbek Alymbekov', 'Cybersecurity enthusiast and mentor.', null, '+996 555 888 999', true, false, '{"github":"https://github.com"}', array['Security Audits','OWASP']);

insert into posts (title, content, cover_url, is_published)
values
  ('AUB-1-24 launches its official portfolio platform', 'The AUB-1-24 group at Osh State University has launched a new portfolio platform.', null, true),
  ('PIiIB students host cybersecurity awareness week', 'Workshops on secure coding and privacy were held for the academic community.', null, true),
  ('Osh State University innovation lab visit', 'AUB-1-24 explored emerging research labs for data analytics and security.', null, true);

insert into trips (title, description, location, trip_date, is_published)
values
  ('Industry Visit: Secure Data Center', 'A visit to study infrastructure security and monitoring.', 'Osh, Kyrgyz Republic', '2024-11-15', true),
  ('Academic Retreat: Applied Informatics Summit', 'Research planning, project showcases, and collaboration.', 'Arslanbob, Kyrgyz Republic', '2024-10-04', true);
