import { BlockElementIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Name',
      type: 'string',
    }),
    defineField({
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'heroboxSection',
          type: 'heroboxSection',
        }),
        defineArrayMember({
          name: 'skillSection',
          type: 'skillSection',
        }),
        defineArrayMember({
          name: 'timelineSection',
          type: 'timelineSection',
        }),
        defineArrayMember({
          name: 'projectSection',
          type: 'projectSection',
        }),
        defineArrayMember({
          name: 'aboutSection',
          type: 'aboutSection',
        }),
        defineArrayMember({
          name: 'contactSection',
          type: 'contactSection',
        }),
      ],
    }),
  ],
});
