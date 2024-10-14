'use client';

import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

interface ExperienceProps {
  data: Extract<
    NonNullable<NonNullablePortfolioContent['pageContent']>[number],
    { _type: 'timelineSection' }
  >;
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id={data.navItemRef?.slug!}>
      <div>{data.header}</div>
      <ul>
        {data.timeline?.map((job, idx) => (
          <li key={`${job.title}-${idx}`}>
            <div>{job.title}</div>
            <div>{job.dates}</div>
            <div>{job.companyName}</div>
            <div>{job.location}</div>
            <PortableText value={job.description!} />
          </li>
        ))}
      </ul>
    </section>
  );
}
