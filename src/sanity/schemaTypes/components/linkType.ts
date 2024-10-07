import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'svgIcon',
      title: 'SVG Icon',
      type: 'inlineSvg',
    }),
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
