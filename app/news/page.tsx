'use client';

import { useMemo, useState } from 'react';

import { NewsCard } from '@/components/news-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { newsPosts } from '@/lib/data';

export default function NewsPage() {
  const categories = Array.from(new Set(newsPosts.map((post) => post.category)));
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return newsPosts;
    return newsPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <ScrollReveal className="space-y-2">
        <h1 className="text-3xl font-semibold">Новости и объявления</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Обновления от группы АУБ-1-24, Института МФТИТ и кафедры ПИиИБ.
        </p>
      </ScrollReveal>
      <ScrollReveal className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => setActiveCategory(category)}>
            <Badge className={activeCategory === category ? 'bg-blue-500 text-white' : ''}>
              {category}
            </Badge>
          </button>
        ))}
        {activeCategory && (
          <button type="button" onClick={() => setActiveCategory(null)}>
            <Badge>Все категории</Badge>
          </button>
        )}
      </ScrollReveal>
      <div className="grid gap-6 md:grid-cols-3">
        {filteredPosts.map((post) => (
          <NewsCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
