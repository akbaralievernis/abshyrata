import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ScrollReveal } from '@/components/scroll-reveal';
import { TripGalleryLightbox } from '@/components/trip-gallery-lightbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { trips } from '@/lib/data';

interface TripDetailProps {
  params: { id: string };
}

export default function TripDetailPage({ params }: TripDetailProps) {
  const trip = trips.find((item) => item.id === params.id);

  if (!trip) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 md:px-6">
      <ScrollReveal>
        <Card className="glass">
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold">{trip.title}</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">{trip.location}</p>
              </div>
              <Badge>{trip.date}</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{trip.description}</p>
          </CardContent>
        </Card>
      </ScrollReveal>

      <ScrollReveal>
        <TripGalleryLightbox media={trip.media} />
      </ScrollReveal>

      <Button asChild variant="outline">
        <Link href="/trips">Назад к поездкам</Link>
      </Button>
    </div>
  );
}
