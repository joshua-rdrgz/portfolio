'use client';

import AppImage from '@/components/ui/AppImage';
import { PortfolioContentQueryResult } from '@/sanity/types';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

interface ContactProps {
  data: Extract<
    NonNullable<NonNullablePortfolioContent['pageContent']>[number],
    { _type: 'contactSection' }
  >;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id={data.navItemRef?.slug!}>
      <div>{data.header}</div>
      <AppImage
        src={data.contactImage?.src}
        alt={data.contactImage?.alt}
        wrapperClassName='w-full h-full'
        className='w-auto'
      />
    </section>
  );
}
