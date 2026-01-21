import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { newsPosts } from '@/lib/data';

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">News & Announcements</h1>
        <p className="text-slate-600">
          Updates from AUB-1-24, the MFTIT Institute, and the Department of Applied Informatics and
          Information Security.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {newsPosts.map((post) => (
          <Card key={post.id}>
            <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
              <Image src={post.cover} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="space-y-3 pt-6">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="text-xs text-slate-500">{post.date}</p>
              <p className="text-sm text-slate-600">{post.excerpt}</p>
              <Button asChild size="sm">
                <Link href={`/news/${post.id}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
