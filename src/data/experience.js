export const JOURNEY_MILESTONES = [
  {
    id: "4.1",
    year: "2019",
    category: "THE BEGINNING",
    mainHeading: ["HTML", "CSS"],
    title: "FIRST STEPS INTO WEB DEVELOPMENT",
    description: "My journey into software development began with HTML and CSS. I started exploring how websites are structured, how layouts are designed, and how code transforms ideas into digital experiences.",
    technologyFocus: [
      "HTML",
      "CSS",
      "Web Development Fundamentals"
    ],
    technologies: [
      "HTML",
      "CSS",
      "Web Development Fundamentals"
    ]
  },
  {
    id: "4.2",
    year: "2020",
    category: "PROGRAMMING FUNDAMENTALS",
    mainHeading: ["JAVASCRIPT"],
    title: "JAVASCRIPT & PROGRAMMING LOGIC",
    description: "I expanded my knowledge beyond HTML and CSS by learning JavaScript. This stage introduced me to programming logic, control flow, DOM manipulation, and the fundamentals of interactive web development.",
    technologyFocus: [
      "JavaScript",
      "DOM Manipulation",
      "Programming Fundamentals"
    ],
    technologies: [
      "JavaScript",
      "DOM Manipulation",
      "Programming Fundamentals"
    ]
  },
  {
    id: "4.3",
    year: "2021",
    category: "CORE PROGRAMMING & PROBLEM-SOLVING",
    mainHeading: ["C", "C++"],
    title: "PROGRAMMING LOGIC & DSA",
    description: "I explored C and C++ to strengthen my understanding of programming fundamentals, computational thinking, and problem-solving. I also developed an interest in data structures and algorithms.",
    technologyFocus: [
      "C",
      "C++",
      "Data Structures & Algorithms (DSA)",
      "Problem-Solving"
    ],
    technologies: [
      "C",
      "C++",
      "Data Structures & Algorithms (DSA)",
      "Problem-Solving"
    ]
  },
  {
    id: "4.4",
    year: "2022",
    category: "JAVA FUNDAMENTALS",
    mainHeading: ["JAVA"],
    title: "OBJECT-ORIENTED PROGRAMMING",
    description: "I began learning Java fundamentals, expanding my understanding of programming syntax, object-oriented concepts, and structured software development.",
    technologyFocus: [
      "Java",
      "OOP",
      "Programming Fundamentals"
    ],
    technologies: [
      "Java",
      "OOP",
      "Programming Fundamentals"
    ]
  },
  {
    id: "4.5",
    year: "2023",
    category: "PYTHON FUNDAMENTALS",
    mainHeading: ["PYTHON"],
    title: "EXPLORING PYTHON",
    description: "I started learning Python and its core programming concepts, broadening my experience with another programming language and strengthening my programming foundation.",
    technologyFocus: [
      "Python",
      "Python Syntax",
      "Programming Fundamentals"
    ],
    technologies: [
      "Python",
      "Python Syntax",
      "Programming Fundamentals"
    ]
  },
  {
    id: "4.6",
    year: "2024",
    category: "FRONTEND DEVELOPMENT",
    mainHeading: ["REACT"],
    title: "COMPONENT-BASED WEB DEVELOPMENT",
    description: "I began learning React, progressing toward component-based application development. I explored reusable components, application structure, and interactive user interfaces.",
    technologyFocus: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Component-Based Development"
    ],
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Component-Based Development"
    ]
  },
  {
    id: "4.7",
    year: "2025",
    category: "FULL-STACK DEVELOPMENT",
    mainHeading: ["FULL STACK"],
    title: "CONNECTING FRONTEND & BACKEND",
    description: "I completed a Full-Stack Development course, developing a broader understanding of how frontend interfaces, backend logic, APIs, and databases work together to power web applications.",
    technologyFocus: [
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "Databases"
    ],
    technologies: [
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "Databases"
    ]
  },
  {
    id: "4.8",
    year: "2026",
    category: "BACKEND ENGINEERING",
    mainHeading: ["BACKEND", "CLOUD", "AI"],
    title: "BUILDING BEYOND FULL STACK",
    description: "Building on my full-stack development foundation, I'm focusing on backend engineering while learning cloud infrastructure, DevOps practices, and AI integration. My goal is to understand how modern applications are built, deployed, and enhanced with AI capabilities.",
    isCurrent: true,
    backendEngineering: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB"
    ],
    cloudDevops: [
      "AWS",
      "Docker",
      "CI/CD Pipelines"
    ],
    aiIntegration: [
      "LLMs",
      "RAG",
      "AI API Integration"
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "AWS (Learning)",
      "Docker (Learning)",
      "CI/CD Pipelines (Learning)",
      "LLMs (Learning)",
      "RAG (Learning)",
      "AI API Integration (Learning)"
    ]
  }
];

// Backwards compatibility for any other component referencing EXPERIENCES
export const EXPERIENCES = JOURNEY_MILESTONES.map((m) => ({
  year: m.year,
  role: m.title,
  company: m.category,
  location: "DEVELOPER JOURNEY",
  period: m.year,
  description: m.description,
  stack: m.technologies,
  ...m
}));

export const PHILOSOPHY_PRINCIPLES = [
  {
    id: "5.1",
    title: "UNDERSTAND",
    headline: "Understand the problem before solving it.",
    details: "Great software starts with conceptual clarity. Diving into code without dissecting root constraints leads to technical debt. I map the domain, invariants, and edge cases first."
  },
  {
    id: "5.2",
    title: "STRUCTURE",
    headline: "Design systems that remain maintainable.",
    details: "Complexity is an engineering choice. By decoupling components, adopting strict interface boundaries, and enforcing deterministic data flow, code remains intuitive years later."
  },
  {
    id: "5.3",
    title: "BUILD",
    headline: "Turn ideas into reliable software.",
    details: "Execution matters. Building resilient systems means graceful error handling, defensive API contracts, database query profiling, and rigorous production readiness."
  },
  {
    id: "5.4",
    title: "IMPROVE",
    headline: "Continuously learn and refine.",
    details: "Technology moves fast, but core engineering fundamentals remain eternal. Constant benchmarking, clean refactoring, and exploring better tools drive continuous elevation."
  }
];
