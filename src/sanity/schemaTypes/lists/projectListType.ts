import { OlistIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectListType = defineType({
  name: 'projectList',
  title: 'List of Projects',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'projectListName',
      title: 'Name Of Projects List',
      type: 'string',
    }),
    defineField({
      name: 'list',
      title: 'The list',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'project' },
        }),
      ],
    }),
  ],
});
