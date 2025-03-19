'use client';

import { ProjectsGrid } from '@/components/ui/ProjectsGrid';
import { ProjectSectionType } from '@/types/sanity';

interface ProjectsProps {
  data: ProjectSectionType;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section
      id={data.navItemRef?.slug!}
      className='mt-12 mb-24 flex flex-col gap-4 px-4 text-white'
    >
      <h2 className='mb-8 text-center text-4xl font-bold md:text-5xl'>
        {data.header}
      </h2>
      <ProjectsGrid projects={data.projectListProperties?.list || []} />
    </section>
  );
}
