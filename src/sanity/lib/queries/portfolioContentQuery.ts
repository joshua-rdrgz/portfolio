import { defineQuery } from 'next-sanity';

export const PortfolioContentQuery = defineQuery(`
  *[_type == "pageBuilder"][0]{
    title,
    pageContent[]{
      _type,
      header,
      navItemRef->{
        label,
        "slug": slug.current
      },
      (_type == "heroboxSection")=>{
        prefix,
        tagline,
        heroboxImage{
          alt,
          "src": asset->url
        }
      },
      (_type == "skillSection")=>{
        description,
        skillListProperties->{
          skillListName,
          list[]->{
            label,
            skillIcon{
              alt,
              "src": asset->url
            }
          }
        }
      },
      (_type == "timelineSection")=>{
        timeline[]->{
          title,
          dates,
          companyName,
          location,
          description
        }
      },
      (_type == "projectSection")=>{
        projectListProperties->{
          projectListName,
          list[]->{
            title,
            subtitle,
            description,
            skillListProperties->{
              skillListName,
              list[]->{
                label,
                skillIcon{
                  alt,
                  "src": asset->url
                }
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
            },
            modalContent,
            mainProjectImage{
              alt,
              "src": asset->url
            }
          }
        }
      },
      (_type == "aboutSection")=>{
        content,
        aboutImage{
          alt,
          "src": asset->url
        }
      },
      (_type == "contactSection")=>{
        contactImage{
          alt, 
          "src": asset->url
        }
      }
    }
  }  
`);
