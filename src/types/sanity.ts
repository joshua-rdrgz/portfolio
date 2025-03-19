import { PortfolioContentQueryResult } from '@/sanity/types';

type NonNullablePortfolioContent = NonNullable<PortfolioContentQueryResult>;

export type PageContentSection = NonNullable<
  NonNullablePortfolioContent['pageContent']
>[number];

export type HeroboxSectionType = Extract<
  PageContentSection,
  { _type: 'heroboxSection' }
>;
export type SkillSectionType = Extract<
  PageContentSection,
  { _type: 'skillSection' }
>;
export type TimelineSectionType = Extract<
  PageContentSection,
  { _type: 'timelineSection' }
>;
export type ProjectSectionType = Extract<
  PageContentSection,
  { _type: 'projectSection' }
>;
export type AboutSectionType = Extract<
  PageContentSection,
  { _type: 'aboutSection' }
>;
export type ContactSectionType = Extract<
  PageContentSection,
  { _type: 'contactSection' }
>;

export type ProjectType = NonNullable<
  NonNullable<
    NonNullable<ProjectSectionType['projectListProperties']>['list']
  >[number]
>;
export type TimelineItemType = NonNullable<
  TimelineSectionType['timeline']
>[number];
