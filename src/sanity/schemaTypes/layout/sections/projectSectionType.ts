import { defineField, defineType } from 'sanity';
import { navItemRef } from './utils';

export const projectSectionType = defineType({
  name: 'projectSection',
  title: 'Project Section',
  type: 'object',
  fields: [
    navItemRef,
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'string',
    }),
    defineField({
      name: 'projectListProperties',
      title: 'Projects',
      description: "Choose which project list you'd like to showcase",
      type: 'reference',
      to: { type: 'projectList' },
    }),
  ],
});
