import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs",
    icon: mobile,
  },
  {
    title: "Tailwind CSS",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "DispatchaHq",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Building and managing web applications with React.js and related technologies.",
      "Working alongside designers, product managers, and other developers to develop high-quality products.",
      "Ensuring responsive design and cross-browser compatibility.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "IP-Lady Healthcare",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Creating and customizing themes and plugins for iPlady's WordPress websites to enhance functionality and appearance.",
      "Regularly updating WordPress core, themes, and plugins, troubleshooting issues, and optimizing website performance to ensure iPlady's sites are secure, efficient, and user-friendly.",
      "Managing iPlady's website content, implementing SEO best practices, and collaborating with the marketing team to improve search engine rankings and drive organic traffic to the company's sites.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Alivee.co",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Designing and producing visual content such as logos, banners, infographics, and marketing materials that align with Alivee's brand identity and objectives.",
      "Enhancing and maintaining Alivee's brand identity through consistent design elements, ensuring a cohesive and professional look across all platforms.",
      "Working with the marketing team to develop graphics for advertising campaigns, social media posts, and promotional materials, enhancing the overall effectiveness of Alivee's marketing efforts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We've had the pleasure of collaborating with Haruna on several graphic design projects. his creativity and ability to produce visually stunning content have greatly enhanced our brand.",
    name: "Michelle Omeke",
    designation: "CFO",
    company: "Alivee",
    image: "images/michelle.png",
  },
  {
    testimonial:
      "Haruna is a web developer who truly cares about our clients' success. Dedicated and always work to improve",
    name: "Samuel Usoroh",
    designation: "COO",
    company: "DispatchaHq",
    image: "images/usoro.png",
  },
  {
    testimonial:
      "Haruna has been an invaluable asset to our company.His proficiency in WordPress development has helped us create custom themes and plugins that perfectly meet our needs!",
    name: " Dr Testimony Onaduja",
    designation: "CTO",
    company: "IP-Lady",
    image: "images/testi.png",
  },
];

const projects = [
  {
    name: "Crypto Price Tracker",
    description:
      "Crypto Price Tracker built using ReactJS and the CoinGecko API. This app allows users to track the real-time prices of various cryptocurrencies. It provides up-to-date information on market trends, price changes, and detailed statistics for different cryptocurrencies, enabling users to make informed investment decisions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify-Clone",
    description:
      "Spotify clone built using ReactJS and Tailwind CSS. This app allows users to play music, and seamlessly navigate between songs with next and previous track controls.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "IP-Lady Healthcare",
    description:
      "IP-Lady Healthcare website built using WordPress. This platform is dedicated to women's reproductive healthcare, providing valuable information and resources on various health topics. The site features a user-friendly interface, a detailed service descriptions to support and educate women about their reproductive health.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
