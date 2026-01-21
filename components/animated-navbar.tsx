'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

const mainLinks = [
  { href: '/', label: 'Главная' },
  { href: '/students', label: 'Студенты' },
  { href: '/news', label: 'Новости' },
  { href: '/trips', label: 'Путешествия' },
  { href: '/dashboard', label: 'Кабинет' }
];

const sectionIds = ['about', 'skills', 'facts', 'trips', 'news', 'students'];

export function AnimatedNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [pathname]);

  const sectionLinks = useMemo(
    () =>
      sectionIds.map((id) => ({
        href: `/#${id}`,
        label:
          id === 'about'
            ? 'О группе'
            : id === 'skills'
              ? 'Направления'
              : id === 'facts'
                ? 'Достижения'
                : id === 'trips'
                  ? 'Мероприятия'
                  : id === 'news'
                    ? 'Новости'
                    : 'Студенты',
        id
      })),
    []
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-semibold">
          АУБ-1-24 · Портфолио
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {(pathname === '/' ? sectionLinks : mainLinks).map((link) => {
            const isActive = pathname === link.href || activeSection === link.id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="active-link"
                    className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/auth/login">Войти</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/admin">Админ</Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(true)}>
            Меню
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 p-6 text-white md:hidden"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Навигация</p>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Закрыть
              </Button>
            </div>
            <div className="mt-6 flex flex-col gap-4 text-lg">
              {(pathname === '/' ? sectionLinks : mainLinks).map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
