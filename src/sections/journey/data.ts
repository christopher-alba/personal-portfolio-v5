export type Company = {
  name: string;
  dateString: string;
  position: string;
  type: string;
  nameShort: string;
  technologies: string[];
  bulletpoints: string[];
  website: string;
  summary: string;
};
export type Companies = Company[];

export const data: Companies = [
  {
    summary:
      "At Turners, I started as part time as a Software Engineer during my final year of university. My contract then moved to full time when I completed my studies. I began working in the QA space, and eventually transitioned into a developer role. There are multiple technologies being used at Turners, making my trait of being platform agnostic to be highly valuable.",
    type: "Work",
    name: "Turners Automotive Group",
    nameShort: "TAG",
    position: "Graduate Software Engineer",
    dateString: "June 2022 - Present",
    technologies: [
      "Typescript",
      "Cypress",
      "Vue",
      "Angular",
      "Javascript",
      "C#",
      "Java",
      "Playwright",
      "Cucumber",
      "Microsoft Teams",
      "AWS",
      "Bitbucket",
    ],
    bulletpoints: [
      "I initially joined TAG as a part time software engineer. Initially, I was placed in quality assurance (QA), which involved being part of large testing efforts within multiple of their web applications. My contract was then upgraded to full time once I finished university.",
      "My role at TAG varies as I am being rotated slowly throughout the business. Since I have a passion for frontend development, this is where I hope to end up after my rotation.",
      "At TAG I work with multiple modern technologies in testing. Testing involves writing integration tests for the AWS pipeline , or stand alone automated tests that can be executed any time. For both these types of tests, I also write end to end and component tests.",
    ],
    website: "https://www.turnersautogroup.co.nz/",
  },
  {
    summary:
      "I joined Henry Schein in my penultimate year of university as an intern. Working mainly in C#, I designed and developed web applications, doing both the frontend and backend. After each piece of work, I would present what I've accomplished to a large audience online, where I would receive constructive feedback on my work.",
    type: "Internship",
    name: "Henry Schein One",
    nameShort: "HSO",
    position: "Fullstack Software Developer Intern",
    dateString: "November 2021 - February 2022 (400 hours)",
    technologies: [
      "C#",
      "Blazor",
      ".NET",
      "Figma",
      "Microsoft Teams",
      "Microsoft Azure",
    ],
    bulletpoints: [
      "Designed UX and UI for web applications",
      "Implemented UX and UI in Blazor C# web applications",
      "Implemented the backend in C# web applications",
      "Wrote unit tests for the backend in C# web applications",
      "Shared knowledge amongst team members",
      "Pair programmed with senior developers",
      "Worked in an agile environment",
      "Presented my work to a mixed audience (technical & non-technical)",
      "Used Microsoft Azure instead of Github for source control",
    ],
    website: "https://henryscheinone.co.nz/",
  },
  {
    summary:
      "I joined Jasper as an intern in my second year of university. Here I worked primarily in Javascript, specifically in the frontend of a React application. Here they adopted GraphQL to make API calls to their server instead of REST, which was an interesting technology for me to learn. This was my first job in the IT industry.",
    type: "Internship",
    name: "Jasper",
    nameShort: "Jasper",
    position: "Frontend Software Engineer Intern",
    dateString: "November 2020 - February 2021 (416 hours)",
    technologies: [
      "Javascript",
      "React",
      "Styled Components",
      "Inhouse Design System",
      "Figma",
      "Cypress",
      "Jest",
      "React Testing Library",
      "GraphQL",
      "Apollo",
      "Notion",
      "Linear",
      "Gihub",
    ],
    bulletpoints: [
      "Implemented UX and UI in React applications",
      "Wrote automated tests using Jest and Cypress, with React Testing Library",
      "Communicated with GraphQL APIs through Apollo",
      "Implemented a polished user interface",
      "Considered best practice methodology, performance, and accessibility",
      "Shared knowledge amongst team members",
      "Wrote documentation on Notion, Linear and GitHub",
      "Planned out tasks and stories on Linear",
      "Performed maintenance on existing code base",
      "Worked in an Agile environment",
      "Reviewed pull request from other frontend developers",
      "Pair programmed with my mentor",
    ],
    website: "https://www.jasper.io/",
  },
  {
    summary:
      "This bootcamp was an intense software development course that involved 800 hours of development work. This was where I gained a large portion of my foundational skills as a software developer.",
    type: "Bootcamp",
    name: "Enspiral Dev Academy",
    nameShort: "EDA",
    position: "Fullstack Web Development Student",
    dateString: "March 2020 - June 2020 (800 hours)",
    technologies: [
      "Javascript",
      "jQuery",
      "React.js",
      "Redux",
      "REST APIs",
      "Jest",
      "Postman",
      "Supertest",
      "Superagent",
      "Passport.js",
      "HTML",
      "CSS",
      "Handlebars",
      "Node.js",
      "Express.js",
      "Knex.js",
      "Github",
      "AdobeXD",
      "Photoshop",
    ],
    bulletpoints: [
      "The work at EDA is designed to turn someone from no experience in software to a full stack web developer in 15 weeks.",
      "My time in EDA has given me plenty of experience working with others in a professional software development environment.",
      "I gained substantial experience working in different roles in different projects from 4 to 20 people in a group. I have been a frontend role dev/team lead , design lead, backend role, and product owner.",
      "I worked with Javascript mainly in the frontend, learning libraries like jQuery and React.js.",
      "I worked with external APIs like Auth0’s authentication and management API’s to implement secure authentication, and also Stripe’s API for secure transfer of payment.",
      "In the backend, I am very comfortable working with Node.js and Express.js.I use postman to test my routes and am comfortable working with it. I use Knex.js for creating SQL databases.",
      "Pair programming happens at least once a week on small scale projects.",
      "All our activities were version controlled in git and managed in github so I am very comfortable working with git and github.",
      "This course has a heavy emphasis on code quality, so I am familiar in creating unit tests which are isolated to ensure things are being tested precisely.",
    ],
    website: "https://devacademy.co.nz/",
  },
];