'use client';

import { useEffect, useMemo, useState } from 'react';

import { ScrollReveal } from '@/components/scroll-reveal';
import { StudentCard } from '@/components/student-card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { students } from '@/lib/data';

const skillFilters = ['Кибербезопасность', 'Фронтенд', 'Бэкенд', 'Данные', 'UX'];

export default function StudentsPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesQuery = student.fullName.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = activeFilter
        ? student.interests.some((interest) => interest.includes(activeFilter)) ||
          student.skills.some((skill) => skill.includes(activeFilter))
        : true;
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <ScrollReveal className="space-y-3">
        <h1 className="text-3xl font-semibold">Студенты АУБ-1-24</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Профили студентов ОшГУ, Института МФТИТ и кафедры ПИиИБ.
        </p>
      </ScrollReveal>
      <ScrollReveal className="glass flex flex-col gap-4 rounded-2xl p-4 md:flex-row md:items-center">
        <Input
          placeholder="Поиск по имени"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {skillFilters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)}>
              <Badge className={activeFilter === filter ? 'bg-blue-500 text-white' : ''}>
                {filter}
              </Badge>
            </button>
          ))}
          {activeFilter && (
            <button type="button" onClick={() => setActiveFilter(null)}>
              <Badge>Сбросить</Badge>
            </button>
          )}
        </div>
      </ScrollReveal>
      <div className="grid gap-6 md:grid-cols-2">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-40 rounded-2xl" />
            ))
          : filteredStudents.map((student) => <StudentCard key={student.id} {...student} />)}
      </div>
    </div>
  );
}
