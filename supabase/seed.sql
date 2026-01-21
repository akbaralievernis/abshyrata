-- Демо-данные для портфолио АУБ-1-24
insert into profiles (slug, full_name, bio, avatar_url, phone, phone_public, email_public, socials, skills)
values
  ('aysa-toktosunova', 'Айса Токтосунова', 'Full-stack разработчик, работает над безопасными веб-системами.', null, '+996 555 123 456', true, false, '{"github":"https://github.com"}', array['Next.js','TypeScript','Supabase']),
  ('azamat-bekturov', 'Азамат Бектуров', 'Backend инженер, отвечает за надёжные API.', null, '+996 555 987 321', true, true, '{"github":"https://github.com"}', array['PostgreSQL','Supabase','Node.js']),
  ('nargiza-saparbaeva', 'Наргиза Сапарбаева', 'UI/UX дизайнер для образовательных сервисов.', null, '+996 555 456 789', false, true, '{"dribbble":"https://dribbble.com"}', array['Figma','Tailwind CSS']),
  ('amirbek-omurzakov', 'Амирбек Омурзаков', 'Аналитик данных и создатель дашбордов.', null, '+996 555 654 321', true, true, '{"github":"https://github.com"}', array['React','Analytics']),
  ('gulzat-ilekova', 'Гулзат Илекова', 'Frontend инженер, адаптивные интерфейсы.', null, '+996 555 222 333', false, false, '{"linkedin":"https://linkedin.com"}', array['React','Accessibility']),
  ('bakytbek-alymbekov', 'Бакытбек Алымбеков', 'Инженер по безопасности и аудиту.', null, '+996 555 888 999', true, false, '{"github":"https://github.com"}', array['Security Audits','OWASP']),
  ('zhanyl-sadykova', 'Жаныл Садыкова', 'QA инженер с фокусом на автоматизации.', null, '+996 555 314 159', false, true, '{"github":"https://github.com"}', array['QA','Playwright']),
  ('temirlan-iskakov', 'Темирлан Искаков', 'DevOps инженер, отвечает за CI/CD.', null, '+996 555 777 555', true, true, '{"github":"https://github.com"}', array['CI/CD','Docker']);

insert into posts (title, content, cover_url, category, is_published)
values
  ('Запуск официального портфолио группы АУБ-1-24', 'Команда ОшГУ представила портал, где собраны проекты, новости и достижения кафедры ПИиИБ.', null, 'Портфолио', true),
  ('Неделя кибербезопасности на кафедре ПИиИБ', 'Студенты провели воркшопы по безопасному коду и защите данных для Института МФТИТ.', null, 'События', true),
  ('Экскурсия в инновационную лабораторию ОшГУ', 'Команда посетила исследовательские лаборатории и познакомилась с проектами по аналитике данных.', null, 'Исследования', true),
  ('Победа в региональном хакатоне “Digital Osh”', 'Проект группы занял первое место и получил грант на развитие.', null, 'Достижения', true);

insert into trips (title, description, location, trip_date, cover_url, is_published)
values
  ('Визит в центр обработки данных', 'Экскурсия для изучения инфраструктурной безопасности.', 'Ош, Кыргызстан', '2024-11-15', null, true),
  ('Академический ретрит «Саммит прикладной информатики»', 'Выездная школа по проектам и исследованиям.', 'Арсланбоб, Кыргызстан', '2024-10-04', null, true),
  ('Поездка в технологический парк ОшГУ', 'Знакомство с лабораториями и стартап-проектами университета.', 'Ош, Кыргызстан', '2024-09-12', null, true);

insert into trip_media (trip_id, type, url, caption, order_index)
select id, 'photo', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80', 'Брифинг по безопасности', 1
from trips where title = 'Визит в центр обработки данных';

insert into trip_media (trip_id, type, url, caption, order_index)
select id, 'video', 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80', 'Видео-обзор экскурсии', 2
from trips where title = 'Визит в центр обработки данных';

insert into trip_media (trip_id, type, url, caption, order_index)
select id, 'photo', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', 'Сессии на природе', 1
from trips where title = 'Академический ретрит «Саммит прикладной информатики»';

insert into trip_media (trip_id, type, url, caption, order_index)
select id, 'photo', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80', 'Экскурсия по лабораториям', 1
from trips where title = 'Поездка в технологический парк ОшГУ';
