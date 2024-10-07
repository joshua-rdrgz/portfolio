import { defineArrayMember, defineField, defineType } from 'sanity';
import { createImageField } from '../../utils/createImageField';
import { navItemRef } from './utils';

export const heroboxSectionType = defineType({
  name: 'heroboxSection',
  title: 'Herobox Section',
  type: 'object',
  fields: [
    navItemRef,
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'prefix',
      title: 'Header Prefix',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    createImageField('heroboxImage', 'Herobox Image'),
  ],
});
