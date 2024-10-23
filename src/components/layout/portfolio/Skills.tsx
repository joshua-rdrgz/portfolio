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
    <section id={data.navItemRef?.slug!} className='mt-8'>
      <div className='flex flex-col text-center md:text-left mb-12 md:gap-6 gap-4'>
        <h2 className='text-4xl md:text-5xl font-bold'>{data.header}</h2>
        <div className='text-lg md:text-xl'>
          <PortableText
            value={data.description!}
            components={{
              marks: {
                strong: ({ children }) => <strong>{children}</strong>,
              },
            }}
          />
        </div>
      </div>
      <ul className='flex flex-wrap gap-4 justify-center'>
        {data.skillListProperties?.list?.map((skill, idx) => (
          <C.Root
            key={`${skill.label}-${idx}`}
            className='w-[150px] md:w-[200px] hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-transform'
          >
            <C.Content>
              <li>
                <div className='flex items-center justify-center p-4'>
                  <AppImage
                    src={skill.skillIcon?.src}
                    alt={skill.skillIcon?.alt}
                    width={25}
                    height={25}
                    wrapperClassName='w-16 md:w-24 h-16 md:h-24'
                    className='w-full h-full object-contain'
                  />
                </div>
                <C.Title className='text-base md:text-lg text-center'>
                  {skill.label}
                </C.Title>
              </li>
            </C.Content>
          </C.Root>
        ))}
      </ul>
    </section>
  );
}
