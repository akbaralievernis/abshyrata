import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { newsPosts } from '@/lib/data';

interface NewsDetailProps {
  params: { id: string };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const post = newsPosts.find((item) => item.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-6">
      <Card>
        <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
          <Image src={post.cover} alt={post.title} fill className="object-cover" />
        </div>
        <CardContent className="space-y-4 pt-6">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p className="text-sm text-slate-500">
            {post.date} · {post.author}
          </p>
          <p className="text-slate-600">{post.content}</p>
        </CardContent>
      </Card>

      <Button asChild variant="outline">
        <Link href="/news">Back to news</Link>
      </Button>
    </div>
  );
}
