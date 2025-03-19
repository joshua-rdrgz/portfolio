'use client';

import * as D from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import * as SA from '@/components/ui/scroll-area';
import { ProjectType } from '@/types/sanity';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import { components } from '@/sanity/portableTextComponents';

interface ProjectDetailsDialogProps {
  project: ProjectType;
}

export function ProjectDetailsDialog({ project }: ProjectDetailsDialogProps) {
  return (
    <D.Content className='max-w-3xl'>
      <D.Header>
        <D.Title className='text-2xl font-bold md:text-3xl'>
          {project.title}
        </D.Title>
        <D.Description className='text-base text-muted-foreground md:text-lg'>
          {project.subtitle}
        </D.Description>
      </D.Header>

      <SA.Root className='mt-6 max-h-[60vh] md:max-h-[70vh] '>
        <div className='prose prose-sm prose-invert min-w-full'>
          <PortableText value={project.modalContent!} components={components} />
        </div>
      </SA.Root>

      <div className='mt-6 flex flex-col items-center gap-4 w-full'>
        {project.linkListProperties?.list?.map((link, idx) => (
          <Button
            key={`${link.label}-${idx}`}
            variant='outline'
            asChild
            className='text-base md:text-lg py-6 px-8 w-full sm:w-auto'
          >
            <Link href={link.url!} target='_blank'>
              {link.label}
            </Link>
          </Button>
        ))}
      </div>
    </D.Content>
  );
}
