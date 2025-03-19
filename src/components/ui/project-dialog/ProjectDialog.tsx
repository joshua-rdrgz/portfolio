'use client';

import * as D from '@/components/ui/dialog';
import { ProjectDetailsDialog } from '@/components/ui/project-dialog/ProjectDetailsDialog';
import { ProjectPreviewDialog } from '@/components/ui/project-dialog/ProjectPreviewDialog';
import { ProjectType } from '@/types/sanity';

interface ProjectDialogProps {
  project: ProjectType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open,
  onOpenChange,
}: ProjectDialogProps) {
  return (
    <D.Root open={open} onOpenChange={onOpenChange}>
      {project.projectCategory === 'project' ? (
        <ProjectPreviewDialog project={project} />
      ) : (
        <ProjectDetailsDialog project={project} />
      )}
    </D.Root>
  );
}
