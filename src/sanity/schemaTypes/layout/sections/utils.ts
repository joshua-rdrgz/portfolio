import { defineField } from 'sanity';

export const navItemRef = defineField({
  name: 'navItemRef',
  title: 'Navigation Item Reference',
  type: 'reference',
  to: { type: 'navItem' },
});
