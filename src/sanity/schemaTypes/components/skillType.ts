import { InlineSvgPreviewItem } from '@focus-reactive/sanity-plugin-inline-svg-input';
import { HighlightIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: HighlightIcon,
  fields: [
    defineField({
      name: 'svgIcon',
      title: 'SVG Icon',
      type: 'inlineSvg',
    }),
    defineField({
      name: 'label',
      title: 'Skill',
      type: 'string',
    }),
  ],
});
