import ProjectType from '../../utilities/Project/ProjectType';

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
    modal: {
      overview: {
        img: './assets/pcb/herobox-component.webp',
        text: `This project included the creation of a marketing website for Performance Clear Bra, Inc. in Fort Worth, Texas.  It was built using Frontity, a React framework that combines React as a frontend with WordPress as a headless CMS.  The project in its entirety helped reduce page load speeds by 56%, creating a fantastic user experience for all of the company's customers.`,
        skills: [
          'HTML (JSX)',
          'CSS in JS (Styled Components)',
          'CSS Sprites',
          'JavaScript',
          'React (Isomorphic)',
          'Frontity',
          'JWT Tokens',
          'WordPress (Rest API)',
          'Vercel',
        ],
      },
      approach: {
        img: './assets/pcb/contact-component-landing-page.webp',
        text: [
          `The owner of Performance Clear Bra wanted a website that was easily maintainable, easy to use, fast, and strategically designed to answer all of his customer's questions.`,

          `With this in mind, I built the design with a very simple UI and a UX that answers user's questions right as they ask them.  To answer vehicle-specific questions, I created a 2-dimensional tabbed component that displayed all of the varieties of services Performance Clear Bra offers for all variations of vehicles, so the user can simply click on the service they want and the vehicle they want it done on, and the component will show them a bunch of information about that specific combination, including value propositions, descriptions, and price tags (for Window Tinting services).`,
        ],
      },
      challenges: [
        {
          img: './assets/pcb/header.webp',
          summary: `One challenge was building the Header component that dynamically takes in a menu from the WordPress Rest API, and displaying it in the appropriate manner.  There were several aspects that made this difficult, but I was able to overcome those challenges with some research and creativity.`,
          details: [
            `By default, the WP Rest API blocks attempts to fetch menus due to the risk of attacks, as menu links are vulnerable information.  That being said, I used Enrique Chavez's JWT Authentication plugin to fetch a JWT token, and using that token I was able to successfully fetch the menu from the WP Rest API.`,

            `Security issues became a concern when fetching the JWT token, as the client's username and password to the WP admin pages had to be used to obtain the token.  To keep the sensitive information safe, I used dotenv to create environment variables that would be kept separate from the project in order to protect the username and password.  To keep the JWT token secure, I leveraged Frontity's use of Isomorphic React so that I could fetch the token, use it, and then delete it all during server side rendering — this way, the token never reaches the client (browser).`,

            `Finally, whenever getting the menu, I had to take the possibility of nested menus in mind.  Using Advanced Custom Fields, the React code is able to identify which items of the menu are parents, and which are not.  Then, different JSX is used accordingly.  The result is the project's ability to dynamically render whatever menu is fed to it from WordPress, up to 1 level of nesting deep.`,
          ],
        },
        {
          img: './assets/pcb/tabbed-component-ppf.webp',
          summary: `Another challenge was creating the two-dimensional tabbed components for customers to select their specific type of vehicle.  A lot of factors went into this component, and overall everything came together to make a seamless experience for the user.`,
          details: [
            `The first big hurdle with this component was how to store all of this information in a scalable way.  The solution I came up with was to store all the data points in a table, where the rows were the type of information, and the columns were one dimension of the component.  The other dimension of buttons I allocated as an additional set of buttons.`,

            `The next challenge proved to be influential in the creation of the component — adding the tabbed functionality that displayed the correct input.  Throughout this process, I learned that some parts of the component only relied on one set of buttons, and some relied solely on the other.  Very few components actually relied on both.  With this knowledge, I set up some state that mirrored the structure that the table came in — instead of the actual data, it just held a boolean value for whether or not the data was supposed to be shown on the screen.  I then had my React component loop through this boolean data structure, and if the boolean was true, I reached into the actual data structure using the index of the boolean value, and displayed the relevant information to the user.`,
          ],
        },
      ],
      updates: {
        imgs: [
          './assets/pcb/gallery-component.webp',
          './assets/pcb/testimonial-component.webp',
        ],
        items: [
          'Conversion to TypeScript',
          'Addition of Blog',
          'Tabbed Services Update',
        ],
      },
    },
  },
  {
    heading: {
      title: 'GoldFox',
      subtitle: 'Net Worth Calculator',
    },
    summary: `This project is a simple net worth calculator that takes in any number of monthly incomes or expenses you have, as well as your starting net worth, and uses that information to give you your projected net worth over the next six months.  This first version of GoldFox is the start of something big — over the years, I plan to expand and develop this software to be the perfect tool for anyone to handle the entirety of their finances.`,
    techStack: ['React', 'Redux', 'TypeScript', 'Jest'],
    bgImg: {
      src: `./assets/goldfox/blank-slate.webp`,
      alt: `A picture of the GoldFox, a simple net worth calculator.`,
    },
    links: {
      liveSite: 'https://goldfox.netlify.app/',
      gitHub: 'https://github.com/joshua-rdrgz/goldfox',
    },
    modal: {
      overview: {
        img: './assets/goldfox/blank-slate.webp',
        text: `This project is a simple net worth calculator that takes in any number of monthly incomes or expenses you have, as well as your starting net worth, and uses that information to give you your projected net worth over the next six months.  This first version of GoldFox is the start of something big — over the years, I plan to expand and develop this software to be the perfect tool for anyone to handle the entirety of their finances.`,
        skills: [
          'HTML (JSX)',
          'Sass (CSS Preprocessor)',
          'JavaScript',
          'TypeScript',
          'React',
          'Redux',
          'Jest / React Testing Library',
          'Netlify',
        ],
      },
      approach: {
        img: './assets/goldfox/editing.webp',
        text: [
          `I wanted this project to have the core functionality of taking in any number of items, whether income or expenses, and spit out a projection of your net worth.  Income and Expense items can be added with the “item”, “category”, and “amount” properties, and any one of them can be edited or deleted after creation.`,

          `As I hope to drastically expand this project in the future, I decided to use Redux as a state management library for React — this stores all of the incomes and expenses, as well as the net worth projections.  Anything other state that’s only needed in a particular component is handled locally.  I also used this opportunity to start my own mini testing framework using Jest and React Testing Library.  I have a small set of functions that I use to handle duplicate tasks, and this drastically decreases the amount of code I have to write in order to handle all unit and integration tests.`,
        ],
      },
      challenges: [
        {
          img: './assets/goldfox/example-top.webp',
          summary: `Surprisingly, the real challenge of the site wasn't with the net worth calculations (it proved to be quite a simple coding challenge) — it was creating the ability for items to be edited after creation, and making sure all of the forms present on the page had validation checks, so for example you couldn't enter an empty attribute for any item, or something that would break the calculations.`,
          details: [
            `I created a custom React validity hook that took care of handling the validation code.`,

            `Each item I built has having 2 separate states — editing, and non-editing.  For the editing version, I built a form very similar to the “add” forms.  The only difference laid in the fact that validation and state changes happened after every keystroke, instead of just upon form submission.`,
          ],
        },
      ],
      updates: {
        imgs: [
          './assets/goldfox/negatives.webp',
          './assets/goldfox/adding-error.webp',
        ],
        items: [
          `Income/Expense Items 'n' times per week/month/year`,
          `Net Worth Projection 'n' weeks/months/years`,
          'Budget Tracking Functionality',
        ],
      },
    },
  },
];

export default PROJECTS_INFO;
