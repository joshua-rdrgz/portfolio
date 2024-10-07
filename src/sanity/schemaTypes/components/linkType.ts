import { defineField, defineType } from 'sanity';
import { LinkIcon } from '@sanity/icons';
import { createImageField } from '../utils/createImageField';

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    createImageField('icon', 'Icon'),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'text',
    }),
    defineField({
      name: 'url',
      title: 'URL (href)',
      type: 'url',
    }),
  ],
});
