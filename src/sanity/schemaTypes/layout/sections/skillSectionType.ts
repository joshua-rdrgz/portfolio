import { defineArrayMember, defineField, defineType } from 'sanity';
import { navItemRef } from './utils';

export const skillSectionType = defineType({
  name: 'skillSection',
  title: 'Skill Section',
  type: 'object',
  fields: [
    navItemRef,
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'skillListProperties',
      title: 'Skill List',
      description: 'Choose which skill list you would like to use.',
      type: 'reference',
      to: { type: 'skillList' },
    }),
  ],
});
