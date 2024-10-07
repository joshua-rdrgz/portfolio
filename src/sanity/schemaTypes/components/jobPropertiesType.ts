import { defineField, defineType } from 'sanity';
import { PresentationIcon } from '@sanity/icons';

export const jobPropertiesType = defineType({
  name: 'jobProperties',
  title: 'Job Properties',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'dates',
      title: 'Dates of Job',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Job Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
    }),
  ],
});
