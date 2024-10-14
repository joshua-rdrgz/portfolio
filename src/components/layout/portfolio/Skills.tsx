'use client';

import SvgRenderer from '@/components/ui/SvgRenderer';
import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import React from 'react';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

interface SkillsProps {
  data: Extract<
    NonNullable<NonNullablePortfolioContent['pageContent']>[number],
    { _type: 'skillSection' }
  >;
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id={data.navItemRef?.slug!}>
      <div>{data.header}</div>
      <PortableText value={data.description!} />
      <section>
        <ul>
          {data.skillListProperties?.list?.map((skill, idx) => (
            <li key={`${skill.label}-${idx}`}>
              <SvgRenderer svg={skill.svgIcon!} />
              <div>{skill.label}</div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
