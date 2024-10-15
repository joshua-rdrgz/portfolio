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
    <section id={data.navItemRef?.slug!}>
      <div>{data.header}</div>
      <ul>
        {data.projectListProperties?.list?.map((project, projectIdx) => (
          <li key={`${project.title}-${projectIdx}`}>
            <AppImage
              src={project.mainProjectImage?.src}
              alt={project.mainProjectImage?.alt}
              wrapperClassName='w-full h-full'
              className='w-auto'
            />
            <div>{project.subtitle}</div>
            <div>{project.title}</div>
            <PortableText value={project.description!} />
            <ul>
              {project.skillListProperties?.list?.map((skill, skillIdx) => (
                <li key={`${skill.label}-${skillIdx}`}>
                  <div>{skill.label}</div>
                </li>
              ))}
            </ul>
            <D.Root>
              <D.Trigger asChild>
                <Button>More Info</Button>
              </D.Trigger>
              <D.Content className=' max-w-max'>
                <D.Title>{project.title}</D.Title>
                <SA.Root className='max-w-[600px] max-h-[750px]'>
                  {/* TODO: Images (they exist but aren't rendered) */}
                  <PortableText
                    value={project.modalContent!}
                    components={components}
                  />
                </SA.Root>
              </D.Content>
            </D.Root>
            {project.linkListProperties?.list?.map((link, linkIdx) => (
              <Button
                key={`${link.label}-${linkIdx}`}
                variant='secondary'
                asChild
              >
                <Link href={link.url!} target='_blank'>
                  {link.label}
                </Link>
              </Button>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
