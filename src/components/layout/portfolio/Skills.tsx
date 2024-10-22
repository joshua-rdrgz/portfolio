'use client';

import AppImage from '@/components/ui/AppImage';
import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import * as C from '@/components/ui/card';

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
      <h2 className='text-4xl font-bold'>{data.header}</h2>
      <div className='text-md'>
        <PortableText
          value={data.description!}
          components={{
            marks: {
              strong: ({ children }) => <strong>{children}</strong>,
            },
          }}
        />
      </div>
      <ul className='flex flex-wrap w-full gap-4 justify-center items-center'>
        {data.skillListProperties?.list?.map((skill, idx) => (
          <C.Root
            key={`${skill.label}-${idx}`}
            className='max-w-[200px] hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-transform text-center'
          >
            <C.Content>
              <li>
                <AppImage
                  src={skill.skillIcon?.src}
                  alt={skill.skillIcon?.alt}
                  width={25}
                  height={25}
                  wrapperClassName='w-full h-auto p-4'
                  className='w-full h-auto'
                />
                <C.Title>{skill.label}</C.Title>
              </li>
            </C.Content>
          </C.Root>
        ))}
      </ul>
    </section>
  );
}
