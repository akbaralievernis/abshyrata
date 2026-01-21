import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { students } from '@/lib/data';

const skillFilters = ['Cybersecurity', 'UI/UX', 'Data', 'Full-stack'];

export default function StudentsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Students of AUB-1-24</h1>
        <p className="text-slate-600">
          Meet the students of Osh State University&apos;s MFTIT Institute, Department of Applied
          Informatics and Information Security.
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 md:flex-row md:items-center">
        <Input placeholder="Search by name" />
        <div className="flex flex-wrap gap-2">
          {skillFilters.map((filter) => (
            <Badge key={filter}>{filter}</Badge>
          ))}
        </div>
        <Button variant="outline" className="md:ml-auto">
          Apply Filters
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {students.map((student) => (
          <Card key={student.id}>
            <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center">
              <div className="h-16 w-16 rounded-full bg-slate-100" />
              <div className="flex-1 space-y-2">
                <div>
                  <h2 className="text-lg font-semibold">{student.fullName}</h2>
                  <p className="text-sm text-slate-600">{student.bio}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
              <Button asChild size="sm">
                <Link href={`/students/${student.slug}`}>Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
