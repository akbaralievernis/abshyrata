import Link from 'next/link';

import { createNewsPost } from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { newsPosts, students, trips } from '@/lib/data';

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Admin Panel</h1>
        <p className="text-slate-600">
          Manage students, news, and trips for the AUB-1-24 portfolio.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Student Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">{student.fullName}</p>
                  <p className="text-xs">{student.skills.slice(0, 2).join(', ')}</p>
                </div>
                <Badge>Active</Badge>
              </div>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/admin">Manage students</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trips & Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {trips.map((trip) => (
              <div key={trip.id}>
                <p className="font-medium text-slate-900">{trip.title}</p>
                <p className="text-xs">{trip.location}</p>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full">
              Upload media
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Published News</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            {newsPosts.map((post) => (
              <div key={post.id}>
                <p className="font-medium text-slate-900">{post.title}</p>
                <p className="text-xs">{post.date}</p>
              </div>
            ))}
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/news">View news</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create News Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createNewsPost} className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input name="title" placeholder="News title" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Cover URL</label>
              <Input name="coverUrl" placeholder="https://..." />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea name="content" placeholder="Write the news content..." required />
            </div>
            <div className="md:col-span-2 flex items-center gap-2 text-sm">
              <input id="isPublished" name="isPublished" type="checkbox" />
              <label htmlFor="isPublished">Publish immediately</label>
            </div>
            <Button type="submit" className="md:col-span-2">Create post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
