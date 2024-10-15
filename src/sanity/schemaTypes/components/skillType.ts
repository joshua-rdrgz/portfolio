import { InlineSvgPreviewItem } from '@focus-reactive/sanity-plugin-inline-svg-input';
import { HighlightIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { createImageField } from '../utils/createImageField';

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
      deprecated: {
        reason:
          "use 'skillIcon' instead now, bare SVG code sent over is unreliable.",
      },
      readOnly: true,
    }),
    createImageField('skillIcon', 'Skill Icon'),
    defineField({
      name: 'label',
      title: 'Skill',
      type: 'string',
    }),
  ],
});
