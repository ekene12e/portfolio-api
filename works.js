

const experiences = [
  {
    title: "Google Africa Developer Scholarship",
    company_name: "Google Africa",
    icon: '',
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Programming fundamentals",
      "Basic HTML, CSS, Javascript",
      "Soft skills development",
    ],
  },
  {
    title: "ALX Africa Software Engineering School",
    company_name: "ALX Africa/Holberton Inc",
    icon: '',
    iconBg: "#383E56",
    date: "Feb 2022 - Feb 2023",
    points: [
      "KEY LEARNINGS:",
      "C (Data Structures, Stacks/Queues, Linked Lists, Hash Tables, Binary Trees, Algorithms, Sorting, Big O), Command Line Manipulation,",
      "Basic SQL",
      "Systems Engineering (Open Systems, Interconnection Model, TCP/IP, Unit Testing)",
      "Code Debugging",
      "Advanced HTML",
      "Advanced CSS",
      "Responsive design", 
      "ES6, TypeScript",
      "ReactJS",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Freelance",
    icon: '',
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [

                "Developing and implementing user-friendly interfaces for clients",
                "Conducting thorough testing and debugging",
                "Collaborating with cross-functional teams and providing constructive feedback to other developers",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WeTube",
    description:
      "A clone of youtube designed using MaterialUI and with the Youtube API from RapidAPIHub. Includes functionalities such as search and filter",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://wetube-ekene.netlify.app",
  },
  
  {
    name: "ToolKit Shopping Cart",
    description:
      "A typical e-commerce app shopping cart. Project typifies practical utilization of redux toolkit to efficiently manage state and enhance app performance. Hosted on Netlify ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://ekene-shopping-cart-with-redux.netlify.app",
  },
  {
    name: "Real Estate Landing Page",
    description:
      "A resonsive and user friendly Landing page for a real estate website ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://ekene-real-estate-frontend.netlify.app",
  },
  {
    name: "Movie Search App",
    description:
      "A search app to check trending movies. Search results can be filtered based on some params. Hosted on netlify",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://whichmovie-alx.netlify.app",
  },
  {
    name: "Clone of Booking.com UI",
    description:
      "A clone of the Booking.com UI with react and TailwingCSS ",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "https://ekene-booking-ui.netlify.app",
  },
  
];

module.exports = {  experiences, projects };
