import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ProfileHeader } from '@/components/profile-header';
import { ProjectList } from '@/components/project-list';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { semesterSubjects, students } from '@/lib/data';

interface StudentProfileProps {
  params: { slug: string };
}

export default function StudentProfilePage({ params }: StudentProfileProps) {
  const student = students.find((item) => item.slug === params.slug);

  if (!student) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6">
      <ProfileHeader
        fullName={student.fullName}
        role={student.role}
        avatar={student.avatar}
        skills={student.skills}
      />

      <ScrollReveal>
        <Card className="glass">
          <CardHeader>
            <CardTitle>О себе</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600 dark:text-slate-300">
            {student.bio}
          </CardContent>
        </Card>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2">
        <ScrollReveal>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Проекты</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectList projects={student.projects} />
            </CardContent>
          </Card>
        </ScrollReveal>
        <ScrollReveal>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Соцсети и контакты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {student.socials &&
                Object.entries(student.socials).map(([key, value]) => (
                  <Link key={key} href={value} className="text-blue-600 dark:text-blue-400">
                    {key}
                  </Link>
                ))}
              {student.contact.phonePublic && <p>Телефон: {student.contact.phone}</p>}
              {student.contact.emailPublic && <p>Email: {student.contact.email}</p>}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Учебные дисциплины (семестр {student.semester})</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600 dark:text-slate-300">
            <ul className="list-inside list-disc space-y-1">
              {semesterSubjects[student.semester].map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </ScrollReveal>

      <Button asChild variant="outline">
        <Link href="/students">Назад к списку</Link>
      </Button>
    </div>
  );
}
