'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { newsPosts } from '@/lib/data';

interface NewsDetailProps {
  params: { id: string };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const post = newsPosts.find((item) => item.id === params.id);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(100, Math.max(0, ratio * 100)));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 md:px-6">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-slate-200">
        <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
      </div>
      <Card className="glass overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src={post.cover} alt={post.title} fill className="object-cover" />
        </div>
        <CardContent className="space-y-4 p-6">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {post.date} · {post.author} · {post.category}
          </p>
          <p className="text-slate-600 dark:text-slate-300">{post.content}</p>
        </CardContent>
      </Card>

      <Button asChild variant="outline">
        <Link href="/news">Назад к новостям</Link>
      </Button>
    </div>
  );
}
