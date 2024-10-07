import { defineArrayMember, defineField, defineType } from 'sanity';
import { navItemRef } from './utils';

export const timelineSectionType = defineType({
  name: 'timelineSection',
  title: 'Timeline Section',
  type: 'object',
  fields: [
    navItemRef,
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'string',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'jobProperties' },
        }),
      ],
    }),
  ],
});
