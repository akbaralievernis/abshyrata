'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
}

export function NewsCard({ id, title, excerpt, date, category, cover }: NewsCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass overflow-hidden rounded-2xl">
      <div className="relative h-40 w-full">
        <Image src={cover} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <Badge className="w-fit">{category}</Badge>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">{date}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{excerpt}</p>
        <Button asChild size="sm">
          <Link href={`/news/${id}`}>Читать</Link>
        </Button>
      </div>
    </motion.article>
  );
}
