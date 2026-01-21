import Link from 'next/link';

import { createNewsPost } from '@/app/actions';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { newsPosts, students, trips } from '@/lib/data';

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <ScrollReveal className="space-y-2">
        <h1 className="text-3xl font-semibold">Админ-панель</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Управление студентами, новостями и поездками группы АУБ-1-24.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        <ScrollReveal>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Студенты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                      {student.fullName}
                    </p>
                    <p className="text-xs">{student.role}</p>
                  </div>
                  <Badge>Активен</Badge>
                </div>
              ))}
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/admin">Управлять студентами</Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Поездки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {trips.map((trip) => (
                <div key={trip.id}>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{trip.title}</p>
                  <p className="text-xs">{trip.location}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full">
                Загрузить медиа
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Новости</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {newsPosts.map((post) => (
                <div key={post.id}>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{post.title}</p>
                  <p className="text-xs">{post.date}</p>
                </div>
              ))}
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/news">Посмотреть новости</Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Создать новость</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createNewsPost} className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Заголовок</label>
                <Input name="title" placeholder="Тема новости" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Категория</label>
                <Input name="category" placeholder="События, Достижения..." required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">URL обложки</label>
                <Input name="coverUrl" placeholder="https://..." />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Контент</label>
                <Textarea name="content" placeholder="Введите текст новости..." required />
              </div>
              <div className="md:col-span-2 flex items-center gap-2 text-sm">
                <input id="isPublished" name="isPublished" type="checkbox" />
                <label htmlFor="isPublished">Опубликовать сразу</label>
              </div>
              <Button type="submit" className="md:col-span-2">
                Создать
              </Button>
            </form>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  );
}
