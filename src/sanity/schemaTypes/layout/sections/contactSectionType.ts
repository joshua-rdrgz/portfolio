import { defineField, defineType } from 'sanity';
import { createImageField } from '../../utils/createImageField';
import { navItemRef } from './utils';

export const contactSectionType = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    navItemRef,
    defineField({
      name: 'header',
      title: 'Section Header',
      type: 'string',
    }),
    createImageField('contactImage', 'Contact Image'),
  ],
});
