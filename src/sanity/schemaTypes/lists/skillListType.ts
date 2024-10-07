import { OlistIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const skillListType = defineType({
  name: 'skillList',
  title: 'List of Skills',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'skillListName',
      title: 'Name Of Skills List',
      type: 'string',
    }),
    defineField({
      name: 'list',
      title: 'The list',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'skill' },
        }),
      ],
    }),
  ],
});
