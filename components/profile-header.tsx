import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

interface ProfileHeaderProps {
  fullName: string;
  role: string;
  avatar: string;
  skills: string[];
}

export function ProfileHeader({ fullName, role, avatar, skills }: ProfileHeaderProps) {
  return (
    <div className="glass flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full">
        <Image src={avatar} alt={fullName} fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          АУБ-1-24 · ОшГУ
        </p>
        <h1 className="text-3xl font-semibold">{fullName}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">{role}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
