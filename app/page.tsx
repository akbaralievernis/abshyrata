import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { groupStats, newsPosts, students, trips } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:px-6">
          <div className="space-y-6">
            <Badge className="bg-white/15 text-white">Group Portfolio</Badge>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              AUB-1-24 — Osh State University
            </h1>
            <p className="text-lg text-slate-200">
              MFTIT Institute · Department of Applied Informatics and Information Security (PIiIB)
            </p>
            <p className="max-w-xl text-sm text-slate-200">
              AUB-1-24 is a collaborative academic group focusing on modern software engineering,
              cybersecurity, and applied informatics. Explore student achievements, news, and
              community events.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/students">View Students</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/news">Latest News</Link>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/trips">Trips & Events</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 shadow-lg">
            <div className="grid gap-4">
              <h2 className="text-xl font-semibold">Group Snapshot</h2>
              <p className="text-sm text-slate-200">
                Our group contributes to research, community engagement, and applied projects for
                Osh State University.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                {groupStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-xs text-slate-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>About the Group</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>
                AUB-1-24 is a cohort within the MFTIT Institute at Osh State University. We specialize
                in applied informatics, cybersecurity, and information security. Our mission is to
                create secure, scalable, and user-friendly digital solutions for the academic
                community.
              </p>
              <p>
                Students collaborate on research, hackathons, and community outreach events while
                sharpening practical skills in full-stack development, data analytics, and secure
                systems design.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>Group Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-200">
              <ul className="space-y-2">
                <li>• 4 research papers submitted to national conferences.</li>
                <li>• 12 peer-mentoring sessions for junior students.</li>
                <li>• 6 collaborative industry projects with regional partners.</li>
                <li>• 18 academic and community events hosted in 2024.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Trips & Events</h2>
          <Button asChild variant="outline">
            <Link href="/trips">View all trips</Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={trip.media[0].url}
                  alt={trip.media[0].caption}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="space-y-2 pt-6">
                <Badge className="w-fit">{trip.location}</Badge>
                <h3 className="text-lg font-semibold">{trip.title}</h3>
                <p className="text-sm text-slate-600">{trip.description}</p>
                <p className="text-xs text-slate-400">{trip.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest News</h2>
          <Button asChild variant="outline">
            <Link href="/news">View all news</Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {newsPosts.map((post) => (
            <Card key={post.id}>
              <div className="relative h-40 w-full overflow-hidden rounded-t-xl">
                <Image src={post.cover} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="space-y-2 pt-6">
                <h3 className="text-base font-semibold">{post.title}</h3>
                <p className="text-xs text-slate-500">{post.date}</p>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <Button asChild size="sm">
                  <Link href={`/news/${post.id}`}>Read more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Meet the Students</h2>
          <Button asChild variant="outline">
            <Link href="/students">Browse all students</Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {students.slice(0, 3).map((student) => (
            <Card key={student.id}>
              <CardContent className="space-y-3 pt-6">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={student.avatar} alt={student.fullName} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{student.fullName}</h3>
                  <p className="text-sm text-slate-600">{student.bio}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {student.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <Button asChild size="sm" variant="secondary">
                  <Link href={`/students/${student.slug}`}>View profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
