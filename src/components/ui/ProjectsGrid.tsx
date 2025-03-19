'use client';

import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectType } from '@/types/sanity';
import { motion } from 'framer-motion';

interface ProjectsGridProps {
  projects: ProjectType[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [filter, setFilter] = useState<'all' | 'project' | 'codepen'>('all');
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(
    (project) =>
      (filter === 'all' || project.projectCategory === filter) &&
      project.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='space-y-8'>
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4'>
        <Input
          placeholder='Search projects...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1'
        />
        <ToggleGroup
          type='single'
          value={filter}
          onValueChange={(value) => setFilter(value as typeof filter)}
          className='border rounded-lg p-0.5 bg-secondary/50 h-10'
        >
          <ToggleGroupItem
            value='all'
            className='flex-1 text-sm h-full data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground rounded transition-colors'
          >
            All
          </ToggleGroupItem>
          <ToggleGroupItem
            value='project'
            className='flex-1 text-sm h-full data-[state=on]:bg-[hsl(var(--project))] data-[state=on]:text-white rounded transition-colors'
          >
            Projects
          </ToggleGroupItem>
          <ToggleGroupItem
            value='codepen'
            className='flex-1 text-sm h-full data-[state=on]:bg-[hsl(var(--codepen))] data-[state=on]:text-black rounded transition-colors'
          >
            Codepens
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
        layout
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
