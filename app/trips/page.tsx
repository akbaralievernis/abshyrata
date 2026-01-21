import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { trips } from '@/lib/data';

export default function TripsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Trips & Events</h1>
        <p className="text-slate-600">
          Experience the academic trips, events, and field visits organized by the AUB-1-24 group.
        </p>
      </div>
      <div className="space-y-8">
        {trips.map((trip) => (
          <Card key={trip.id}>
            <CardContent className="space-y-4 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{trip.title}</h2>
                  <p className="text-sm text-slate-500">{trip.location}</p>
                </div>
                <Badge>{trip.date}</Badge>
              </div>
              <p className="text-sm text-slate-600">{trip.description}</p>
              <div className="grid gap-4 md:grid-cols-3">
                {trip.media.map((item) => (
                  <div key={item.url} className="space-y-2">
                    <div className="relative h-32 w-full overflow-hidden rounded-lg">
                      <Image src={item.url} alt={item.caption} fill className="object-cover" />
                    </div>
                    <p className="text-xs text-slate-500">{item.caption}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
