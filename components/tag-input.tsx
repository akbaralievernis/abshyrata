'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export function TagInput({
  value,
  onChange
}: {
  value: string[];
  onChange: (tags: string[]) => void;
}) {
  const [input, setInput] = useState('');

  const addTag = (tag: string) => {
    const normalized = tag.trim();
    if (!normalized || value.includes(normalized)) return;
    onChange([...value, normalized]);
    setInput('');
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((item) => item !== tag));
  };

  return (
    <div className="space-y-2">
      <Input
        value={input}
        placeholder="Введите навык и нажмите Enter"
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            addTag(input);
          }
        }}
      />
      <div className="flex flex-wrap gap-2">
        {value.map((tag) => (
          <button key={tag} type="button" onClick={() => removeTag(tag)}>
            <Badge className="cursor-pointer">{tag} ×</Badge>
          </button>
        ))}
      </div>
    </div>
  );
}
