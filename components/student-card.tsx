'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface StudentCardProps {
  slug: string;
  fullName: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
}

export function StudentCard({ slug, fullName, role, bio, avatar, skills }: StudentCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glass rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image src={avatar} alt={fullName} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-base font-semibold">{fullName}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.slice(0, 3).map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
      <Button asChild size="sm" className="mt-4">
        <Link href={`/student/${slug}`}>Профиль</Link>
      </Button>
    </motion.div>
  );
}
