import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { students } from '@/lib/data';

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
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="h-28 w-28 rounded-full bg-slate-200" />
        <div className="space-y-2">
          <p className="text-sm text-slate-500">AUB-1-24 · PIiIB · Osh State University</p>
          <h1 className="text-3xl font-semibold">{student.fullName}</h1>
          <p className="text-slate-600">{student.bio}</p>
          <div className="flex flex-wrap gap-2">
            {student.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About me</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          {student.bio} This profile is part of the official AUB-1-24 portfolio for the MFTIT
          Institute and PIiIB Department.
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {student.projects.map((project) => (
              <div key={project.title} className="space-y-1">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-600">{project.description}</p>
                <Link href={project.url} className="text-sm text-blue-600">
                  Visit project
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact & Socials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-600">
            <p>Phone: {student.contact.phone}</p>
            <p>Email: {student.contact.email}</p>
            {Object.entries(student.socials).map(([key, value]) => (
              <Link key={key} href={value} className="block text-blue-600">
                {key}
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <Button asChild variant="outline">
        <Link href="/students">Back to students</Link>
      </Button>
    </div>
  );
}
