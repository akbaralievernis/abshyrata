'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function UploadAvatar() {
  const [fileName, setFileName] = useState('');

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Аватар</label>
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <Input
          type="file"
          accept="image/*"
          onChange={(event) => setFileName(event.target.files?.[0]?.name || '')}
        />
        <Button type="button" variant="outline">
          Загрузить
        </Button>
      </div>
      {fileName && <p className="text-xs text-slate-500">Выбран файл: {fileName}</p>}
    </div>
  );
}
