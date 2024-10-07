import { OlistIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const navListType = defineType({
  name: 'navList',
  title: 'List of Navigation Links',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'navListName',
      title: 'Name Of Navigation List',
      type: 'string',
    }),
    defineField({
      name: 'list',
      title: 'The list',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'navItem' },
        }),
      ],
    }),
  ],
});
