'use client';

import AppImage from '@/components/ui/AppImage';
import { Button } from '@/components/ui/button';
import * as D from '@/components/ui/dialog';
import * as SA from '@/components/ui/scroll-area';
import { components } from '@/sanity/portableTextComponents';
import { PortfolioContentQueryResult } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import Link from 'next/link';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

interface ProjectsProps {
  data: Extract<
    NonNullable<NonNullablePortfolioContent['pageContent']>[number],
    { _type: 'projectSection' }
  >;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section
      id={data.navItemRef?.slug!}
      className='mt-12 flex flex-col gap-4 px-4 text-white'
    >
      <h2 className='mb-8 text-center text-4xl font-bold md:text-5xl'>
        {data.header}
      </h2>
      <ul className='flex flex-col gap-8'>
        {data.projectListProperties?.list?.map((project, projectIdx) => (
          <li
            key={`${project.title}-${projectIdx}`}
            className={`relative md:grid md:grid-cols-3 md:grid-rows-[0.1fr_0.8fr_0.1fr] md:gap-8 last:-mb-10`}
          >
            <div
              className={`relative z-0 w-full md:row-span-full ${
                projectIdx % 2 === 0
                  ? 'md:col-span-2 md:col-start-1'
                  : 'md:col-span-2 md:col-start-2'
              }`}
            >
              <AppImage
                src={project.mainProjectImage?.src}
                alt={project.mainProjectImage?.alt}
                className='rounded-lg'
                width={1200}
                height={675}
              />
            </div>
            <div
              className={`relative mt-[-20%] flex flex-col gap-4 rounded-lg bg-secondary/80 p-6 backdrop-blur-sm md:mt-0 md:col-span-2 md:row-start-2 ${
                projectIdx % 2 === 0
                  ? 'md:col-start-2 md:text-right'
                  : 'md:col-start-1 md:text-left'
              }`}
            >
              <div className='space-y-2'>
                <div className='text-base text-muted-foreground md:text-lg'>
                  {project.subtitle}
                </div>
                <h3 className='text-3xl font-bold md:text-4xl'>
                  {project.title}
                </h3>
              </div>
              <div className='prose prose-sm prose-invert max-w-none'>
                <PortableText value={project.description!} />
              </div>
              <ul
                className={`flex flex-wrap gap-3 ${
                  projectIdx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                {project.skillListProperties?.list?.map((skill, skillIdx) => (
                  <li
                    key={`${skill.label}-${skillIdx}`}
                    className='rounded bg-accent/10 px-2.5 py-0.5 text-xs'
                  >
                    {skill.label}
                  </li>
                ))}
              </ul>
              <div
                className={`flex flex-wrap gap-4 ${
                  projectIdx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                <D.Root>
                  <D.Trigger asChild>
                    <Button variant='outline'>More Info</Button>
                  </D.Trigger>
                  <D.Content className='rounded-lg'>
                    <D.Header>
                      <D.Title className='text-2xl font-bold md:text-3xl'>
                        {project.title}
                      </D.Title>
                      <D.Description className='text-base text-muted-foreground md:text-lg'>
                        {project.subtitle}
                      </D.Description>
                    </D.Header>
                    <SA.Root className='mt-6 max-h-[60vh] md:max-h-[70vh] mx-auto'>
                      <div className='prose prose-sm prose-invert'>
                        <PortableText
                          value={project.modalContent!}
                          components={components}
                        />
                      </div>
                    </SA.Root>
                  </D.Content>
                </D.Root>
                {project.linkListProperties?.list?.map((link, linkIdx) => (
                  <Button
                    key={`${link.label}-${linkIdx}`}
                    variant='outline'
                    asChild
                  >
                    <Link href={link.url!} target='_blank'>
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
