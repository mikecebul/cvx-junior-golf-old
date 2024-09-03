import React from 'react'
import type { Schedule as ScheduleType } from '@/payload-types'
import { format } from 'date-fns'
import Image from 'next/image'
import { HeroMedium } from '@/components/Hero/HeroMedium'
import Container from '@/components/Container'

export function ScheduleBlock(props: ScheduleType) {
  const { hero, events, image } = props
  const mediumImpact =
    Array.isArray(hero) && hero[0].mediumImpact !== null ? hero[0].mediumImpact : null

  return (
    <Container>
      {!!mediumImpact && <HeroMedium {...mediumImpact} />}
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="grid gap-4">
            {!!events &&
              events.length > 0 &&
              events.map((event) => (
                <div key={event.id} className="bg-background rounded-lg border p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="text-muted-foreground">{format(event.date, 'MMMM do, yyyy')}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground pt-2">{event.description}</p>
                </div>
              ))}
          </div>
        </div>
        {image != null && typeof image === 'object' && (
          <Image
            src={image.url ?? '/placeholder.svg'}
            alt={image.alt ?? ''}
            className="object-cover w-full rounded-lg"
            width={1080}
            height={1980}
          />
        )}
      </div>
    </Container>
  )
}
