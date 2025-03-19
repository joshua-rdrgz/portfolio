import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Builders')
        .child(
          S.list()
            .title('Structured Content')
            .items([
              S.documentTypeListItem('pageBuilder').title('Page Builders'),
              S.documentTypeListItem('sidebar').title('Sidebars'),
            ])
        ),
      S.listItem()
        .title('Lists')
        .child(
          S.list()
            .title('Lists of Various Items')
            .items([
              S.documentTypeListItem('linkList').title('Links Lists'),
              S.documentTypeListItem('navList').title('Nav Lists'),
              S.documentTypeListItem('projectList').title('Projects Lists'),
              S.documentTypeListItem('skillList').title('Skills Lists'),
            ])
        ),
      S.listItem()
        .title('Components')
        .child(
          S.list()
            .title('Components')
            .items([
              S.documentTypeListItem('link').title('Links'),
              S.documentTypeListItem('navItem').title('Nav Items'),
              S.documentTypeListItem('project').title('Projects'),
              S.documentTypeListItem('skill').title('Skills'),
              S.documentTypeListItem('jobProperties').title('Job Properties'),
            ])
        ),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog Items')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
      S.listItem()
        .title('Miscellaneous')
        .child(
          S.list()
            .title('Miscellaneous Documents')
            .items([
              ...S.documentTypeListItems().filter(
                (item) =>
                  item.getId() &&
                  ![
                    'post',
                    'category',
                    'author',
                    'pageBuilder',
                    'sidebar',
                    'linkList',
                    'navList',
                    'projectList',
                    'skillList',
                    'link',
                    'navItem',
                    'project',
                    'skill',
                    'jobProperties',
                  ].includes(item.getId()!)
              ),
            ])
        ),
    ]);
