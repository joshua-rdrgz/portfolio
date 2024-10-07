import { defineField, defineType } from 'sanity';
import { createImageField } from '../utils/createImageField';
import { HighlightIcon } from '@sanity/icons';

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: HighlightIcon,
  fields: [
    createImageField('icon', 'Icon'),
    defineField({
      name: 'label',
      title: 'Skill',
      type: 'string',
    }),
  ],
});
