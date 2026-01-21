import Link from 'next/link';

import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/students', label: 'Students' },
  { href: '/news', label: 'News' },
  { href: '/trips', label: 'Trips & Events' },
  { href: '/dashboard', label: 'Dashboard' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <Link href="/" className="text-lg font-semibold text-slate-900">
            AUB-1-24 Group Portfolio
          </Link>
          <p className="text-xs text-slate-500">
            Osh State University · MFTIT Institute · PIiIB Department
          </p>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/auth/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/admin">Admin Panel</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
