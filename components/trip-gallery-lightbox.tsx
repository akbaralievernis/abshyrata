'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

interface MediaItem {
  type: 'photo' | 'video';
  url: string;
  caption: string;
}

export function TripGalleryLightbox({ media }: { media: MediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {media.map((item, index) => (
          <button
            key={item.url}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-40 overflow-hidden rounded-2xl"
          >
            <Image src={item.url} alt={item.caption} fill className="object-cover" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 transition group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 text-xs text-white">{item.caption}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-3xl rounded-3xl bg-white p-4 shadow-2xl dark:bg-slate-900"
            >
            <div className="relative h-[60vh] w-[80vw] max-w-3xl overflow-hidden rounded-2xl">
              {media[activeIndex].type === 'video' ? (
                <video
                  src={media[activeIndex].url}
                  controls
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={media[activeIndex].url}
                  alt={media[activeIndex].caption}
                  fill
                  className="object-cover"
                />
              )}
            </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {media[activeIndex].caption}
              </p>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" onClick={() => setActiveIndex(null)}>
                  Закрыть
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
