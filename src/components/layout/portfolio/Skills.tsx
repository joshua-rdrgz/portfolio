'use client';

import AppImage from '@/components/ui/AppImage';
import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';

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
              <AppImage
                src={skill.skillIcon?.src}
                alt={skill.skillIcon?.alt}
                width={25}
                height={25}
                wrapperClassName='w-8 h-8'
                className='w-auto'
              />
              <div>{skill.label}</div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
