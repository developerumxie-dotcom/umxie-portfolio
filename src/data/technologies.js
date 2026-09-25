export const TECHNOLOGIES = [
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description: "Runtime environment used for building scalable backend services, asynchronous processing, and high-throughput APIs.",
    details: "Event-driven, non-blocking I/O model designed for maximum data concurrency.",
    proficiency: "Primary",
    connections: ["express", "javascript", "mongodb", "rest", "jwt"],
    coords: { x: 0, y: 1.2, z: 0.1 }
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Core Language",
    description: "Core programming language powering both modern frontends and robust server runtimes with modern ESNext features.",
    details: "Deep understanding of event loops, asynchronous programming, closures, and performance optimization.",
    proficiency: "Primary",
    connections: ["nodejs", "react", "express"],
    coords: { x: -2.2, y: 0.2, z: -0.3 }
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Declarative component-based UI library used to architect resilient, responsive, and high-performance digital interfaces.",
    details: "Custom hooks, state machines, memoization, and smooth visual rendering pipelines.",
    proficiency: "Primary",
    connections: ["javascript", "nodejs", "rest"],
    coords: { x: -1.4, y: 1.8, z: 0.4 }
  },
  {
    id: "express",
    name: "Express",
    category: "Backend Framework",
    description: "Fast, unopinionated minimalist web framework for Node.js used to engineer modular RESTful API endpoints.",
    details: "Middleware chaining, error interceptors, rate limiting, and route orchestration.",
    proficiency: "Primary",
    connections: ["nodejs", "mongodb", "multer", "jwt", "rest"],
    coords: { x: 1.5, y: 1.6, z: -0.2 }
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    description: "Document-oriented NoSQL database system optimized for flexible schemas, complex aggregation pipelines, and high read/write speeds.",
    details: "Indexing strategies, Mongoose schema validation, and replica set reliability.",
    proficiency: "Primary",
    connections: ["nodejs", "express", "multer"],
    coords: { x: 2.1, y: 0.4, z: 0.3 }
  },
  {
    id: "rest",
    name: "REST APIs",
    category: "Architecture",
    description: "Standardized architectural style for reliable networked applications, structured status codes, and deterministic payload models.",
    details: "Statelessness, caching policies, payload sanitization, and OpenAPI specifications.",
    proficiency: "Primary",
    connections: ["express", "nodejs", "jwt", "aws"],
    coords: { x: 1.2, y: -1.1, z: 0.2 }
  },
  {
    id: "jwt",
    name: "JWT",
    category: "Security",
    description: "JSON Web Tokens utilized for secure stateless authentication, session claims, and role-based access verification.",
    details: "Cryptographic signature validation, refresh token rotation, and safe bearer headers.",
    proficiency: "Secondary",
    connections: ["express", "nodejs", "rest"],
    coords: { x: -0.8, y: -1.3, z: -0.2 }
  },
  {
    id: "git",
    name: "Git",
    category: "Workflow",
    description: "Distributed version control system enabling precise source history tracking, collaborative workflows, and code review governance.",
    details: "Branching strategies, rebase workflows, tag releases, and CI/CD triggers.",
    proficiency: "Core",
    connections: ["javascript", "aws"],
    coords: { x: -1.9, y: -0.6, z: 0.2 }
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "Cloud computing platform used for deploying scalable microservices, object storage (S3), and serverless operations.",
    details: "Elastic compute, S3 asset buckets, IAM policies, and cloud networking.",
    proficiency: "Secondary",
    connections: ["rest", "git", "multer"],
    coords: { x: 0.3, y: -1.9, z: 0.1 }
  },
  {
    id: "multer",
    name: "Multer",
    category: "Middleware",
    description: "Streaming Node.js multipart/form-data middleware designed for efficient, validated file and image upload handling.",
    details: "Memory and disk storage engines, MIME-type filtration, and storage buffer security.",
    proficiency: "Specialized",
    connections: ["express", "mongodb", "aws"],
    coords: { x: 1.8, y: -0.4, z: -0.3 }
  }
];
