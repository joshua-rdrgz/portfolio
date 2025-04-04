'use client';

import AppImage from '@/components/ui/AppImage';
import { HeroboxSectionType } from '@/types/sanity';
import { PortableText } from 'next-sanity';

interface HeroboxProps {
  data: HeroboxSectionType;
}

export default function Herobox({ data }: HeroboxProps) {
  return (
    <section
      id={data.navItemRef?.slug!}
      className='h-[85vh] relative flex flex-col justify-center -mx-7'
    >
      <div className='absolute inset-0'>
        <AppImage
          src={data.heroboxImage?.src}
          alt={data.heroboxImage?.alt}
          priority
          wrapperClassName='w-full h-full'
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-background/90'></div>
      </div>
      <div className='relative z-[1] text-center md:text-left p-8 md:pl-16'>
        <div className='text-md md:text-lg lg:text-xl text-foreground'>
          {data.prefix}
        </div>
        <h2 className='text-4xl md:text-6xl lg:text-7xl py-4 text-foreground'>
          {data.header}
        </h2>
        <div className='text-lg max-w-4xl mx-auto md:text-xl md:mx-0 lg:text-2xl text-foreground'>
          <PortableText
            value={data.tagline!}
            components={{
              marks: {
                strong: ({ children }) => (
                  <span className='font-bold'>{children}</span>
                ),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
}
