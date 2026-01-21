'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { groupStats } from '@/lib/data';

function useCountUp(target: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return count;
}

export function StatsCounters() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {groupStats.map((stat) => {
        const count = useCountUp(stat.value);
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl px-6 py-5 text-center"
          >
            <p className="text-3xl font-semibold text-blue-600 dark:text-blue-400">{count}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
