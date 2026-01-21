'use client';

export function SupabaseStatus() {
  const hasEnv = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  if (hasEnv) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-100">
      <p className="font-semibold">Supabase не настроен</p>
      <p className="mt-1 text-xs text-amber-800/80 dark:text-amber-100/80">
        Добавьте <span className="font-medium">NEXT_PUBLIC_SUPABASE_URL</span> и{' '}
        <span className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY</span> в .env.local и
        перезапустите сервер.
      </p>
    </div>
  );
}
