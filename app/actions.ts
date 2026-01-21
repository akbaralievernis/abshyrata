'use server';

import { revalidatePath } from 'next/cache';

import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function updateProfile(formData: FormData) {
  const supabase = createSupabaseServerClient();
  const profileId = formData.get('profileId')?.toString();
  const github = formData.get('github')?.toString();
  const linkedin = formData.get('linkedin')?.toString();

  if (!profileId) {
    return { error: 'Missing profile id.' };
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      full_name: formData.get('fullName'),
      bio: formData.get('bio'),
      phone: formData.get('phone'),
      phone_public: formData.get('phonePublic') === 'on',
      email_public: formData.get('emailPublic') === 'on',
      socials: {
        github,
        linkedin
      },
      skills: (formData.get('skills')?.toString() || '')
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean)
    })
    .eq('id', profileId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/dashboard');
  return { success: true };
}

export async function createNewsPost(formData: FormData) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from('posts').insert({
    title: formData.get('title'),
    content: formData.get('content'),
    cover_url: formData.get('coverUrl'),
    category: formData.get('category'),
    is_published: formData.get('isPublished') === 'on'
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/news');
  return { success: true };
}
