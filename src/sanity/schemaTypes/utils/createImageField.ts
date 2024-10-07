import { defineField } from 'sanity';

export const createImageField = (name: string, title?: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: 'alt',
        type: 'string',
        title: 'Alternative Text',
        validation: (rule) =>
          rule.custom((value, context) => {
            const parent = context?.parent as { asset?: { _ref?: string } };

            return !value && parent?.asset?._ref
              ? 'Alt text is required when an image is present'
              : true;
          }),
      }),
    ],
  });
