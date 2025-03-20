import {
  ContributionIcon,
  EbooksIcon,
  FuturesIcon,
  NewsIcon,
  ReadershipIcon,
  ResearchIcon,
  WhitepaperIcon,
} from "../svg";

export const counterList = [
  { number: "300", title: "Resources available" },
  { number: "12K", title: "Total Downloads" },
  { number: "10K", title: "Active Users" },
];
export const profilePictures = [
  "/male_one.webp",
  "/female_two.webp",
  "/female_one.webp",
  "/male_two.webp",
];

export const columnThreeList = [
  {
    icon: <NewsIcon />,
    title: "Latest News Updates",
    text1: "Stay Current",
    text2: "Over 1,000 articles published monthly",
  },
  {
    icon: <ContributionIcon />,
    title: "Expert Contributors",
    text1: "Trusted Insights",
    text2: "50+ renowned AI experts on our team",
  },
  {
    icon: <ReadershipIcon />,
    title: "Global Readership",
    text1: "Worldwide Impact",
    text2: "2 million monthly readers",
  },
];

export const futuresList = [
  {
    heading: "Future Technology Blog",
    text: "Stay informed with our blog section dedicated to future technology",
    icon: <FuturesIcon />,
    cards: [
      {
        heading: "Quantity",
        text: "Over 1,000 articles on emerging tech trends and breakthroughs.",
      },
      {
        heading: "Variety ",
        text: "Articles cover fields like AI, robotics, biotechnology, and more.",
      },
      {
        heading: "Frequency ",
        text: " Fresh content added daily to keep you up to date.",
      },
      {
        heading: " Authoritative",
        text: "Written by our team of tech experts and industry professionals. ",
      },
    ],
  },
  {
    heading: "Research Insights Blogs",
    text: "Dive deep into future technology concepts with our research section.",
    icon: <ResearchIcon />,
    cards: [
      {
        heading: "Depth",
        text: "500+ research articles for in-depth understanding.",
      },
      {
        heading: "Graphics ",
        text: "Visual aids and infographics to enhance comprehension.",
      },
      {
        heading: "Trends ",
        text: "Explore emerging trends in future technology research.",
      },
      {
        heading: " Contributors",
        text: "Contributions from tech researchers and academics.",
      },
    ],
  },
];

export const knowledgeProfilePictures = [
  {
    src: "/male_one.webp",
    name: "John Techson",
    subject: "Quantum Computing",
    date: "October 15, 2023",
    heading: "The Quantum Leap in Computing",
    text: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    link: "/",
    like: "24.5k",
    comment: "50",
    share: "20",
  },

  {
    src: "/female_two.webp",
    name: "Sarah Ethicist",
    subject: "AI Ethics",
    date: "November 5, 2023",
    heading: "The Ethical Dilemmas of AI",
    text: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    link: "/",
    like: "32k",
    comment: "72",
    share: "18",
  },

  {
    src: "/male_two.webp",
    name: "Astronomer X",
    subject: "Space Exploration",
    date: "December 10, 2023",
    heading: "The Mars Colonization Challenge",
    text: "Exploring the technical and logistical challenges of human colonization on Mars.",
    link: "/",
    like: "20k",
    comment: "31",
    share: "12",
  },
];

export const gatewayList = [
  {
    icon: <EbooksIcon />,
    title: "Ebooks",
    titletext:
      "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
    downloadlink: "/",
    downloadedby: "10K",
    downloadeduserimage: [
      { src: "/female_one.webp" },
      { src: "/male_one.webp" },
      { src: "/female_two.webp" },
      { src: "/male_two.webp" },
    ],
    topictitle: "Variety of Topics",
    topictext:
      "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
    topicimage: "/ebooks.webp",
    totalnumber: "100",
    topicsubtitle: "Average Author Expertise",
    topicsubtext:
      " Ebooks are authored by renowned experts with an average of 15 years of experience",
  },
  {
    icon: <WhitepaperIcon />,
    title: "Whitepapers",
    titletext:
      "Dive into comprehensive reports and analyses with our collection of whitepapers. ",
    downloadlink: "/",
    downloadedby: "5K",
    downloadeduserimage: [
      { src: "/female_one.webp" },
      { src: "/male_one.webp" },
      { src: "/male_two.webp" },
      { src: "/female_two.webp" },
    ],
    topictitle: "Topics Coverage",
    topictext:
      "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
    topicimage: "/whitepaper.webp",
    totalnumber: "50",
    topicsubtitle: "Average Author Expertise ",
    topicsubtext:
      " Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
  },
];

export const testimonialList = [
  {
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    src: "/female_two.webp",
    comment:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    src: "/male_one.webp",
    comment:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.",
  },
  {
    name: "Emily Adams",
    location: "London, UK",
    src: "/female_one.webp",

    comment:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
];


export const contactList = [
  {
    title: "Resource Access",
    text: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
  },
  {
    title: "Community Forum",
    text: "Join our active community forum to discuss industry trends and collaborate with peers.",
  },
  {
    title: "Tech Events",
    text: "Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.",
  },
];