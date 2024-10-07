import { defineField, defineType } from 'sanity';
import { createImageField } from '../../utils/createImageField';
import { navItemRef } from './utils';

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    navItemRef,
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'About Section Content',
      type: 'blockContent',
    }),
    createImageField('aboutImage', 'About Image'),
  ],
});
