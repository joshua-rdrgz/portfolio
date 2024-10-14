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
      <div>{data.header}</div>
      <PortableText value={data.content!} />
    </section>
  );
}
