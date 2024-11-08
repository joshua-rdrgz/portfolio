'use client';

import ContactForm from '@/components/ContactForm';
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
    <section
      id={data.navItemRef?.slug!}
      className='h-[85vh] relative flex flex-col justify-center -mx-7 mt-8'
    >
      <div className='absolute inset-0'>
        <AppImage
          src={data.contactImage?.src}
          alt={data.contactImage?.alt}
          wrapperClassName='w-full h-full'
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-background/95' />
      </div>
      <div className='relative z-[1] text-center md:text-left p-8 md:pl-16'>
        <h2 className='mb-8 text-center text-4xl font-bold md:text-5xl'>
          {data.header}
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
