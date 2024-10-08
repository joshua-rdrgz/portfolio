import { defineField, defineType } from 'sanity';
import { createImageField } from '../utils/createImageField';
import { MenuIcon } from '@sanity/icons';

export const sidebarType = defineType({
  name: 'sidebar',
  title: 'Sidebar',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'sidebarName',
      title: 'Sidebar Name',
      type: 'string',
    }),
    createImageField('profilePic', 'Profile Picture'),
    defineField({
      name: 'navListProperties',
      title: 'NavigationList',
      type: 'reference',
      to: { type: 'navList' },
    }),
    defineField({
      name: 'linkListProperties',
      title: 'List of Links',
      type: 'reference',
      to: { type: 'linkList' },
    }),
  ],
});
