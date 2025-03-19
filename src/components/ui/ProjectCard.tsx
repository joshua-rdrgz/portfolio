'use client';

import { Badge } from '@/components/ui/badge';
import AppImage from '@/components/ui/AppImage';
import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/sanity';
import { motion } from 'framer-motion';
import { ProjectDialog } from './project-dialog/ProjectDialog';
import { useState } from 'react';

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className='relative rounded-lg overflow-hidden border border-border group hover:border-ring transition-colors duration-300 flex flex-col h-full'
      >
        <div className='absolute top-3 right-3 z-10'>
          <Badge
            className={`
              px-3 py-1 text-sm font-medium uppercase
              ${
                project.projectCategory === 'project'
                  ? 'bg-[hsl(var(--project))] text-white'
                  : 'bg-[hsl(var(--codepen))] text-black'
              }
            `}
          >
            {project.projectCategory}
          </Badge>
        </div>
        <div className='relative w-full pt-[56.25%]'>
          {/* 16:9 aspect ratio */}
          <AppImage
            src={project.mainProjectImage?.src}
            alt={project.mainProjectImage?.alt}
            className='absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <div className='p-4 space-y-6 flex-grow flex flex-col justify-between'>
          <div className='space-y-2'>
            <h3 className='font-bold text-base sm:text-lg md:text-xl'>
              {project.title}
            </h3>
            <p className='text-xs sm:text-sm md:text-base text-muted-foreground'>
              {project.subtitle}
            </p>
          </div>
          <div className='flex gap-2 flex-wrap'>
            {project.skillListProperties?.list?.slice(0, 2).map((skill) => (
              <Badge
                key={skill.label}
                variant='secondary'
                className='text-xs sm:text-sm'
              >
                {skill.label}
              </Badge>
            ))}
          </div>
          <div className='flex justify-center mt-auto'>
            <Button
              variant='outline'
              onClick={() => setDialogOpen(true)}
              className='w-full sm:w-auto text-sm sm:text-base'
            >
              See More
            </Button>
          </div>
        </div>
      </motion.div>

      <ProjectDialog
        project={project}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
