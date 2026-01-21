'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { updateProfile } from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const profileSchema = z.object({
  profileId: z.string().min(1),
  fullName: z.string().min(2, 'Full name is required.'),
  bio: z.string().min(10, 'Bio should be at least 10 characters.'),
  phone: z.string().min(5, 'Phone is required.'),
  skills: z.string().min(3, 'Add at least one skill.'),
  phonePublic: z.boolean().optional(),
  emailPublic: z.boolean().optional()
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function DashboardPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      profileId: 'demo-profile-id',
      fullName: 'Aisya Toktosunova',
      bio: 'Full-stack developer focused on secure web systems and human-centered design.',
      phone: '+996 555 123 456',
      skills: 'Next.js, TypeScript, Supabase',
      phonePublic: true,
      emailPublic: false
    }
  });

  const onSubmit = (values: ProfileFormValues) => {
    setStatus(null);
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      const result = await updateProfile(formData);
      if (result?.error) {
        setStatus(result.error);
        return;
      }
      setStatus('Profile updated successfully.');
    });
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Student Dashboard</h1>
        <p className="text-slate-600">
          Manage your AUB-1-24 profile for the MFTIT Institute at Osh State University.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Profile Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <p>Role: Student</p>
            <p>Program: Applied Informatics & Information Security</p>
            <p>Group: AUB-1-24</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Active</Badge>
              <Badge>Verified</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <input type="hidden" {...form.register('profileId')} />
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input {...form.register('fullName')} />
                {form.formState.errors.fullName && (
                  <p className="text-xs text-red-500">{form.formState.errors.fullName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <Textarea {...form.register('bio')} />
                {form.formState.errors.bio && (
                  <p className="text-xs text-red-500">{form.formState.errors.bio.message}</p>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input {...form.register('phone')} />
                  {form.formState.errors.phone && (
                    <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills (comma-separated)</label>
                  <Input {...form.register('skills')} />
                  {form.formState.errors.skills && (
                    <p className="text-xs text-red-500">{form.formState.errors.skills.message}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" {...form.register('phonePublic')} />
                  Show phone publicly
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" {...form.register('emailPublic')} />
                  Show email publicly
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={isPending}>
                  Save changes
                </Button>
                {status && <p className="text-sm text-slate-600">{status}</p>}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
