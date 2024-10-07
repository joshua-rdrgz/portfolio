import { ProjectsIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Project Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'skillList',
      title: 'List of Skills',
      type: 'reference',
      to: { type: 'skillList' },
    }),
    defineField({
      name: 'linkList',
      title: 'List of Links',
      type: 'reference',
      to: { type: 'linkList' },
    }),
    defineField({
      name: 'modalContent',
      title: 'Project Details',
      description:
        'This will be presented in the project\'s "More Info" modal.',
      type: 'blockContent',
    }),
  ],
});
