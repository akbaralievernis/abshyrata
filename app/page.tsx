import Link from 'next/link';

import { Hero } from '@/components/hero';
import { NewsCard } from '@/components/news-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { StatsCounters } from '@/components/stats-counters';
import { StudentCard } from '@/components/student-card';
import { TripGalleryLightbox } from '@/components/trip-gallery-lightbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { newsPosts, skillDirections, students, timelineSteps, trips } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <Card className="glass">
            <CardHeader>
              <CardTitle>О группе</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>
                Группа АУБ-1-24 — это сообщество студентов кафедры ПИиИБ Института МФТИТ Ошского
                Государственного университета. Мы специализируемся на прикладной информатике и
                информационной безопасности.
              </p>
              <p>
                Мы объединяем исследовательские инициативы, инженерные практики и совместные
                проекты, чтобы создавать устойчивые цифровые продукты для университета и региона.
              </p>
            </CardContent>
          </Card>
          <Card className="glass bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>Факты и достижения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-200">
              <ul className="space-y-2">
                <li>• 4 исследовательских доклада на конференциях ОшГУ.</li>
                <li>• 12 менторских сессий для младших курсов.</li>
                <li>• 6 индустриальных проектов с партнёрами региона.</li>
                <li>• 18 мероприятий и практикумов в 2024 году.</li>
              </ul>
            </CardContent>
          </Card>
        </ScrollReveal>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Направления и навыки группы</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Компетенции студентов АУБ-1-24 в области прикладной информатики и безопасности.
              </p>
            </div>
            <Badge className="hidden md:inline-flex">Институт МФТИТ</Badge>
          </div>
        </ScrollReveal>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {skillDirections.map((direction) => (
            <ScrollReveal key={direction.title} className="glass rounded-2xl p-5">
              <h3 className="text-base font-semibold">{direction.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {direction.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="facts" className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Факты и достижения</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Мы фиксируем результаты и рост команды в цифрах.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-6">
          <StatsCounters />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Как мы учимся и развиваемся</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Пошаговый процесс нашей работы в Институте МФТИТ.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {timelineSteps.map((step, index) => (
            <ScrollReveal key={step.title} className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500">
                Шаг {index + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="trips" className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Путешествия и мероприятия</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Выездные сессии, экскурсии и исследовательские поездки.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/trips">Все поездки</Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="mt-6">
          <TripGalleryLightbox media={trips.flatMap((trip) => trip.media.slice(0, 1))} />
        </div>
      </section>

      <section id="news" className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Новости</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Самые свежие обновления группы АУБ-1-24.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/news">Все новости</Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {newsPosts.slice(0, 3).map((post) => (
            <NewsCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      <section id="students" className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Студенты</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Познакомьтесь с командой кафедры ПИиИБ.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/students">Все студенты</Link>
            </Button>
          </div>
        </ScrollReveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {students.slice(0, 3).map((student) => (
            <StudentCard key={student.id} {...student} />
          ))}
        </div>
      </section>
    </div>
  );
}
