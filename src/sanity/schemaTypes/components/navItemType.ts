import { JoystickIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const navItemType = defineType({
  name: 'navItem',
  title: 'Nav Item',
  type: 'document',
  icon: JoystickIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (HTML Id)',
      type: 'slug',
      options: {
        source: 'label',
      },
    }),
  ],
});
