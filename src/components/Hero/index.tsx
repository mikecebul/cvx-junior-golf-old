import Image from 'next/image'
import type { Hero as HeroType } from '@/payload-types'
import { CMSLink } from '../Link'

type Props = NonNullable<HeroType['highImpact']>

export async function Hero({ title, description, image, links }: Props) {
  return (
    <section className="grid lg:gap-8 lg:grid-cols-12 2xl:px-0 2xl:container pb-16">
      <div className="mr-auto place-self-center lg:col-span-6">
        <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight lg:mb-8 sm:text-4xl xl:text-6xl 2xl:text-7xl">
          {title}
        </h1>
        <p className="max-w-xl mb-4 lg:mb-8 text-muted-foreground text-lg">{description}</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 xl:space-x-0">
          {links != null &&
            links.map(({ link, id }, index) => (
              <CMSLink
                key={id}
                {...link}
                size="xl"
                appearance={index === 0 ? 'brand' : link.appearance}
                className="hidden xl:flex lg:min-w-64"
              />
            ))}
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-6 lg:flex relative">
        {image != null && typeof image === 'object' && (
          <Image
            src={image.url ?? ''}
            alt={image.alt ?? ''}
            className="object-cover w-full rounded-lg"
            width={1080}
            height={1980}
            priority
          />
        )}
      </div>
    </section>
  )
}

const SVG = () => {
  return (
    <span className="absolute -left-8 -bottom-8 -z-10 text-brand">
      <svg
        width="93"
        height="93"
        viewBox="0 0 93 93"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2.5" cy="2.5" r="2.5" />
        <circle cx="2.5" cy="24.5" r="2.5" />
        <circle cx="2.5" cy="46.5" r="2.5" />
        <circle cx="2.5" cy="68.5" r="2.5" />
        <circle cx="2.5" cy="90.5" r="2.5" />
        <circle cx="24.5" cy="2.5" r="2.5" />
        <circle cx="24.5" cy="24.5" r="2.5" />
        <circle cx="24.5" cy="46.5" r="2.5" />
        <circle cx="24.5" cy="68.5" r="2.5" />
        <circle cx="24.5" cy="90.5" r="2.5" />
        <circle cx="46.5" cy="2.5" r="2.5" />
        <circle cx="46.5" cy="24.5" r="2.5" />
        <circle cx="46.5" cy="46.5" r="2.5" />
        <circle cx="46.5" cy="68.5" r="2.5" />
        <circle cx="46.5" cy="90.5" r="2.5" />
        <circle cx="68.5" cy="2.5" r="2.5" />
        <circle cx="68.5" cy="24.5" r="2.5" />
        <circle cx="68.5" cy="46.5" r="2.5" />
        <circle cx="68.5" cy="68.5" r="2.5" />
        <circle cx="68.5" cy="90.5" r="2.5" />
        <circle cx="90.5" cy="2.5" r="2.5" />
        <circle cx="90.5" cy="24.5" r="2.5" />
        <circle cx="90.5" cy="46.5" r="2.5" />
        <circle cx="90.5" cy="68.5" r="2.5" />
        <circle cx="90.5" cy="90.5" r="2.5" />
      </svg>
    </span>
  )
}
