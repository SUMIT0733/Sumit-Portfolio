export const Bio = {
  name: " Sumit Monapara",
  roles: ["a DevOps Engineer", "a Software Engineer", "an Android Developer"],
  description:
    "Experienced DevOps engineer and software engineer with 3+ years of experience combined at Tata Conultancy services and White Orange Software. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/SUMIT0733",
  linkedin: "https://www.linkedin.com/in/sumit0733/",
  gmail: "mailto:sumit.monapara@gmail.com",
  resume:
    "https://drive.google.com/file/d/1I5GkS0pt7Y9l5eBVnCHt9vqsiDVTIq8-/view?usp=sharing",
};

export const Skills = [
  {
    title: "DevOps",
    skills: [
      { name: "jenkins" },
      { name: "GitHub" },
      { name: "ELK Stack" },
      { name: "SonarQube" },
      { name: "Docker" },
      { name: "Ansible" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "GitHub Actions" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Android" },
      { name: "Python" },
      { name: "Hibernate/JPA" },
      { name: "Maven" },
      { name: "JSON" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React Js" },
      { name: "Redux" },
      { name: "NodeJS (Beginner)" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "Material UI" },
    ],
  },
  {
    title: "Backend / DB",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "AWS DynamoDB" },
      { name: "Google Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Android",
    skills: [
      { name: "Java" },
      { name: "Kotlin" },
      { name: "XML" },
      { name: "Material UI" },
      { name: "Android Studio" },
    ],
  },
];

export const Experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/C4D0BAQE8O826hGKXKg/company-logo_200_200/0/1650891606820/whiteorangesoftware_logo?e=2147483647&v=beta&t=49W4cxgqQSuP-9roU1nJ_huf3ESVtq1-fNJPcvQytJM",
    role: "Software Developer",
    company: "White Orange Software",
    date: "Dec 2020 - May 2022",
    desc: "Working on full-stack software development using SpringBoot, React.js and MongoDB.",
    skills: [
      "Spring Boot",
      "React.js",
      "GitHub",
      "MongoDB",
      "Docker",
      "AWS",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: "https://www.siegelgale.com/app/uploads/2021/10/SGCOM_Blog_211018.png",
    role: "DevOps Engineer",
    company: "Tata Consultancy Services",
    date: "Jul 2019 - Nov 2020",
    desc: "Working on DevOps tools and cloud services to automate the CI/CD flows and implement of DevOps culture.",
    skills: [
      "jenkins",
      "GitHub",
      "Nexus",
      "SonarQube",
      "ELK Stack",
      "Docker",
      "Kubernetes",
      "Ansible",
      "AWS",
    ],
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/C560BAQEx-amFa5amHQ/company-logo_200_200/0/1658622628010/guj_infotech_logo?e=2147483647&v=beta&t=PMBhbfhP0GDnbo1NZ5Cd_VOSrBa3CA5As5FSsMdhKLc",
    role: "Android Developer Intern",
    company: "Guj Infotech",
    date: "Dec 2018 - April 2019",
    desc: "Working on the Android application development using Java, XML, Material UI and Google Firebase.",
    skills: [
      "Java",
      "XML",
      "Firebase",
      "Material UI",
      "JavaScript",
      "Android Studio",
    ],
  },
];

export const Education_data = [
  {
    id: 0,
    img: "https://international-sustainable-campus-network.org/wp-content/uploads/2022/08/Concordia-Logo-Main-CMYK_3-2_75pc.png",
    school: "Concordia University",
    date: "Jan 2022 - Aug 2023",
    grade: "3.51 GPA",
    degree: "M.Engg - Masters in Applied Computer Science",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/2/2c/Birla_Vishvakarma_Mahavidyalaya_logo.png",
    school: "Birla Vishvakarma Mahavidyalaya",
    date: "Aug 2015 - April 2019",
    grade: "3.7 GPA",
    degree: "B.Tech - Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "BVM IT (Android)",
    // date: "Jun 2023 - Jul 2023",
    shortDesc:
      "Android applicaiton for efficient communication between faculties and students...",
    description:
      "BVM IT is a android application designed for faculties and students to communicate efficiently. It has features like document sharing, broadcast using SMS and in-app notifications that was implemented using Google Cloud messaging and group chat, etc. It is developed using Java, XML, Material UI and Google Firebase.",
    image:
      "https://drive.google.com/file/d/1cdlnAjomL-U6dYp6VdLpYa-IllGN1xC0/view?usp=sharing",
    tags: ["Android", "Java", "XML", "Firebase", "Material UI"],
    category: "android app",
    github: "https://github.com/SUMIT0733/BVM_IT",
    // webapp: "https://trackify.duckdns.org",
  },
  {
    id: 1,
    title: "FaultSafeGuard - Distributed System",
    shortDesc:
      "Distributed java Application to manage Hospital appointment booking... ",
    description:
      "FaultSafeguard is a robust distributed system designed for efficient appointment mgmt, ensuring fault tolerance, reliability in scheduling processe and highly available to reduce the downtime in case of failure.",
    tags: [
      "Java",
      "Distributed System",
      "client-server communication",
      "web-socket",
    ],
    category: "",
    github: "https://github.com/SUMIT0733/dams",
  },
  {
    id: 2,
    title: "Freelancelot",
    shortDesc:
      "Freelancelot is a application developed using Java Play(Akka) Framework...",
    description:
      "Freelancelot is a Java Play(Akka) framework that utilizes Freelancer API to fetch the available projects, top clients, trending topics, and related APIs to implement Akka and testing using JUnit and Mockito.",
    tags: ["Java", "Play Framework", "JUnit", "Mockito", "Rest API"],
    category: "web application",
    github: "https://github.com/SUMIT0733/SOEN6441-creativecoders",
  },
  {
    id: 3,
    title: "Hunger On Train",
    shortDesc:
      "HungerOnTrain is a Android application to deliver food on train station from restaurant...",
    description:
      "HungerOnTrain is a Android application to deliver food on train station from restaurant. It has features like food ordering, payment gateway, order tracking, etc. It is developed using Java, XML, Material UI, SQL and Google Firebase. It utilizes various APIs such as Train API, Maps API and Google API to signin using gmail.",
    tags: [
      "Java",
      "Android",
      "Firebase",
      "SQL",
      "Material UI",
      "Google API",
      "Firebase",
    ],
    category: "android app",
    github: "https://github.com/SUMIT0733/HungerOnTrain",
  },
  {
    id: 4,
    title: "SpringFlow Automator",
    shortDesc:
      "DevOps project to demonstrate the skills to automate the CI/CD pipeline...",
    description:
      "SpringFlow Automator is a complete end-to-end DevOps project to demonstrate the skills to automate the CI/CD pipeline using Jenkins, GitHub, SonarQube, Nexus, Docker, Kubernetes, Ansible, Terraform, AWS, etc., and provides the monitoring tools to manage the application logs usnig ELK stack and AWS cloudWatch.",
    tags: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS", "SonarQube"],
    category: "devops",
    github: "",
  },
  {
    id: 5,
    title: "MYSY",
    shortDesc:
      "MYSY is an andorid informative application to provide the details of scholarship...",
    description:
      "MYSY is an andorid application to provide the details of scholarship offered by state government to students of engineering and application procides various information such as list of documents required, eligibility, and scholarship amount calculator to get an estimate amount of scholarhsip and utlized Youtube API to provide video guide on how to fill application for scholarship.",
    tags: [
      "Android",
      "Fragment",
      "XML",
      "YouTube API",
      "RecyclerView",
      "BottomNavigation",
    ],
    category: "android app",
    github: "https://github.com/SUMIT0733/Mysy1",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
