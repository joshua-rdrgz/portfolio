import { type SchemaTypeDefinition } from 'sanity';

import { authorType, categoryType, postType } from './blog';
import {
  blockContentType,
  jobPropertiesType,
  linkType,
  navItemType,
  projectType,
  skillType,
} from './components';
import { pageBuilderType, sidebarType } from './layout';
import {
  aboutSectionType,
  contactSectionType,
  heroboxSectionType,
  projectSectionType,
  skillSectionType,
  timelineSectionType,
} from './layout/sections';
import {
  linkListType,
  navListType,
  projectListType,
  skillListType,
} from './lists';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // BLOG
    authorType,
    categoryType,
    postType,

    // COMPONENTS
    blockContentType,
    jobPropertiesType,
    linkType,
    navItemType,
    projectType,
    skillType,

    // LAYOUT
    pageBuilderType,
    sidebarType,

    // LAYOUT SECTIONS,
    aboutSectionType,
    contactSectionType,
    heroboxSectionType,
    projectSectionType,
    skillSectionType,
    timelineSectionType,

    // LISTS
    linkListType,
    navListType,
    projectListType,
    skillListType,
  ],
};
