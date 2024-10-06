import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { authorType, categoryType, postType } from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // UI
    blockContentType,

    // BLOG
    categoryType,
    postType,
    authorType,
  ],
};
