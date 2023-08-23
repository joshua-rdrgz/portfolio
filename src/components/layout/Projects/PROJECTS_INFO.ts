import ProjectType from '../../utilities/Project/ProjectType';

const PROJECTS_INFO: Omit<ProjectType, 'idx'>[] = [
  /**
   * PERFORMANCE CLEAR BRA PROJECT
   */
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
        img: {
          src: './assets/pcb/herobox-component.webp',
          alt: `Performance Clear Bra's main website, showcasing the herobox section.`,
        },
        text: `This project included the creation of a marketing website for Performance Clear Bra, Inc. in Fort Worth, Texas.  It was built using Frontity, a React framework that combines React as a frontend with WordPress as a headless CMS.  The project in its entirety helped reduce page load speeds by 56%, creating a fantastic user experience for all of the company's customers.`,
        skills: [
          'HTML (JSX)',
          'CSS in JS (Styled Components)',
          'CSS Sprites',
          'JavaScript',
          'React (Full Stack)',
          'Frontity',
          'JWT Tokens',
          'WordPress (Rest API)',
          'Vercel',
        ],
      },
      approach: {
        img: {
          src: './assets/pcb/contact-component-landing-page.webp',
          alt: `Performance Clear Bra's landing page, where users can contact the company.`,
        },
        text: [
          `The owner of Performance Clear Bra wanted a website that was easily maintainable, easy to use, fast, and strategically designed to answer all of his customer's questions.`,

          `With this in mind, I built the design with a very simple UI and a UX that answers user's questions right as they ask them.  To answer vehicle-specific questions, I created a 2-dimensional tabbed component that displayed all of the varieties of services Performance Clear Bra offers for all variations of vehicles, so the user can simply click on the service they want and the vehicle they want it done on, and the component will show them a bunch of information about that specific combination, including value propositions, descriptions, and price tags (for Window Tinting services).`,
        ],
      },
      challenges: [
        {
          img: {
            src: './assets/pcb/header.webp',
            alt: `The header portion of the Performance Clear Bra website.`,
          },
          summary: `One challenge was building the Header component that dynamically takes in a menu from the WordPress Rest API, and displaying it in the appropriate manner.  There were several aspects that made this difficult, but I was able to overcome those challenges with some research and creativity.`,
          details: [
            `By default, the WP Rest API blocks attempts to fetch menus due to the risk of attacks, as menu links are vulnerable information.  That being said, I used Enrique Chavez's JWT Authentication plugin to fetch a JWT token, and using that token I was able to successfully fetch the menu from the WP Rest API.`,

            `Security issues became a concern when fetching the JWT token, as the client's username and password to the WP admin pages had to be used to obtain the token.  To keep the sensitive information safe, I used dotenv to create environment variables that would be kept separate from the project in order to protect the username and password.  To keep the JWT token secure, I leveraged Frontity's use of Isomorphic React so that I could fetch the token, use it, and then delete it all during server side rendering — this way, the token never reaches the client (browser).`,

            `Finally, whenever getting the menu, I had to take the possibility of nested menus in mind.  Using Advanced Custom Fields, the React code is able to identify which items of the menu are parents, and which are not.  Then, different JSX is used accordingly.  The result is the project's ability to dynamically render whatever menu is fed to it from WordPress, up to 1 level of nesting deep.`,
          ],
        },
        {
          img: {
            src: './assets/pcb/tabbed-component-ppf.webp',
            alt: `A two-dimensional tabbed component showcasing the services Performance Clear Bra has to offer.`,
          },
          summary: `Another challenge was creating the two-dimensional tabbed components for customers to select their specific type of vehicle.  A lot of factors went into this component, and overall everything came together to make a seamless experience for the user.`,
          details: [
            `The first big hurdle with this component was how to store all of this information in a scalable way.  The solution I came up with was to store all the data points in a table, where the rows were the type of information, and the columns were one dimension of the component.  The other dimension of buttons I allocated as an additional set of buttons.`,

            `The next challenge proved to be influential in the creation of the component — adding the tabbed functionality that displayed the correct input.  Throughout this process, I learned that some parts of the component only relied on one set of buttons, and some relied solely on the other.  Very few components actually relied on both.  With this knowledge, I set up some state that mirrored the structure that the table came in — instead of the actual data, it just held a boolean value for whether or not the data was supposed to be shown on the screen.  I then had my React component loop through this boolean data structure, and if the boolean was true, I reached into the actual data structure using the index of the boolean value, and displayed the relevant information to the user.`,
          ],
        },
      ],
      updates: {
        imgs: [
          {
            src: './assets/pcb/gallery-component.webp',
            alt: `Performance Clear Bra's gallery, where they showcase the work they've done on other customer's cars.`,
          },
          {
            src: './assets/pcb/testimonial-component.webp',
            alt: `Performance Clear Bra's testimonials, where they showcase all of the good reviews customers have gave them.`,
          },
        ],
        items: ['Conversion to TypeScript'],
      },
    },
  },
  /**
   * AIRBNB CLONE PROJECT
   */
  {
    heading: {
      title: 'Airbnb Web App Clone',
      subtitle: 'Full Stack Application Clone',
    },
    summary:
      'This project is a fully featured clone of the Airbnb web applicaton.  It is complete with functionality to create properties and listings, make reservations, manage your trips, favorites, properties, and reservations from other guests.',
    techStack: [
      'NextJS 13',
      'MongoDB',
      'Tailwind',
      'TypeScript',
      'React Hook Form',
    ],
    bgImg: {
      src: './assets/airbnb-clone/background.webp',
      alt: 'Background image of the Airbnb Clone app.',
    },
    links: {
      liveSite: 'https://rent-home-example.vercel.app/',
      gitHub: 'https://github.com/joshua-rdrgz/airbnb-clone',
    },
    modal: {
      overview: {
        img: {
          src: './assets/airbnb-clone/trips.webp',
          alt: 'Trips page of the Airbnb Clone app',
        },
        text: 'This Airbnb Clone is a highly personalized and modified version of an original tutorial.  It features all the functionality of the Airbnb web application, such as creating listings, letting other users make trips on listings, and managing reservations and favorites.  The project utilized advanced React patterns such as the render props pattern, compound components, and more.  It was built with the Next framework and a MongoDB database.',
        skills: [
          'NextJS',
          'Tailwind',
          'TypeScript',
          'React',
          'React Hook Form',
          'MongoDB',
          'Prisma',
          'NextAuth',
        ],
      },
      approach: {
        img: {
          src: './assets/airbnb-clone/date-picker.webp',
          alt: 'A Date Picker for a filter in the Airbnb Clone',
        },
        text: [
          'The initial steps were to create the layout of the app, mainly the navbar and the base modal infrastructure.  The modal was created using a compound component that keeps all of the modal state and functionality completely within itself.  Using the modal is as easy as using HTML.',
          'With that, we populated the different kinds of modals.  Namely, the register, login, search, and listing modals.  To complete the search and listing modals, a Form compound component was created to handle form structure and submit requests.',
          'From there, listing pages were created so that the user could see more information about a listing when they clicked on it.  It came with detailed information about a listing, as well as a date picker component that lets users reserve the listing for specific dates.',
          'Finally, the menus for managing trips, favorites, reservations, and properties were created.  These page utilize the render props pattern to render all of their contents in one single reusable component.',
        ],
      },
      challenges: [
        {
          img: {
            src: './assets/airbnb-clone/filter-modal.webp',
            alt: 'The filter modal of the Airbnb Clone app',
          },
          summary:
            "The original tutorial included components that had multiple responsibilites, and single responsibilites delegated to multiple components.  I did'nt like this structure, so I opted to use compound components to isolate responsibilities into single components.  This kept everything organized.",
          details: [
            'I used a compound component to create a Modal component with 2 children components -- Modal.Open and Modal.Window.  The two connect like how HTML inputs and labels connect, and the Modal.Open contains the button to show the Modal.Window.',
            'I also included a Form compound component that had numerous child components.  These were used to capture uncontrolled and controlled inputs, as well as provide features for a form, such as a map showing the location the user has chosen.',
          ],
        },
      ],
      updates: {
        imgs: [
          {
            src: './assets/airbnb-clone/login-modal.webp',
            alt: 'Login modal of the Airbnb clone app',
          },
        ],
        items: ['Edit functionality for listings, reservations, and trips.'],
      },
    },
  },
  /**
   * THE WILD OASIS PROJECT
   */
  {
    heading: {
      title: 'The Wild Oasis',
      subtitle: 'Web Application for Cabin-Renting Company',
    },
    summary:
      'This is a front end web application for a fictional cabin-renting company called The Wild Oasis.  It comples fully featured with a dashboard for valuable metrics, as well as tables to manage bookings and cabins.  It is complete with filters, sorting, pagination, authentication, and a dark mode.',
    techStack: ['React', 'React Query', 'JavaScript', 'Supabase'],
    bgImg: {
      src: './assets/the-wild-oasis/dashboard-light.webp',
      alt: 'Dashboard of The Wild Oasis app',
    },
    links: {
      liveSite: 'https://the-wild-oasis-lime.vercel.app/',
      gitHub: 'https://github.com/joshua-rdrgz/the-wild-oasis',
    },
    modal: {
      overview: {
        img: {
          src: './assets/the-wild-oasis/dashboard-dark.webp',
          alt: 'Dashboard in Dark Mode of The Wild Oasis app',
        },
        text: 'This web app was built following a tutorial, and it was used to master advanced React patterns and learn real world project architecture and feature implementations.  The app manages bookings and cabins that the fictional company has, and allows the user to see meaningful metrics about the bookings and cabins.  Users can check guests in and out, add cabins, and establish other users as well.',
        skills: [
          'React',
          'React Query',
          'Recharts',
          'Web application development',
          'JavaScript',
          'Supabase',
        ],
      },
      approach: {
        img: {
          src: './assets/the-wild-oasis/bookings.webp',
          alt: 'Bookings page of The Wild Oasis app',
        },
        text: [
          'We first built out the cabins table, learning about compound components to build out modals that display forms to add cabins, as well as menu dropdowns to edit, duplicate, and delete cabins.',
          'Then, the bookings table was built utilizing the components built for the cabins.',
          'The users and settings pages were added to allow for authentication features and general settings.',
          "User authentication was added using Supabase's integrated auth features",
          'Finally, the dashboard was created to gather and display data in a meaningful way to the user.',
        ],
      },
      challenges: [
        {
          img: {
            src: './assets/the-wild-oasis/cabins.webp',
            alt: 'Cabins table of The Wild Oasis app',
          },
          summary:
            "Overall, the project's dashboard was easily the biggest challenge, as the data from the Supabase backend had to be manipulated to fit what our charting library expected.",
          details: [
            'The cabin table was utilized to learn all sorts of advanced React patterns, like render props, higher order components, and compound components.',
            'The menu dropdowns for each row of the table was implemented using a compound component, and had to be used in conjunction with other compound components that all work together.',
          ],
        },
      ],
      updates: {
        imgs: [
          {
            src: './assets/the-wild-oasis/users.webp',
            alt: 'Users page of The Wild Oasis app',
          },
          {
            src: './assets/the-wild-oasis/add-cabin.webp',
            alt: 'Add cabin modal form of The Wild Oasis app',
          },
        ],
        items: ['Edit bookings'],
      },
    },
  },
  /**
   * GOLDFOX PROJECT
   */
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
        img: {
          src: './assets/goldfox/blank-slate.webp',
          alt: `The blank starting page for the Goldfox net worth projector application.`,
        },
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
        img: {
          src: './assets/goldfox/editing.webp',
          alt: `Showcasing what it is like when the user is editing an existing income or expense item.`,
        },
        text: [
          `I wanted this project to have the core functionality of taking in any number of items, whether income or expenses, and spit out a projection of your net worth.  Income and Expense items can be added with the “item”, “category”, and “amount” properties, and any one of them can be edited or deleted after creation.`,

          `As I hope to drastically expand this project in the future, I decided to use Redux as a state management library for React — this stores all of the incomes and expenses, as well as the net worth projections.  Anything other state that’s only needed in a particular component is handled locally.  I also used this opportunity to start my own mini testing framework using Jest and React Testing Library.  I have a small set of functions that I use to handle duplicate tasks, and this drastically decreases the amount of code I have to write in order to handle all unit and integration tests.`,
        ],
      },
      challenges: [
        {
          img: {
            src: './assets/goldfox/example-top.webp',
            alt: `Showcasing how the Goldfox Application looks with various income and expenses in the application.`,
          },
          summary: `Surprisingly, the real challenge of the site wasn't with the net worth calculations (it proved to be quite a simple coding challenge) — it was creating the ability for items to be edited after creation, and making sure all of the forms present on the page had validation checks, so for example you couldn't enter an empty attribute for any item, or something that would break the calculations.`,
          details: [
            `I created a custom React validity hook that took care of handling the validation code.`,

            `Each item I built has having 2 separate states — editing, and non-editing.  For the editing version, I built a form very similar to the “add” forms.  The only difference laid in the fact that validation and state changes happened after every keystroke, instead of just upon form submission.`,
          ],
        },
      ],
      updates: {
        imgs: [
          {
            src: './assets/goldfox/negatives.webp',
            alt: `Showcasing what the application will tell you if your net worth goes into the negatives.`,
          },
          {
            src: './assets/goldfox/adding-error.webp',
            alt: `Showcasing the form validity functionality of submitting an income or expense item: error messages show you what you have not completed.`,
          },
        ],
        items: [
          `Income/Expense Items 'n' times per week/month/year`,
          `Net Worth Projection 'n' weeks/months/years`,
          'Budget Tracking Functionality',
        ],
      },
    },
  },
  /**
   * ARUBA LANDING PAGE PROJECT
   */
  {
    heading: {
      title: 'Aruba Landing Page',
      subtitle: 'HTML/CSS Clone',
    },
    summary: `This project is a raw HTML/CSS recreation of a landing page by the company Aruba.  It includes the use of cleverly positioned background images to create a unique and custom design.  Although the clone doesn't contain the functionality of the original site, it is an exact 1-to-1 recreation of the site using pure HTML and CSS, and nothing else.`,
    techStack: ['HTML', 'CSS'],
    bgImg: {
      src: `./assets/aruba-clone/aruba-clone-herobox.webp`,
      alt: `A picture of the herobox of my Aruba landing page clone.`,
    },
    links: {
      liveSite: 'https://joshuardrgz-aruba-clone.netlify.app',
      gitHub: 'https://github.com/joshua-rdrgz/aruba-landing-page-clone',
    },
    modal: {
      overview: {
        img: {
          src: './assets/aruba-clone/aruba-clone-calculator.webp',
          alt: `The calculator portion of the Aruba landing page clone.`,
        },
        text: `This project is a recreation of a landing page by the company Aruba.  It includes the use of cleverly positioned background images to create a unique and custom design.  Although the clone doesn't contain the functionality of the original site, it is an exact 1-to-1 recreation of the site using pure HTML and CSS.  I took this project on in order to test my ability to turn designs into functional front-end code using nothing but HTML and CSS.`,
        skills: ['HTML', 'CSS', 'Vite'],
      },
      approach: {
        img: {
          src: './assets/aruba-clone/aruba-clone-footer.webp',
          alt: `The footer portion of the Aruba landing page clone.`,
        },
        text: [
          `All that was required for this project was that no other technologies would be used besides HTML and CSS.  This meant that no CSS pre-processors were used, nor were any UI frameworks.  The project was meant to test my ability to recreate a design with nothing but HTML and CSS.`,

          `Using this approach, I decided to simply build the HTML into one big 'index.html' file, and separate all the CSS files into components, combining them all together into 'style.css' using imports.  The project was then bundled together using Vite.`,
        ],
      },
      challenges: [
        {
          img: {
            src: './assets/aruba-clone/aruba-clone-results.webp',
            alt: `The benefits portion of the Aruba landing page clone.`,
          },
          summary: `The most difficult part of this project was implementing the background designs, which included images that needed to be cleverly manipulated in a responsive way in order to more accurately accentuate the text above it.  This involved applying z-index properties to position the image elements behind the text, and the correct CSS properties in order to responsively react to the user's viewport width and height.`,
          details: [
            `I was able to position the image elements according to their HTML containers, specifying in CSS their width in terms of percentages so that they adjust appropriately to the user's viewport height and width.`,

            `I was able to manipulate the images using CSS's z-index property in order to position the images underneath the primary content being displayed.`,
          ],
        },
        {
          img: {
            src: './assets/aruba-clone/aruba-clone-benefits.webp',
            alt: `The benefits portion of the Aruba landing page clone.`,
          },
          summary: `The other challenge of this project was creating a 1-1 creation taking into consideration all possible viewport widths and heights: in other words, the responsiveness of the site.`,
          details: [
            `I used a variety of approaches to create the site's responsiveness, alternating between CSS Flexbox and CSS Grid for different components at different viewport widths and heights.`,

            `When possible, I took advantage of CSS's capabilities in order to apply styles that were naturally responsive; for example, using CSS Grid's fractional units to have elements position themselves relative to the user's viewport.`,
          ],
        },
      ],
      updates: {
        imgs: [
          {
            src: './assets/aruba-clone/aruba-clone-phone-herobox.webp',
            alt: `Showcasing what the application will tell you if your net worth goes into the negatives.`,
          },
          {
            src: './assets/aruba-clone/aruba-clone-phone-results.webp',
            alt: `Showcasing the form validity functionality of submitting an income or expense item: error messages show you what you have not completed.`,
          },
        ],
        items: [`Separate 'results.css' into smaller components`],
      },
    },
  },
];

export default PROJECTS_INFO;
