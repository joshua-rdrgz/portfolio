'use client';

import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

interface AboutProps {
  data: Extract<
    NonNullable<NonNullablePortfolioContent['pageContent']>[number],
    { _type: 'aboutSection' }
  >;
}

export default function About({ data }: AboutProps) {
  return (
    <section id={data.navItemRef?.slug!}>
      <h2 className='mb-8 text-center text-4xl font-bold md:text-5xl'>
        {data.header}
      </h2>
      <div className='prose prose-sm prose-invert max-w-[75%] mx-auto'>
        <PortableText value={data.content!} />
      </div>
    </section>
  );
}
