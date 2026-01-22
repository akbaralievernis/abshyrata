'use client';

import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { updateProfile } from '@/app/actions';
import { SupabaseStatus } from '@/components/supabase-status';
import { ScrollReveal } from '@/components/scroll-reveal';
import { TagInput } from '@/components/tag-input';
import { UploadAvatar } from '@/components/upload-avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast';
import { semesterSubjects } from '@/lib/data';
import { createSupabaseBrowserClient } from '@/lib/supabaseClient';

const profileSchema = z.object({
  profileId: z.string().min(1),
  fullName: z.string().min(2, 'Укажите имя.'),
  bio: z.string().min(10, 'Биография должна быть не менее 10 символов.'),
  phone: z.string().min(5, 'Введите номер телефона.'),
  skills: z.array(z.string()).min(1, 'Добавьте хотя бы один навык.'),
  phonePublic: z.boolean().optional(),
  emailPublic: z.boolean().optional(),
  github: z.string().url('Введите ссылку на GitHub.').optional().or(z.literal('')),
  linkedin: z.string().url('Введите ссылку на LinkedIn.').optional().or(z.literal(''))
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function DashboardPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { notify } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      profileId: '',
      fullName: 'Акбаралиев Эрнис',
      bio: 'Участвует в разработке учебных сервисов и защищённых веб-приложений.',
      phone: '+996 555 010 001',
      skills: ['Next.js', 'TypeScript', 'Supabase'],
      phonePublic: true,
      emailPublic: false,
      github: 'https://github.com',
      linkedin: ''
    }
  });
  const profileId = form.watch('profileId');
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const supabase = createSupabaseBrowserClient();
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        setIsLoadingProfile(false);
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('id, full_name, bio, phone, phone_public, email_public, skills, socials')
        .eq('user_id', user.id)
        .single();

      if (error) {
        notify({
          title: 'Не удалось загрузить профиль',
          description: error.message,
          variant: 'error'
        });
        setIsLoadingProfile(false);
        return;
      }

      form.reset({
        profileId: profile.id,
        fullName: profile.full_name || '',
        bio: profile.bio || '',
        phone: profile.phone || '',
        skills: profile.skills || [],
        phonePublic: profile.phone_public ?? false,
        emailPublic: profile.email_public ?? false,
        github: profile.socials?.github || '',
        linkedin: profile.socials?.linkedin || ''
      });
      setIsLoadingProfile(false);
    };

    loadProfile();
  }, [form, notify]);

  const onSubmit = (values: ProfileFormValues) => {
    setStatus(null);
    startTransition(async () => {
      const formData = new FormData();
      formData.append('profileId', values.profileId);
      formData.append('fullName', values.fullName);
      formData.append('bio', values.bio);
      formData.append('phone', values.phone);
      formData.append('skills', values.skills.join(','));
      formData.append('phonePublic', values.phonePublic ? 'on' : '');
      formData.append('emailPublic', values.emailPublic ? 'on' : '');
      formData.append('github', values.github || '');
      formData.append('linkedin', values.linkedin || '');
      const result = await updateProfile(formData);
      if (result?.error) {
        setStatus(result.error);
        notify({
          title: 'Ошибка сохранения',
          description: result.error,
          variant: 'error'
        });
        return;
      }
      setStatus('Профиль обновлён.');
      notify({
        title: 'Профиль обновлён',
        description: 'Данные успешно сохранены.',
        variant: 'success'
      });
    });
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6">
      <SupabaseStatus />
      <ScrollReveal className="space-y-2">
        <h1 className="text-3xl font-semibold">Личный кабинет студента</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Управляйте профилем АУБ-1-24 и настройками видимости.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        <ScrollReveal>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Краткий профиль</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>Роль: Студент</p>
              <p>Программа: Прикладная информатика и ИБ</p>
              <p>Группа: АУБ-1-24</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Активен</Badge>
                <Badge>Верифицирован</Badge>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-2">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Редактировать профиль</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {!isLoadingProfile && !profileId && (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-700">
                    Профиль не найден. Проверьте, что ваш пользователь в Supabase Auth связан с
                    таблицей profiles через поле user_id.
                  </div>
                )}
                <UploadAvatar />
                <div className="space-y-2">
                  <label className="text-sm font-medium">ФИО</label>
                  <Input {...form.register('fullName')} />
                  {form.formState.errors.fullName && (
                    <p className="text-xs text-red-500">{form.formState.errors.fullName.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">О себе</label>
                  <Textarea {...form.register('bio')} />
                  {form.formState.errors.bio && (
                    <p className="text-xs text-red-500">{form.formState.errors.bio.message}</p>
                  )}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input {...form.register('phone')} />
                    {form.formState.errors.phone && (
                      <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Навыки</label>
                    <TagInput
                      value={form.watch('skills')}
                      onChange={(tags) => form.setValue('skills', tags, { shouldValidate: true })}
                    />
                    {form.formState.errors.skills && (
                      <p className="text-xs text-red-500">{form.formState.errors.skills.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">GitHub</label>
                    <Input {...form.register('github')} placeholder="https://github.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">LinkedIn</label>
                    <Input {...form.register('linkedin')} placeholder="https://linkedin.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...form.register('phonePublic')} />
                    Показывать телефон публично
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...form.register('emailPublic')} />
                    Показывать email публично
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={isPending || !profileId || isLoadingProfile}>
                    {isLoadingProfile ? 'Загрузка...' : 'Сохранить'}
                  </Button>
                  {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
                </div>
              </form>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Учебные дисциплины (4 семестр)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600 dark:text-slate-300">
            <ul className="list-inside list-disc space-y-1">
              {semesterSubjects[4].map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  );
}
