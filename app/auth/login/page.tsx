'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

import { createSupabaseBrowserClient } from '@/lib/supabaseClient';
import { SupabaseStatus } from '@/components/supabase-status';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/toast';

const loginSchema = z.object({
  email: z.string().email('Введите корректный email.'),
  password: z.string().min(6, 'Минимум 6 символов.')
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { notify } = useToast();
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    });
    setLoading(false);

    if (error) {
      const isInvalid = error.message.toLowerCase().includes('invalid login credentials');
      notify({
        title: 'Ошибка входа',
        description: isInvalid
          ? 'Неверный email или пароль. Проверьте, что пользователь создан в Supabase Auth и пароль совпадает.'
          : error.message,
        variant: 'error'
      });
      return;
    }

    const { data: userResult } = await supabase.auth.getUser();
    if (userResult.user?.app_metadata?.role === 'admin') {
      router.push('/admin');
      return;
    }
    notify({
      title: 'Успешный вход',
      description: 'Добро пожаловать в кабинет.',
      variant: 'success'
    });
    router.push('/dashboard');
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 px-4 py-16">
      <SupabaseStatus />
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Вход в систему</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="aub124.student@oshsu.kg" {...form.register('email')} />
                {form.formState.errors.email && (
                  <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Пароль</label>
                <Input type="password" placeholder="••••••••" {...form.register('password')} />
                {form.formState.errors.password && (
                  <p className="text-xs text-red-500">{form.formState.errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Входим...' : 'Войти через Supabase'}
              </Button>
            </form>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Используйте email в формате <span className="font-medium">aub124.имя-фамилия@oshsu.kg</span>{' '}
              и временный пароль из админ-панели.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">На главную</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
