'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/40 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:px-6"
      >
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.2em]"
          >
            Группа АУБ-1-24
          </motion.span>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            АУБ-1-24 — Портфолио группы
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Ошский Государственный университет · Институт МФТИТ · Кафедра ПИиИБ (Прикладная
            информатика и информационная безопасность).
          </p>
          <p className="max-w-2xl text-sm text-slate-300">
            Мы создаём технологичные и безопасные цифровые продукты, ведём исследования и активно
            участвуем в академических проектах региона.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/students">Студенты</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/news">Новости</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-white/10">
              <Link href="/trips">Путешествия</Link>
            </Button>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="glass relative max-w-xl rounded-3xl p-6"
        >
          <p className="text-sm text-slate-200">
            «Портфолио АУБ-1-24 отражает сильную образовательную культуру ОшГУ и современные
            направления МФТИТ.»
          </p>
          <div className="mt-4 text-xs text-slate-400">— Куратор кафедры ПИиИБ</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
