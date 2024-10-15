import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { createImageField } from '../utils/createImageField';

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
      deprecated: {
        reason:
          "use 'skillIcon' instead now, bare SVG code sent over is unreliable.",
      },
      readOnly: true,
    }),
    createImageField('linkIcon', 'Link Icon'),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL (href)',
      type: 'url',
    }),
  ],
});
