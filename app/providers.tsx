'use client';

import { PageTransition } from '@/components/page-transition';
import { ToastProvider } from '@/components/ui/toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <PageTransition>{children}</PageTransition>
    </ToastProvider>
  );
}
