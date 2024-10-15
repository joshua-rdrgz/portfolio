import { defineQuery } from 'next-sanity';

export const SidebarQuery = defineQuery(`
  *[_type == "sidebar" && _id == "c94fb9ee-d1af-42fc-9d9c-0f4e791dff0a"]{
    "profilePic": {
      "url": profilePic.asset->url,
      "alt": profilePic.alt
    },
    navListProperties->{
      navListName,
      list[]->{
        label,
        "slug": slug.current
      }
    },
    linkListProperties->{
      linkListName,
      list[]->{
        label,
        url,
        linkIcon{
          alt,
          "src": asset->url
        }
      }
    }
  }
`);
