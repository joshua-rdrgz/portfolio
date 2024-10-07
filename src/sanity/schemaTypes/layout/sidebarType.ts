import { defineField, defineType } from 'sanity';
import { createImageField } from '../utils/createImageField';
import { MenuIcon } from '@sanity/icons';

export const sidebarType = defineType({
  name: 'sidebar',
  title: 'Sidebar',
  type: 'document',
  icon: MenuIcon,
  fields: [
    createImageField('profilePic', 'Profile Picture'),
    defineField({
      name: 'navList',
      title: 'NavigationList',
      type: 'reference',
      to: { type: 'navList' },
    }),
    defineField({
      name: 'linkList',
      title: 'List of Links',
      type: 'reference',
      to: { type: 'linkList' },
    }),
  ],
});
