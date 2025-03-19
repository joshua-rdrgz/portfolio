'use client';

import * as D from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AppImage from '@/components/ui/AppImage';
import { ProjectType } from '@/types/sanity';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import * as T from '@/components/ui/tooltip';

interface ProjectPreviewDialogProps {
  project: ProjectType;
}

export function ProjectPreviewDialog({ project }: ProjectPreviewDialogProps) {
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

      <div className='mt-6 space-y-6'>
        <AppImage
          src={project.mainProjectImage?.src}
          alt={project.mainProjectImage?.alt}
          className='rounded-lg w-full'
          width={1200}
          height={675}
        />

        <div className='prose prose-sm prose-invert max-w-none'>
          <PortableText value={project.description!} />
        </div>

        <div className='flex flex-wrap gap-3'>
          {project.skillListProperties?.list?.map((skill, idx) => (
            <Badge
              key={`${skill.label}-${idx}`}
              variant='secondary'
              className='text-sm'
            >
              {skill.label}
            </Badge>
          ))}
        </div>

        <div className='flex flex-col items-center gap-4 w-full'>
          <T.Provider>
            <T.Root>
              <T.Trigger asChild>
                <span className='w-full sm:w-auto'>
                  <Button
                    variant='outline'
                    disabled
                    className='text-base md:text-lg py-6 px-8 w-full sm:w-auto'
                  >
                    See Blog Post
                  </Button>
                </span>
              </T.Trigger>
              <T.Content>Under Construction -- Be Here Soon!</T.Content>
            </T.Root>
          </T.Provider>

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
      </div>
    </D.Content>
  );
}
