import Link from 'next/link';

import { ScrollReveal } from '@/components/scroll-reveal';
import { TripGalleryLightbox } from '@/components/trip-gallery-lightbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { trips } from '@/lib/data';

export default function TripsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <ScrollReveal className="space-y-2">
        <h1 className="text-3xl font-semibold">Путешествия и мероприятия</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Альбомы поездок, экскурсий и студенческих событий группы АУБ-1-24.
        </p>
      </ScrollReveal>
      <div className="space-y-8">
        {trips.map((trip) => (
          <ScrollReveal key={trip.id}>
            <Card className="glass">
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{trip.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{trip.location}</p>
                  </div>
                  <Badge>{trip.date}</Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{trip.description}</p>
                <TripGalleryLightbox media={trip.media} />
                <Button asChild variant="outline">
                  <Link href={`/trips/${trip.id}`}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
