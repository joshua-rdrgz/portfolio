import ProjectType from "../../utilities/Project/ProjectType";

const PROJECTS_INFO: Omit<ProjectType, 'idx'>[] = [
  {
    heading: {
      title: 'Performance Clear Bra, Inc.',
      subtitle: 'Marketing Website',
    },
    summary: `This project included the creation of a marketing website for Performance Clear Bra, Inc. in Fort Worth, Texas.  It was built using Frontity, a React framework that combines React as a frontend with WordPress as a headless CMS.  The project in its entirety helped reduce page load speeds by 56%, creating a fantastic user experience for all of the company's customers.`,
    techStack: [
      'React (Isomorphic)',
      'Frontity',
      'WordPress Rest API',
      'JWT Authentication',
    ],
    bgImg: {
      src: `./assets/pcb/herobox-component.webp`,
      alt: `A picture of the homepage herobox of Performance Clear Bra's website.`,
    },
    links: {
      liveSite: 'https://www.performanceclearbra.com',
      gitHub: 'https://github.com/joshua-rdrgz/pcb-website',
    },
  },
  {
    heading: {
      title: 'GoldFox',
      subtitle: 'Net Worth Calculator',
    },
    summary: `This project is a simple net worth calculator that takes in any number of monthly incomes or expenses you have, as well as your starting net worth, and uses that information to give you your projected net worth over the next six months.  This first version of GoldFox is the start of something big — over the years, I plan to expand and develop this software to be the perfect tool for anyone to handle the entirety of their finances.`,
    techStack: [
      'React',
      'Redux',
      'TypeScript',
      'Jest',
    ],
    bgImg: {
      src: `./assets/goldfox/blank-slate.webp`,
      alt: `A picture of the GoldFox, a simple net worth calculator.`,
    },
    links: {
      liveSite: 'https://goldfox.netlify.app/',
      gitHub: 'https://github.com/joshua-rdrgz/goldfox',
    },
  },
];

export default PROJECTS_INFO;