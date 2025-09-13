import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Dylan",
  lastName: "Myoung",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Curious Freshman",
  avatar: "/images/projects/project-01/python-logo.png",
  email: "79841@naver.com",
  location: "Asia/Seoul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Korean"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/79841",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>생명공학과 골프 마니아</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project:{" "}
        <strong className="ml-4">Portfolio Website Development</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a freshman at YISS with interests both inside and outside school.
        While I have some background in sports, such as being part of the
        school’s cross country team and playing golf for several years, I am
        especially drawn to academics. I enjoy exploring subjects like coding,
        where I can solve problems and create projects, and biology, where I
        learn more about how life and the human body work.
      </>
    ),
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Achievements",
    achievements: [
      {
        title:
          "2023 Asian Intercontinental Make X Tournament starter skill test winner",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/achievements/image-example-1.png",
            alt: "2023 Asian Intercontinental Make X Tournament starter skill test winner",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "YISS Vex Robotics 8th Grade course",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Activities & Experiences",
    experiences: [
      {
        company: "Portfolio Website Development", // 주제 title
        timeframe: "2025.08 - 2025.9",
        role: "Frontend Developer",
        achievements: [
          <>
            Built my first personal portfolio website using Next.js template,
            customizing the design to reflect my personal style and brand
            identity
          </>,
          <>
            Successfully deployed the website to Vercel with seamless CI/CD
            integration, experiencing the satisfaction of seeing my work go live
          </>,
          <>
            Gained valuable insights into modern web development workflow, from
            initial setup to production deployment
          </>,
          <>
            Developed an eye for UI/UX details while personalizing components
            and layout to create a cohesive visual experience
          </>,
          <>
            Understood the significance of SEO optimization and performance
            considerations in real-world web development projects
          </>,
        ],
        images: [],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "YISS",
        description: <>...</>,
      },
      {
        name: "Beyond Coding",
        description: <>Coding Academy</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Talents",
    skills: [
      {
        title: "Sports",
        description: (
          <>
            I have been active in sports for many years, starting with golf,
            which I have played for seven years and continue to enjoy as a
            member of the YISS golf club. Alongside golf, I also play badminton
            as a hobby. Since middle school, I have been a part of my school’s
            cross country team, and I am continuing with it as a freshman,
            building endurance and teamwork. Altogether, these sports have
            shaped my athletic experience by giving me both individual and team
            challenges.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: <>...</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/python-logo.png",
            alt: "Project image",
            width: 9,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Activities & Experiences",
  title: `Activities & Experiences – ${person.name}`,
  description: `Acitivities and Experiences of ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
