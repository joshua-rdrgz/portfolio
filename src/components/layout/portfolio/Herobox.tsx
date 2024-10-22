'use client';

import AppImage from '@/components/ui/AppImage';
import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

interface HeroboxProps {
  data: Extract<
    NonNullable<NonNullablePortfolioContent['pageContent']>[number],
    { _type: 'heroboxSection' }
  >;
}

export default function Herobox({ data }: HeroboxProps) {
  return (
    <section
      id={data.navItemRef?.slug!}
      className='min-h-screen md:min-h-[85vh] relative flex flex-col md:flex-row'
    >
      <div className='md:w-2/3 flex flex-col justify-center items-center text-center md:items-start md:text-left p-8 md:pl-16'>
        <div className='text-md md:text-lg lg:text-xl'>{data.prefix}</div>
        <div className='text-4xl md:text-6xl lg:text-7xl py-4'>
          {data.header}
        </div>
        <div className='text-lg md:text-xl lg:text-2xl max-w-lg'>
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
      <div className='hidden md:block md:w-1/3 relative'>
        <AppImage
          src={data.heroboxImage?.src}
          alt={data.heroboxImage?.alt}
          priority
          wrapperClassName='w-full h-full absolute top-0 right-0 transform rotate-20'
          className='object-cover object-center w-full h-full'
        />
      </div>
    </section>
  );
}
