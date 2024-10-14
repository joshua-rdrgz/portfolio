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
    <section id={data.navItemRef?.slug!}>
      <div>{data.prefix}</div>
      <div>{data.header}</div>
      <PortableText value={data.tagline!} />
      <AppImage
        src={data.heroboxImage?.src}
        alt={data.heroboxImage?.alt}
        priority
      />
    </section>
  );
}
