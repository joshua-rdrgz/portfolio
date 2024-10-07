import { OlistIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const linkListType = defineType({
  name: 'linkList',
  title: 'List of Links',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'linkListName',
      title: 'Name Of Links List',
      type: 'string',
    }),
    defineField({
      name: 'list',
      title: 'The list',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'link' },
        }),
      ],
    }),
  ],
});
