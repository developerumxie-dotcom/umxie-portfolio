export const PROJECTS = [
  {
    id: "01",
    num: "01",
    title: "NEWCOMER PLATFORM",
    tagline: "Helping newcomers discover accommodation, food, jobs, and local services in a new city.",
    description: "A centralized platform engineered to eliminate relocation friction. Features intelligent search filters, verified accommodation listings, local employment discovery, and community guides.",
    extendedDetails: "Architected with a decoupled Node.js and Express backend providing sub-200ms latency queries across multi-faceted geo-filters. Implemented MongoDB geospatial indexing ($nearSphere) for instant proximity calculations, complete with role-based JWT auth for verified hosts and newcomers.",
    theme: "light", // Featured Light section as in creative direction & reference mockup
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/assets/projects/newcomer-platform.jpg",
    liveUrl: "https://newcomer-platform.demo",
    githubUrl: "https://github.com/umxie/newcomer-platform",
    stats: [
      { label: "QUERY LATENCY", value: "< 180ms" },
      { label: "LISTINGS VERIFIED", value: "1,200+" },
      { label: "UPTIME", value: "99.9%" }
    ],
    architectureHighlights: [
      "Geospatial indexing with MongoDB for real-time radius search",
      "Stateless JWT authorization with secure httpOnly cookie storage",
      "Responsive React client with optimistic UI updates and instant caching"
    ]
  },
  {
    id: "02",
    num: "02",
    title: "UMXIE'S STORE",
    tagline: "Modern e-commerce experience with smooth, clean UI and high-throughput backend architecture.",
    description: "A luxury minimalist commerce engine designed for technical apparel and design hardware. Features seamless product browsing, atomic cart interactions, and instant checkout flows.",
    extendedDetails: "Built around an event-driven inventory tracking system on Node.js and Express. Leveraged advanced MongoDB pipelines for dynamic attribute filtering, client-side optimistic cart mutations, and server-side webhook validation for secure payments.",
    theme: "dark", // Featured Dark section
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/assets/projects/umxies-store.jpg",
    liveUrl: "https://store.umxie.dev",
    githubUrl: "https://github.com/umxie/umxies-store",
    stats: [
      { label: "LIGHTHOUSE", value: "99/100" },
      { label: "CHECKOUT TIME", value: "1.4s" },
      { label: "ACTIVE SKU PIPELINE", value: "500+" }
    ],
    architectureHighlights: [
      "Optimistic UI checkout and cart reconciliation without page reload",
      "Normalized MongoDB document modeling for rapid catalog indexing",
      "Sleek dark monochrome visual hierarchy with ultra-clean micro-interactions"
    ]
  },
  {
    id: "03",
    num: "03",
    title: "CRUD MANAGEMENT SYSTEM",
    tagline: "Full-stack developer admin portal with secure auth, image upload pipelines, and REST API telemetry.",
    description: "An enterprise administrative interface providing end-to-end data lifecycle control, live endpoint status monitoring, Multer-driven asset pipelines, and granular permission controls.",
    extendedDetails: "Features a robust REST API layer with automated request validation, multipart file processing via Multer into secure storage buffers, and MongoDB aggregation pipelines. Includes real-time database collection telemetry and audit log tracking.",
    theme: "dark", // Featured Dark section
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "React"],
    image: "/assets/projects/crud-system.jpg",
    liveUrl: "https://crud-system.demo",
    githubUrl: "https://github.com/umxie/crud-management-system",
    stats: [
      { label: "THROUGHPUT", value: "10k req/min" },
      { label: "UPLOAD BUFFER", value: "Streaming" },
      { label: "AUTH SCHEMA", value: "RBAC + JWT" }
    ],
    architectureHighlights: [
      "Multer multipart stream buffer with strict MIME-type and byte-size checks",
      "Full CRUD REST API endpoints with standardized JSON payload schemas",
      "Dynamic data table with server-side pagination, sorting, and filter pipelines"
    ]
  }
];
