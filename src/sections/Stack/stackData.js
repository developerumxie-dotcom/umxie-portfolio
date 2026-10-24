/**
 * Professional 8-Module Tech Stack Dataset.
 * Organized into 3 clear skill-level categories per module.
 * 
 * Each module contains:
 * - id, number, name, subtitle, categoryIcon
 * - categories: Array of 3 skill-level sections (Tier 1: Core/Proficient, Tier 2: Working Knowledge, Tier 3: Exploring)
 * - technologies: Flattened array of all tech items for seamless backwards compatibility
 */

export const UNIVERSE_MODULES = [
  // =========================================================================
  // 01 — PROGRAMMING LANGUAGES
  // =========================================================================
  {
    id: 'languages',
    number: '01',
    name: 'LANGUAGES',
    subtitle: 'Programming and query languages across diverse computing paradigms.',
    categoryIcon: 'languages',
    categories: [
      {
        id: 'proficient',
        title: 'Proficient',
        tier: 1,
        technologies: [
          {
            id: 'javascript',
            icon: 'javascript',
            name: 'JavaScript',
            badges: ['Language', 'Frontend', 'Backend', 'Full-Stack'],
            description: 'Core language of the modern web. Used extensively across client and server environments for asynchronous event-driven applications.',
            keyConcepts: ['Event Loop & Microtasks', 'Closures & Scope Chain', 'Promises & Async/Await', 'Prototypal Inheritance', 'ES6+ Modules', 'DOM & Fetch API']
          },
          {
            id: 'c',
            icon: 'c',
            name: 'C',
            badges: ['Language', 'Low-Level', 'Systems', 'Performance'],
            description: 'Procedural systems language offering explicit memory management, deterministic execution speed, and direct pointer arithmetic.',
            keyConcepts: ['Pointers & Arithmetic', 'Dynamic Memory (malloc/free)', 'Structs & Unions', 'Bitwise Manipulation', 'Header Files & Preprocessor', 'System Calls']
          },
          {
            id: 'python',
            icon: 'python',
            name: 'Python',
            badges: ['Language', 'Backend', 'Automation', 'Data'],
            description: 'Versatile, high-level language with clear syntax used for server-side logic, automation scripts, data handling, and tooling.',
            keyConcepts: ['List & Dict Comprehensions', 'Generators & Iterators', 'Decorators & Closures', 'Context Managers (with)', 'Type Hints', 'Virtual Environments']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'typescript',
            icon: 'typescript',
            name: 'TypeScript',
            badges: ['Language', 'Static Typing', 'Enterprise', 'Tooling'],
            description: 'Statically typed superset of JavaScript providing interfaces, generics, and compile-time verification for scalable applications.',
            keyConcepts: ['Generics & Constraints', 'Union & Intersection Types', 'Mapped & Utility Types', 'Type Guards & Narrowing', 'Strict Null Checks', 'TSConfig Optimization']
          },
          {
            id: 'java',
            icon: 'java',
            name: 'Java',
            badges: ['Language', 'OOP', 'Backend', 'JVM'],
            description: 'Robust, strongly typed object-oriented language running on the JVM with comprehensive multithreading and enterprise frameworks.',
            keyConcepts: ['JVM & Garbage Collection', 'Encapsulation & Inheritance', 'Streams API & Lambdas', 'Exception Hierarchy', 'Generics & Collections', 'Multithreading']
          },
          {
            id: 'sql',
            icon: 'sql',
            name: 'SQL',
            badges: ['Query Language', 'Relational', 'Data Integrity', 'Analytics'],
            description: 'Standard declarative query language for defining schemas, indexing data, managing transactions, and querying relational databases.',
            keyConcepts: ['Complex Joins (INNER, LEFT, FULL)', 'Aggregation & GROUP BY', 'Subqueries & CTEs', 'Indexes & Query Plans', 'ACID Transactions', 'Constraints & Foreign Keys']
          },
          {
            id: 'bash',
            icon: 'bash',
            name: 'Bash',
            badges: ['Scripting', 'CLI', 'Automation', 'Linux'],
            description: 'Command language and shell scripting for workflow automation, process orchestration, CI runners, and system administration.',
            keyConcepts: ['Pipes & Redirection', 'Positional Parameters', 'Environment Variables', 'Conditionals & Loops', 'Process Exit Codes', 'Cron Automation']
          },
          {
            id: 'dart',
            icon: 'dart',
            name: 'Dart',
            badges: ['Language', 'Client-Optimized', 'AOT & JIT', 'Mobile'],
            description: 'Object-oriented, class-based language engineered by Google for fast UI rendering, ahead-of-time compilation, and cross-platform apps.',
            keyConcepts: ['Null Safety', 'Async / Future API', 'Isolates & Event Loop', 'Mixins & Extension Methods', 'AOT & JIT Compilation', 'Streams']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'go',
            icon: 'go',
            name: 'Go',
            badges: ['Language', 'Concurrency', 'Microservices', 'Fast Compilation'],
            description: 'Statically typed compiled language developed by Google with native goroutines and lightweight channels for concurrent networking.',
            keyConcepts: ['Goroutines & Channels', 'Interfaces & Implicit Implementation', 'Struct Composition', 'Standard Library Networking', 'Pointers & Memory Model']
          },
          {
            id: 'rust',
            icon: 'rust',
            name: 'Rust',
            badges: ['Language', 'Memory Safe', 'Systems', 'Zero-Cost'],
            description: 'Modern systems language providing bare-metal performance and guaranteed memory safety without requiring a garbage collector.',
            keyConcepts: ['Ownership & Borrowing', 'Lifetimes', 'Traits & Generics', 'Pattern Matching', 'Zero-Cost Abstractions', 'Cargo Package Manager']
          },
          {
            id: 'kotlin',
            icon: 'kotlin',
            name: 'Kotlin',
            badges: ['Language', 'JVM', 'Concise', 'Android'],
            description: 'Modern pragmatic language running on the JVM with complete Java interoperability, first-class null safety, and coroutines.',
            keyConcepts: ['First-Class Null Safety', 'Extension Functions', 'Data Classes', 'Coroutines', 'Smart Casts']
          },
          {
            id: 'php',
            icon: 'php',
            name: 'PHP',
            badges: ['Language', 'Web Dev', 'Server-Side', 'APIs'],
            description: 'Widely used server-side scripting language powering web APIs, CMS platforms, and modern web application frameworks.',
            keyConcepts: ['Request Lifecycle', 'Superglobals', 'Object-Oriented PHP 8+', 'Composer Dependency Management', 'PDO Database Access']
          },
          {
            id: 'csharp',
            icon: 'csharp',
            name: 'C#',
            badges: ['Language', '.NET', 'OOP', 'Type-Safe'],
            description: 'Modern, object-oriented language developed by Microsoft for enterprise services, cross-platform apps via .NET, and game logic.',
            keyConcepts: ['LINQ Queries', 'Async/Await Pattern', 'Properties & Accessors', 'Dependency Injection', 'Garbage Collection (.NET CLR)']
          },
          {
            id: 'swift',
            icon: 'swift',
            name: 'Swift',
            badges: ['Language', 'Apple Ecosystem', 'Type-Safe', 'Modern'],
            description: 'Fast, type-safe language engineered by Apple for iOS and macOS applications with concise syntax and modern memory management.',
            keyConcepts: ['Optionals & Optional Chaining', 'Value Types (Structs) vs Reference Types', 'Protocols & Extensions', 'Automatic Reference Counting (ARC)']
          },
          {
            id: 'ruby',
            icon: 'ruby',
            name: 'Ruby',
            badges: ['Language', 'Dynamic', 'Developer Joy', 'Scripting'],
            description: 'Dynamic, open-source object-oriented language focused on simplicity and developer productivity through expressive syntax.',
            keyConcepts: ['Pure Object-Orientation', 'Blocks & Yield', 'Mixins & Modules', 'Metaprogramming Basics', 'Gems & Bundler']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 02 — FRONTEND DEVELOPMENT
  // =========================================================================
  {
    id: 'frontend',
    number: '02',
    name: 'FRONTEND',
    subtitle: 'User interfaces, responsive layouts, web performance, and mobile applications.',
    categoryIcon: 'frontend',
    categories: [
      {
        id: 'core_skills',
        title: 'Core Skills',
        tier: 1,
        technologies: [
          {
            id: 'html',
            icon: 'html',
            name: 'HTML',
            badges: ['Markup', 'Structure', 'Accessibility', 'SEO'],
            description: 'The foundation of modern web documents. Used with semantic tags, accessible ARIA roles, and SEO-friendly document hierarchy.',
            keyConcepts: ['Semantic Elements (header, main, section)', 'ARIA & Screen Reader Accessibility', 'Meta Tags & OpenGraph', 'Form Validation & Input Types', 'SEO Structure']
          },
          {
            id: 'css',
            icon: 'css',
            name: 'CSS',
            badges: ['Styling', 'Layouts', 'Animations', 'Design System'],
            description: 'Advanced styling techniques including Flexbox, CSS Grid, Custom Properties, fluid typography, responsive breakpoints, and GPU animations.',
            keyConcepts: ['Flexbox & Multi-column Grid', 'CSS Custom Properties (Variables)', 'Media & Container Queries', 'Hardware-Accelerated Transforms', 'clamp() Fluid Typography']
          },
          {
            id: 'frontend_js',
            icon: 'javascript',
            name: 'JavaScript',
            badges: ['Browser', 'DOM', 'Event Handling', 'Async'],
            description: 'Client-side scripting for interactive UI controls, DOM manipulation, asynchronous data fetching, and browser API integrations.',
            keyConcepts: ['DOM Traversal & Manipulation', 'Event Delegation & Bubbling', 'IntersectionObserver API', 'LocalStorage & SessionStorage', 'Fetch API & JSON Parsing']
          },
          {
            id: 'react',
            icon: 'react',
            name: 'React',
            badges: ['UI Library', 'Component-Based', 'Virtual DOM', 'Hooks'],
            description: 'Component-driven user interface architecture with declarative state management, custom hooks, and optimized rendering.',
            keyConcepts: ['Component Lifecycle & Hooks', 'useState, useEffect, useMemo, useRef', 'Custom Hooks Architecture', 'Virtual DOM Reconciliation', 'Context API & Prop Drilling Prevention']
          },
          {
            id: 'flutter',
            icon: 'flutter',
            name: 'Flutter',
            badges: ['Cross-Platform', 'Mobile', 'Widgets', 'Dart'],
            description: 'Google’s UI toolkit for building natively compiled, visually consistent applications for mobile, web, and desktop from a single codebase.',
            keyConcepts: ['Widget Tree & Composition', 'Stateless vs StatefulWidget', 'InheritedWidget & Provider', 'Custom Paint & Canvas', 'Hot Reload Workflow']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'tailwind',
            icon: 'tailwind',
            name: 'Tailwind CSS',
            badges: ['Utility-First', 'Rapid Styling', 'Responsive', 'Modern'],
            description: 'Utility-first CSS framework enabling rapid styling directly in markup with custom design tokens, arbitrary values, and JIT compilation.',
            keyConcepts: ['Utility-First Architecture', 'JIT Engine Compilation', 'Responsive Prefix Modifiers', 'Theme Configuration & Tokens', 'Dark Mode Classes']
          },
          {
            id: 'reactnative',
            icon: 'reactnative',
            name: 'React Native',
            badges: ['Mobile', 'iOS & Android', 'Cross-Platform', 'React'],
            description: 'Framework for writing native mobile applications using React components that bridge directly to iOS and Android native views.',
            keyConcepts: ['Native Bridges & Fabric Architecture', 'View, Text & ScrollView', 'StyleSheet API', 'Platform Specific Code', 'Mobile Navigation Stacks']
          },
          {
            id: 'bootstrap',
            icon: 'bootstrap',
            name: 'Bootstrap',
            badges: ['UI Framework', 'Grid System', 'Components', 'Responsive'],
            description: 'Popular responsive front-end toolkit featuring a 12-column flexbox grid system, pre-built components, and utility classes.',
            keyConcepts: ['12-Column Grid System', 'Responsive Breakpoint Classes', 'Modal & Navbar Components', 'Utility Classes', 'SCSS Customization']
          },
          {
            id: 'redux_toolkit',
            icon: 'redux',
            name: 'Redux Toolkit',
            badges: ['State Management', 'Predictable', 'RTK Query', 'Middleware'],
            description: 'Standard, opinionated toolset for efficient global state management with createSlice, immutable state updates, and RTK Query.',
            keyConcepts: ['createSlice & Reducers', 'Immer Immutable Updates', 'Async Thunks & Dispatching', 'Selectors & Memoization', 'Redux DevTools Integration']
          },
          {
            id: 'vite',
            icon: 'vite',
            name: 'Vite',
            badges: ['Build Tool', 'Fast HMR', 'ES Modules', 'Bundler'],
            description: 'Next-generation frontend tooling offering instant server start, lightning-fast Hot Module Replacement (HMR), and Rollup production builds.',
            keyConcepts: ['Native ES Modules Dev Server', 'Instant Hot Module Replacement', 'Rollup Production Bundling', 'Environment Variables (.env)', 'Plugin Architecture']
          },
          {
            id: 'nextjs',
            icon: 'nextjs',
            name: 'Next.js',
            badges: ['React Framework', 'SSR & SSG', 'Full-Stack', 'Routing'],
            description: 'Production React framework offering Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, and server actions.',
            keyConcepts: ['App Router & File-based Routing', 'Server vs Client Components', 'Static Site Generation (SSG)', 'Server-Side Rendering (SSR)', 'API Route Handlers']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'angular',
            icon: 'angular',
            name: 'Angular',
            badges: ['Framework', 'Enterprise', 'TypeScript', 'RxJS'],
            description: 'Comprehensive, opinionated TypeScript-based application framework providing dependency injection, two-way binding, and RxJS observables.',
            keyConcepts: ['Dependency Injection', 'Component & Module System', 'RxJS Observables & Pipes', 'Directives & Two-way Binding', 'Angular CLI']
          },
          {
            id: 'sass',
            icon: 'sass',
            name: 'Sass',
            badges: ['CSS Preprocessor', 'Mixins', 'Nesting', 'Variables'],
            description: 'Mature CSS preprocessor adding nested rules, variables, mixins, functions, and modular file imports to standard stylesheets.',
            keyConcepts: ['Selector Nesting', 'Mixins & Functions', 'SCSS Variables & Math', 'Modular @use and @forward', 'Color Manipulations']
          },
          {
            id: 'threejs',
            icon: 'threejs',
            name: 'Three.js',
            badges: ['3D Graphics', 'WebGL', 'Shaders', 'Creative Dev'],
            description: 'JavaScript 3D library used to create interactive WebGL scenes, orbital camera controls, custom geometric meshes, and particle systems.',
            keyConcepts: ['Scene, Camera & Renderer', 'Meshes, Geometries & Materials', 'Point & Ambient Lighting', 'Animation Tick Loop', 'WebGL Buffer Geometries']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 03 — BACKEND DEVELOPMENT
  // =========================================================================
  {
    id: 'backend',
    number: '03',
    name: 'BACKEND',
    subtitle: 'APIs, server architecture, business logic, security, and server-side systems.',
    categoryIcon: 'backend',
    categories: [
      {
        id: 'core_skills',
        title: 'Core Skills',
        tier: 1,
        technologies: [
          {
            id: 'nodejs',
            icon: 'nodejs',
            name: 'Node.js',
            badges: ['Runtime', 'V8 Engine', 'Event-Driven', 'Non-Blocking'],
            description: 'Asynchronous event-driven JavaScript runtime built on Chrome’s V8 engine, designed for high-concurrency networked server applications.',
            keyConcepts: ['Event Loop & Libuv Thread Pool', 'Non-blocking Asynchronous I/O', 'Buffer & Stream Pipelines', 'Cluster & Worker Threads', 'CommonJS & ES Modules']
          },
          {
            id: 'express',
            icon: 'express',
            name: 'Express.js',
            badges: ['Framework', 'Routing', 'Middleware', 'Minimalist'],
            description: 'Fast, unopinionated, minimalist web framework for Node.js, providing essential routing and middleware composition for HTTP services.',
            keyConcepts: ['Routing (GET, POST, PUT, DELETE)', 'Middleware Chain Execution', 'Error Handling Middleware', 'Request & Response Lifecycle', 'Static Asset Serving']
          },
          {
            id: 'rest',
            icon: 'rest',
            name: 'REST APIs',
            badges: ['Architecture', 'HTTP', 'Stateless', 'Design'],
            description: 'Representational State Transfer architectural pattern for designing scalable, stateless web services using standard HTTP verbs.',
            keyConcepts: ['HTTP Verbs & Status Codes', 'Stateless Client-Server Contract', 'Uniform Resource Identifiers (URIs)', 'Idempotent Operations', 'Pagination, Filtering & Sorting']
          },
          {
            id: 'auth',
            icon: 'auth',
            name: 'Authentication and Authorization',
            badges: ['Security', 'RBAC', 'Session/Token', 'Permissions'],
            description: 'Security architecture ensuring verified user identity and role-based access control across protected server routes and resources.',
            keyConcepts: ['Role-Based Access Control (RBAC)', 'Password Hashing (bcrypt / Argon2)', 'Session vs Token Auth', 'CSRF & XSS Defenses', 'OAuth2 & Third-party Handshakes']
          },
          {
            id: 'middleware',
            icon: 'middleware',
            name: 'Middleware',
            badges: ['Pipeline', 'Interceptors', 'Logging', 'Security'],
            description: 'Software functions that have access to the request and response objects to execute code, transform payloads, and terminate cycles.',
            keyConcepts: ['Next() Function Propagation', 'Request Body Parsers', 'CORS & Security Headers (Helmet)', 'Rate Limiting Interceptors', 'Centralized Logging']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'mongodb_integration',
            icon: 'mongodb',
            name: 'MongoDB Integration',
            badges: ['Database', 'NoSQL', 'Document Store', 'Driver'],
            description: 'Connecting, querying, and managing scalable document data pipelines from backend Node.js applications.',
            keyConcepts: ['Connection Pool Management', 'CRUD Query Operations', 'Aggregation Pipelines', 'Replica Sets & Failover', 'Index Utilization']
          },
          {
            id: 'mongoose_backend',
            icon: 'mongoose',
            name: 'Mongoose',
            badges: ['ODM', 'Schema Validation', 'Models', 'Middleware'],
            description: 'Object Data Modeling (ODM) library for MongoDB providing schema validation, type casting, middleware hooks, and business logic methods.',
            keyConcepts: ['Strict Schema Definitions', 'Validation Rules & Defaults', 'Pre/Post Save Hooks', 'Virtual Properties', 'Population / Relational References']
          },
          {
            id: 'api_validation',
            icon: 'api_validation',
            name: 'API Validation',
            badges: ['Sanitization', 'Schema Verification', 'Data Integrity', 'Defensive'],
            description: 'Defensive schema verification ensuring incoming request payloads, query parameters, and headers conform to strict specifications.',
            keyConcepts: ['Schema Validation (Zod, Joi)', 'Type Coercion & Stripping', 'Custom Error Messages', 'Request Body Sanitization', 'SQL/NoSQL Injection Prevention']
          },
          {
            id: 'error_handling',
            icon: 'error_handling',
            name: 'Error Handling',
            badges: ['Reliability', 'Observability', 'Graceful Fallback', 'Architecture'],
            description: 'Structured error handling architecture providing centralized logging, standardized error responses, and process stability.',
            keyConcepts: ['Custom Error Classes', 'Centralized Error Middleware', 'Operational vs Programmer Errors', 'UnhandleRejection Handlers', 'Safe Client Payloads']
          },
          {
            id: 'jwt',
            icon: 'jwt',
            name: 'JWT',
            badges: ['Tokens', 'Stateless Auth', 'Cryptography', 'Claims'],
            description: 'JSON Web Tokens for compact, URL-safe transmission of cryptographically signed claims between client and server.',
            keyConcepts: ['Header, Payload & Signature', 'HMAC SHA256 & RSA Signing', 'Access vs Refresh Token Pairs', 'Expiration & Revocation Strategies', 'Token Decoding & Verification']
          },
          {
            id: 'websockets',
            icon: 'websockets',
            name: 'WebSockets',
            badges: ['Real-Time', 'Full-Duplex', 'Events', 'Low-Latency'],
            description: 'Persistent, full-duplex communication channel over a single TCP connection for low-latency live events and notifications.',
            keyConcepts: ['HTTP Handshake Upgrade', 'Bidirectional Message Frames', 'Heartbeat & Ping/Pong', 'Connection State Management', 'Broadcast & Room Topologies']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'django',
            icon: 'python',
            name: 'Python/Django',
            badges: ['Framework', 'Batteries-Included', 'ORM', 'Python'],
            description: 'High-level Python web framework encouraging rapid development and clean, pragmatic design with a powerful built-in ORM.',
            keyConcepts: ['Model-View-Template (MVT)', 'Django ORM & Migrations', 'Built-in Admin Panel', 'URL Routing & Middleware', 'Authentication System']
          },
          {
            id: 'spring_boot',
            icon: 'java',
            name: 'Java/Spring Boot',
            badges: ['Framework', 'Enterprise', 'Inversion of Control', 'Microservices'],
            description: 'Convention-over-configuration Java framework designed to simplify the bootstrapping and development of enterprise microservices.',
            keyConcepts: ['Dependency Injection & IoC Container', 'Spring Data JPA & Repositories', 'REST Controller Annotations', 'Actuator Health Metrics', 'Embedded Tomcat Server']
          },
          {
            id: 'go_backend',
            icon: 'go',
            name: 'Go Backend Development',
            badges: ['Compiled', 'High Concurrency', 'Microservices', 'Fast'],
            description: 'Constructing lightweight, performant HTTP microservices using Go’s built-in net/http package and idiomatic concurrent patterns.',
            keyConcepts: ['net/http Standard Library', 'Routing with Chi or Gin', 'JSON Struct Tags', 'Context Propagation & Timeouts', 'Database Drivers (pgx/sqlx)']
          },
          {
            id: 'php_backend',
            icon: 'php',
            name: 'PHP Backend Development',
            badges: ['APIs', 'Routing', 'MVC', 'Composer'],
            description: 'Developing REST endpoints and server-side data models using modern PHP patterns, PDO interfaces, and framework components.',
            keyConcepts: ['MVC Architectural Pattern', 'Composer Autoloading', 'PDO Parameterized Queries', 'JSON API Responses', 'Environment Configuration']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 04 — DATABASES & DATA STORAGE
  // =========================================================================
  {
    id: 'databases',
    number: '04',
    name: 'DATABASES',
    subtitle: 'Relational, document, caching, and key-value persistence architectures.',
    categoryIcon: 'databases',
    categories: [
      {
        id: 'core_skills',
        title: 'Core Skills',
        tier: 1,
        technologies: [
          {
            id: 'mongodb',
            icon: 'mongodb',
            name: 'MongoDB',
            badges: ['NoSQL', 'Document Database', 'JSON/BSON', 'Flexible'],
            description: 'Leading document-oriented NoSQL database that stores data in flexible, JSON-like BSON documents with powerful query capabilities.',
            keyConcepts: ['BSON Document Model', 'Collections & Databases', 'Aggregation Pipeline Stages ($match, $group)', 'Index Types (Compound, TTL, Text)', 'Replica Set Clustering']
          },
          {
            id: 'mongoose',
            icon: 'mongoose',
            name: 'Mongoose',
            badges: ['ODM', 'Schema Definition', 'Type Safety', 'Modeling'],
            description: 'Node.js ODM providing strict modeling, automated type casting, built-in validation, and query building for MongoDB.',
            keyConcepts: ['Schema Constraints & Types', 'Model Instantiation', 'Query Population (.populate())', 'Virtual Getters & Setters', 'Pre/Post Execution Middleware']
          },
          {
            id: 'mysql',
            icon: 'mysql',
            name: 'MySQL',
            badges: ['Relational', 'RDBMS', 'ACID', 'Structured'],
            description: 'Established open-source relational database management system using structured query language and InnoDB ACID engine.',
            keyConcepts: ['InnoDB Storage Engine', 'ACID Transaction Guarantees', 'Foreign Key Constraints', 'Primary & Unique Keys', 'EXPLAIN Query Optimization']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'postgresql',
            icon: 'postgresql',
            name: 'PostgreSQL',
            badges: ['RDBMS', 'Extensible', 'JSONB', 'Advanced SQL'],
            description: 'Advanced, enterprise-grade open-source object-relational database system known for reliability, data integrity, and JSONB support.',
            keyConcepts: ['JSONB Document Storage & Indexing', 'Full-Text Search (tsvector)', 'Window Functions & CTEs', 'Row-Level Security (RLS)', 'Partial & GiST Indexes']
          },
          {
            id: 'sqlite',
            icon: 'sqlite',
            name: 'SQLite',
            badges: ['Serverless', 'Embedded', 'Zero-Config', 'Lightweight'],
            description: 'Self-contained, serverless, zero-configuration transactional SQL database engine stored entirely in a single disk file.',
            keyConcepts: ['Single-File Database Architecture', 'Serverless Embedded Engine', 'WAL (Write-Ahead Logging) Mode', 'In-Memory Testing (:memory:)', 'ACID Transactions']
          },
          {
            id: 'db_indexing',
            icon: 'db_indexing',
            name: 'Database Indexing',
            badges: ['Performance', 'B-Trees', 'Query Optimization', 'Lookups'],
            description: 'Designing and optimizing database index structures to accelerate lookup times and prevent costly full table/collection scans.',
            keyConcepts: ['B-Tree Index Data Structure', 'Single-Field vs Compound Indexes', 'Covering Indexes', 'Query Execution Plans (EXPLAIN ANALYZE)', 'Write Overhead Tradeoffs']
          },
          {
            id: 'db_modeling',
            icon: 'db_modeling',
            name: 'Database Modeling',
            badges: ['Schema Design', 'Normalization', 'ERD', 'Integrity'],
            description: 'Architecting relational and document data schemas, defining entity relationships, and choosing between normalization and denormalization.',
            keyConcepts: ['1st, 2nd, and 3rd Normal Forms (3NF)', 'Entity Relationship Diagrams (ERD)', 'One-to-One, One-to-Many, Many-to-Many', 'Referential Integrity Cascades', 'Denormalization Strategies']
          },
          {
            id: 'db_migrations',
            icon: 'db_migrations',
            name: 'Database Migrations',
            badges: ['Versioning', 'Evolution', 'Rollbacks', 'CI/CD'],
            description: 'Managing programmatic, version-controlled schema transformations and seed data changes reliably across deployment environments.',
            keyConcepts: ['Version-Controlled Migration Scripts', 'Up / Down Rollback Functions', 'Zero-Downtime Schema Changes', 'Data Seeding Scripts', 'Continuous Deployment Integration']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'redis',
            icon: 'redis',
            name: 'Redis',
            badges: ['In-Memory', 'Cache', 'Key-Value', 'Pub/Sub'],
            description: 'In-memory data structure store used as a high-speed database, cache, session coordinator, and message broker.',
            keyConcepts: ['In-Memory Key-Value Storage', 'Data Structures (Strings, Hashes, Sets)', 'TTL Expiration & Eviction Policies', 'Pub/Sub Messaging Channel', 'Atomic Operations']
          },
          {
            id: 'dynamodb',
            icon: 'dynamodb',
            name: 'Amazon DynamoDB',
            badges: ['Cloud NoSQL', 'Key-Value', 'Serverless', 'AWS'],
            description: 'Fully managed, serverless, key-value NoSQL database designed by AWS for single-digit millisecond performance at any scale.',
            keyConcepts: ['Partition Keys & Sort Keys', 'Global Secondary Indexes (GSI)', 'Single-Table Design Pattern', 'On-Demand Capacity Mode', 'DynamoDB Streams']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 05 — CLOUD & DEVOPS
  // =========================================================================
  {
    id: 'cloud',
    number: '05',
    name: 'CLOUD & DEVOPS',
    subtitle: 'Cloud hosting, containerization, deployment pipelines, and infrastructure automation.',
    categoryIcon: 'cloud',
    categories: [
      {
        id: 'core_skills',
        title: 'Core Skills',
        tier: 1,
        technologies: [
          {
            id: 'aws',
            icon: 'aws',
            name: 'AWS',
            badges: ['Cloud Platform', 'Infrastructure', 'Hosting', 'Scalability'],
            description: 'Amazon Web Services cloud computing ecosystem used for provisioning compute instances, object storage, and secure server networking.',
            keyConcepts: ['Amazon S3 Object Storage', 'EC2 Virtual Compute', 'IAM Roles & Policies', 'CloudFront Content Delivery (CDN)', 'Route 53 DNS Configuration']
          },
          {
            id: 'linux',
            icon: 'linux',
            name: 'Linux',
            badges: ['Operating System', 'Servers', 'CLI', 'Administration'],
            description: 'Unix-like operating system powering production servers, container hosts, and developer workstations with secure permission models.',
            keyConcepts: ['Filesystem Hierarchy (FHS)', 'File Permissions (chmod, chown)', 'Process Monitoring (top, htop, systemctl)', 'SSH Keys & Remote Access', 'Package Management (apt, yum)']
          },
          {
            id: 'git_cloud',
            icon: 'git',
            name: 'Git',
            badges: ['Version Control', 'Distributed', 'Collaboration', 'History'],
            description: 'Distributed version control system for tracking source code revisions, managing feature branches, and facilitating collaborative code reviews.',
            keyConcepts: ['Branching Workflows (feature/bugfix)', 'Staging & Atomic Commits', 'Merge vs Rebase Strategies', 'Resolving Merge Conflicts', 'Tagging Release Milestones']
          },
          {
            id: 'app_deployment',
            icon: 'app_deployment',
            name: 'Application Deployment',
            badges: ['Production', 'Zero-Downtime', 'SSL/TLS', 'Hosting'],
            description: 'Orchestrating end-to-end production deployments, environment configuration, SSL/TLS termination, and live process supervisors.',
            keyConcepts: ['Production Environment Variables (.env)', 'Process Managers (PM2, systemd)', 'SSL/TLS Certificates (Let’s Encrypt)', 'Zero-Downtime Rolling Releases', 'Health Check Endpoints']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'docker',
            icon: 'docker',
            name: 'Docker',
            badges: ['Containers', 'Isolation', 'Reproducibility', 'DevOps'],
            description: 'Container platform for packaging applications and their complete dependencies into portable, isolated containers running anywhere.',
            keyConcepts: ['Multi-Stage Dockerfiles', 'Docker Compose Orchestration', 'Image Layers & Caching', 'Port Forwarding & Volumes', 'Container Networking']
          },
          {
            id: 'cicd',
            icon: 'cicd',
            name: 'CI/CD',
            badges: ['Automation', 'Pipelines', 'Testing', 'Continuous Delivery'],
            description: 'Continuous Integration and Continuous Deployment pipelines that automate code linting, test suites, container builds, and deployment.',
            keyConcepts: ['Automated Build Pipelines', 'Unit & Integration Test Gates', 'Staging vs Production Environments', 'Artifact Versioning & Storage', 'Rollback Triggers']
          },
          {
            id: 'githubactions',
            icon: 'githubactions',
            name: 'GitHub Actions',
            badges: ['Automation', 'Workflows', 'CI/CD', 'GitHub'],
            description: 'Workflow automation built directly into GitHub for triggering automated tasks, test suites, and deployments on repository events.',
            keyConcepts: ['Workflow YAML Syntax', 'Event Triggers (push, pull_request)', 'Secrets Management', 'Matrix Builds across Node/OS', 'Community Action Marketplace']
          },
          {
            id: 'nginx',
            icon: 'nginx',
            name: 'Nginx',
            badges: ['Web Server', 'Reverse Proxy', 'Load Balancer', 'SSL'],
            description: 'High-performance HTTP server, reverse proxy, and load balancer handling static asset caching, request routing, and SSL termination.',
            keyConcepts: ['Reverse Proxy to Node/Python Servers', 'SSL/TLS Termination', 'Gzip & Brotli Compression', 'Upstream Load Balancing', 'Static File Caching Directives']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'kubernetes',
            icon: 'kubernetes',
            name: 'Kubernetes',
            badges: ['Orchestration', 'Scaling', 'Cloud-Native', 'Containers'],
            description: 'Production-grade container orchestration system for automating application deployment, horizontal scaling, and container operations.',
            keyConcepts: ['Pods, Deployments & Services', 'Cluster Control Plane Architecture', 'ConfigMaps & Secrets', 'Ingress Controllers', 'Horizontal Pod Autoscaling (HPA)']
          },
          {
            id: 'terraform',
            icon: 'terraform',
            name: 'Terraform',
            badges: ['IaC', 'Infrastructure as Code', 'Declarative', 'Multi-Cloud'],
            description: 'Infrastructure as Code (IaC) tool by HashiCorp for safely and predictably creating, changing, and versioning cloud infrastructure.',
            keyConcepts: ['HCL (HashiCorp Configuration Language)', 'Terraform State Management', 'Providers & Modules', 'Plan & Apply Workflow', 'Idempotent Resource Management']
          },
          {
            id: 'gcp',
            icon: 'gcp',
            name: 'Google Cloud',
            badges: ['Cloud Platform', 'GCP', 'BigQuery', 'Compute'],
            description: 'Google’s suite of cloud computing services providing scalable compute, cloud run containers, cloud storage, and IAM security.',
            keyConcepts: ['Cloud Run Serverless Containers', 'Compute Engine (VMs)', 'Google Cloud Storage (GCS)', 'Cloud IAM Roles', 'BigQuery Analytics Basics']
          },
          {
            id: 'serverless',
            icon: 'serverless',
            name: 'Serverless Architecture',
            badges: ['FaaS', 'Event-Driven', 'Pay-per-use', 'Auto-scaling'],
            description: 'Cloud execution model where cloud providers automatically manage machine resources, executing stateless code in response to events.',
            keyConcepts: ['Function as a Service (FaaS)', 'Cold Starts & Concurrency', 'Event Triggers (HTTP, S3, Queues)', 'Stateless Function Design', 'Zero Server Management']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 06 — CORE COMPUTER SCIENCE
  // =========================================================================
  {
    id: 'core_cs',
    number: '06',
    name: 'CORE CS',
    subtitle: 'Foundational computing theory, algorithmics, architecture, and engineering principles.',
    categoryIcon: 'core_cs',
    categories: [
      {
        id: 'core_fundamentals',
        title: 'Core Fundamentals',
        tier: 1,
        technologies: [
          {
            id: 'dsa',
            icon: 'dsa',
            name: 'Data Structures',
            badges: ['CS Theory', 'Memory Layout', 'Abstract Types', 'Core'],
            description: 'Foundational data organization models providing efficient access, insertion, and manipulation tailored to computational problems.',
            keyConcepts: ['Arrays, Linked Lists & Dynamic Buffers', 'Stacks & Queues', 'Hash Tables & Hash Collision Resolution', 'Binary Trees & BSTs', 'Heaps & Priority Queues']
          },
          {
            id: 'algorithms',
            icon: 'algorithms',
            name: 'Algorithms',
            badges: ['Complexity', 'Big-O', 'Searching', 'Sorting'],
            description: 'Step-by-step computational procedures analyzed for time and space complexity using asymptotic Big-O notation.',
            keyConcepts: ['Asymptotic Analysis (Big-O, Big-Omega)', 'Sorting (Quicksort, Mergesort)', 'Binary Search', 'Graph Traversal (BFS & DFS)', 'Recursion & Dynamic Programming']
          },
          {
            id: 'oop',
            icon: 'oop',
            name: 'Object-Oriented Programming',
            badges: ['Paradigms', 'Design', 'Encapsulation', 'SOLID'],
            description: 'Software engineering paradigm centered on objects containing data fields and procedures, emphasizing modularity and code reuse.',
            keyConcepts: ['Encapsulation & Data Hiding', 'Abstraction & Interfaces', 'Inheritance Hierarchies', 'Polymorphism (Static vs Dynamic)', 'SOLID Engineering Principles']
          },
          {
            id: 'os',
            icon: 'os',
            name: 'Operating Systems',
            badges: ['Low-Level', 'Kernel', 'Scheduling', 'Hardware'],
            description: 'Core concepts governing hardware resource allocation, process scheduling, memory virtualization, and file systems.',
            keyConcepts: ['Process vs Thread Life Cycles', 'CPU Scheduling Algorithms', 'Virtual Memory & Page Tables', 'Inter-Process Communication (IPC)', 'Deadlocks & Race Conditions']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'networks',
            icon: 'networks',
            name: 'Computer Networks',
            badges: ['Protocols', 'TCP/IP', 'OSI Layers', 'Packets'],
            description: 'Principles governing distributed communication across computer networks, protocol stacks, routing, and data transmission.',
            keyConcepts: ['OSI 7-Layer & TCP/IP Stack', 'TCP Three-Way Handshake & Reliability', 'UDP Datagrams & Latency Tradeoffs', 'DNS Resolution Hierarchy', 'HTTP/1.1, HTTP/2 & WebSockets']
          },
          {
            id: 'db_fundamentals',
            icon: 'databases',
            name: 'Database Fundamentals',
            badges: ['Storage Engines', 'ACID', 'Transactions', 'Theory'],
            description: 'Theoretical foundations of database systems including transaction processing, consistency models, and storage representations.',
            keyConcepts: ['ACID Properties Explained', 'Transaction Isolation Levels', 'Write-Ahead Logging (WAL)', 'Locking & Concurrency Control', 'CAP Theorem Foundations']
          },
          {
            id: 'concurrency',
            icon: 'concurrency',
            name: 'Concurrency',
            badges: ['Parallelism', 'Threads', 'Synchronization', 'Safety'],
            description: 'Executing multiple execution sequences simultaneously while preventing race conditions, deadlocks, and corrupted states.',
            keyConcepts: ['Concurrency vs True Parallelism', 'Mutexes, Semaphores & Locks', 'Race Conditions & Critical Sections', 'Thread Pools & Workers', 'Atomic Memory Operations']
          },
          {
            id: 'memory_mgmt_cs',
            icon: 'memory_mgmt',
            name: 'Memory Management',
            badges: ['Virtual Memory', 'Stack & Heap', 'Paging', 'Allocation'],
            description: 'How systems structure, allocate, track, and reclaim memory across hardware RAM, the CPU cache, stack, and heap.',
            keyConcepts: ['Stack Frames vs Heap Allocations', 'Pointers & Pointer Arithmetic', 'Memory Leaks & Dangling References', 'Garbage Collection Algorithms', 'Virtual Memory Paging']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Advanced Concepts',
        tier: 3,
        technologies: [
          {
            id: 'system_design',
            icon: 'system_design',
            name: 'System Design',
            badges: ['Architecture', 'Scalability', 'Load Balancing', 'High Availability'],
            description: 'Designing large-scale software systems considering throughput, low latency, caching tiers, database sharding, and resilience.',
            keyConcepts: ['Horizontal vs Vertical Scaling', 'Reverse Proxies & Load Balancers', 'Distributed Caching Layers (Redis)', 'Database Sharding & Replication', 'Rate Limiting & Message Queues']
          },
          {
            id: 'clean_arch',
            icon: 'clean_arch',
            name: 'Clean Architecture',
            badges: ['Architecture', 'Separation of Concerns', 'Domain-Driven', 'Testable'],
            description: 'Software design pattern where domain logic remains independent of frameworks, databases, and user interfaces via inversion of control.',
            keyConcepts: ['Dependency Rule (Inside-Out)', 'Entities & Domain Models', 'Use Cases / Application Services', 'Interface Adapters & Controllers', 'Testability without External Services']
          },
          {
            id: 'distributed_sys',
            icon: 'distributed_sys',
            name: 'Distributed Systems',
            badges: ['Consensus', 'Fault Tolerance', 'Network Partitions', 'Scale'],
            description: 'Computing systems whose components are located on networked computers that coordinate actions by passing messages.',
            keyConcepts: ['CAP Theorem (Consistency, Availability, Partitioning)', 'Eventual Consistency vs Strong Consistency', 'Consensus Algorithms (Raft, Paxos)', 'Idempotency in Distributed Calls', 'Vector Clocks & Logical Timestamps']
          },
          {
            id: 'design_patterns',
            icon: 'design_patterns',
            name: 'Design Patterns',
            badges: ['Best Practices', 'GoF', 'Creational', 'Structural'],
            description: 'Time-tested reusable architectural solutions to common recurring problems in object-oriented software engineering.',
            keyConcepts: ['Singleton & Factory Method', 'Observer & Event-Driven Patterns', 'Strategy Pattern', 'Adapter & Facade Patterns', 'Decorator Pattern']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 07 — DEVELOPER TOOLS & TESTING
  // =========================================================================
  {
    id: 'tools',
    number: '07',
    name: 'TOOLS & TESTING',
    subtitle: 'Engineering workflows, IDEs, version control, API testing, and test automation.',
    categoryIcon: 'tools',
    categories: [
      {
        id: 'everyday_tools',
        title: 'Everyday Tools',
        tier: 1,
        technologies: [
          {
            id: 'git',
            icon: 'git',
            name: 'Git',
            badges: ['Version Control', 'CLI', 'Diffs', 'Branches'],
            description: 'Daily version control command-line interface for staging, committing, branching, stashing, and inspecting repository histories.',
            keyConcepts: ['Git Status, Diff & Log', 'Interactive Staging (git add -p)', 'Stashing Uncommitted Changes', 'Cherry-Picking Commits', 'Git Reflog Disaster Recovery']
          },
          {
            id: 'github',
            icon: 'github',
            name: 'GitHub',
            badges: ['Collaboration', 'Code Review', 'CI/CD', 'Open Source'],
            description: 'Cloud platform hosting Git repositories, providing pull requests, code reviews, issue tracking, and automation pipelines.',
            keyConcepts: ['Pull Requests & Code Reviews', 'Issue Tracking & Milestones', 'Branch Protection Rules', 'Fork & Upstream Workflow', 'GitHub Pages & Releases']
          },
          {
            id: 'vscode',
            icon: 'vscode',
            name: 'Visual Studio Code',
            badges: ['Editor', 'Extensions', 'Debugging', 'Productivity'],
            description: 'Extensible code editor featuring integrated debugging, terminal sessions, language server protocols, and Git management.',
            keyConcepts: ['Integrated Terminal & Split Panes', 'Interactive Debugger & Breakpoints', 'Language Server Protocol (LSP)', 'Keybindings & Multi-cursor Editing', 'Workspace Settings & Extensions']
          },
          {
            id: 'figma',
            icon: 'figma',
            name: 'Figma',
            badges: ['UI/UX', 'Design Systems', 'Prototyping', 'Vector'],
            description: 'Collaborative vector design and prototyping tool used for translating wireframes and design systems into code components.',
            keyConcepts: ['Auto-Layout Frames', 'Design Component Variants', 'Color & Typography Tokens', 'Interactive Prototyping', 'CSS Property Inspection for Developers']
          },
          {
            id: 'npm',
            icon: 'npm',
            name: 'npm',
            badges: ['Package Manager', 'Registry', 'Scripts', 'Node.js'],
            description: 'Default package manager and repository registry for the JavaScript runtime environment, managing dependencies and lifecycle scripts.',
            keyConcepts: ['package.json & package-lock.json', 'npm Scripts Execution (npm run dev)', 'Semantic Versioning (SemVer)', 'Dependency vs DevDependency Scopes', 'npm audit Security Checks']
          },
          {
            id: 'postman',
            icon: 'postman',
            name: 'Postman',
            badges: ['API Testing', 'HTTP Client', 'Collections', 'Environments'],
            description: 'API development and testing platform for constructing HTTP requests, automating test scripts, and inspecting payload responses.',
            keyConcepts: ['Request Building (Headers, Body, Auth)', 'Environment & Global Variables', 'Collection Runner & Automated Tests', 'Mock Servers', 'API Documentation Generation']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'jest',
            icon: 'jest',
            name: 'Jest',
            badges: ['Testing', 'Unit Tests', 'Assertions', 'Mocks'],
            description: 'Comprehensive JavaScript testing framework with built-in test runner, assertion library, and mock functions.',
            keyConcepts: ['Test Suites (describe, it, test)', 'Expect Assertions & Matchers', 'Function & Module Mocking (jest.fn)', 'Snapshot Testing', 'Code Coverage Reporting']
          },
          {
            id: 'pytest',
            icon: 'pytest',
            name: 'PyTest',
            badges: ['Testing', 'Python', 'Fixtures', 'Automation'],
            description: 'Mature Python testing framework making it easy to write small, readable tests, scaling to complex functional testing.',
            keyConcepts: ['Test Discovery Conventions', 'Plain assert Statements', 'Test Fixtures (@pytest.fixture)', 'Parametrized Testing (@pytest.mark.parametrize)', 'Coverage Plugins']
          },
          {
            id: 'pnpm',
            icon: 'pnpm',
            name: 'pnpm',
            badges: ['Package Manager', 'Fast', 'Disk Efficient', 'Hard Links'],
            description: 'Fast, disk space efficient package manager using a content-addressable storage mechanism and hard links to prevent duplicate modules.',
            keyConcepts: ['Content-Addressable Global Store', 'Hard Links & Symlinks Architecture', 'Monorepo Workspace Support (pnpm-workspace.yaml)', 'Strict Dependency Isolation', 'Fast Installation Speeds']
          },
          {
            id: 'devtools',
            icon: 'devtools',
            name: 'Browser Developer Tools',
            badges: ['Debugging', 'Profiling', 'DOM Inspector', 'Network Tab'],
            description: 'In-browser diagnostic suite for inspecting DOM trees, modifying CSS live, profiling JavaScript execution, and analyzing network requests.',
            keyConcepts: ['Elements & Box Model Inspection', 'Console API & Breakpoint Debugging', 'Network Tab & Waterfall Timings', 'Lighthouse Performance Audits', 'Memory Heap Snapshots']
          },
          {
            id: 'api_debugging',
            icon: 'api_debugging',
            name: 'API Debugging',
            badges: ['Diagnostics', 'HTTP Codes', 'Payloads', 'Tracing'],
            description: 'Diagnosing API request and response failures, verifying HTTP status codes, tracing request latency, and validating payload structures.',
            keyConcepts: ['HTTP Status Diagnostics (4xx vs 5xx)', 'Inspecting Request Headers & CORS Preflight', 'cURL Command Line Reproductions', 'Payload Validation Checks', 'Network Latency Analysis']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'terminal',
            icon: 'terminal',
            name: 'Linux Terminal',
            badges: ['CLI', 'Text Processing', 'Utilities', 'Navigation'],
            description: 'Standard Linux command-line environment using shell utilities for text parsing, process inspection, and server operations.',
            keyConcepts: ['Filesystem Navigation (ls, cd, pwd)', 'Text Processing (grep, sed, awk)', 'Permissions & Ownership (chmod, chown)', 'Archiving & Compression (tar, gzip)', 'Job Control (fg, bg, kill)']
          },
          {
            id: 'network_debug',
            icon: 'network_debug',
            name: 'Network Debugging Tools',
            badges: ['Networking', 'Diagnostics', 'Packets', 'Connectivity'],
            description: 'Using standard network utilities to inspect connectivity, query DNS records, test open ports, and trace network routes.',
            keyConcepts: ['Ping & ICMP Diagnostics', 'Traceroute Path Analysis', 'DNS Lookup Tools (dig, nslookup)', 'Port Scanning & Testing (nc, telnet)', 'HTTP Header Inspection (curl -I)']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 08 — SYSTEMS & HARDWARE
  // =========================================================================
  {
    id: 'hardware',
    number: '08',
    name: 'SYSTEMS & HARDWARE',
    subtitle: 'Computer architecture, embedded microcontrollers, memory hierarchy, and low-level engineering.',
    categoryIcon: 'hardware',
    categories: [
      {
        id: 'core_fundamentals',
        title: 'Core Fundamentals',
        tier: 1,
        technologies: [
          {
            id: 'systems_arch',
            icon: 'systems_arch',
            name: 'Computer Architecture',
            badges: ['Hardware', 'Von Neumann', 'Buses', 'Digital Logic'],
            description: 'Structural design of computer hardware components, data buses, memory interfaces, and the fundamental Von Neumann architecture.',
            keyConcepts: ['Von Neumann Architecture', 'System Buses (Address, Data, Control)', 'Memory Hierarchy (Registers to Disk)', 'I/O Interfacing & DMA', 'Digital Logic & Gates']
          },
          {
            id: 'cpu_arch',
            icon: 'cpu_arch',
            name: 'CPU Architecture',
            badges: ['Processors', 'Registers', 'Instruction Pipeline', 'ALU'],
            description: 'Internal organization of central processing units, instruction execution cycles, arithmetic logic units, and pipeline optimization.',
            keyConcepts: ['Instruction Fetch-Decode-Execute Cycle', 'Registers & Program Counter (PC)', 'Instruction Pipelining & Hazard Stalls', 'ALU & Control Unit', 'RISC vs CISC Philosophies']
          },
          {
            id: 'memory_mgmt',
            icon: 'memory_mgmt',
            name: 'Memory Management',
            badges: ['RAM', 'Caches', 'Hierarchy', 'Hardware'],
            description: 'Physical and virtual memory hierarchy organization, cache coherency, address translation, and hardware memory access speeds.',
            keyConcepts: ['L1, L2, and L3 Cache Hierarchies', 'Cache Lines & Locality of Reference', 'Memory Management Unit (MMU)', 'RAM Timing & Latency', 'Direct Memory Access (DMA)']
          }
        ]
      },
      {
        id: 'working_knowledge',
        title: 'Working Knowledge',
        tier: 2,
        technologies: [
          {
            id: 'embedded',
            icon: 'embedded',
            name: 'Embedded Systems',
            badges: ['Microcontrollers', 'Peripherals', 'Hardware', 'Sensors'],
            description: 'Dedicated computing systems engineered to perform specific dedicated tasks within hardware enclosures using low-power chips.',
            keyConcepts: ['Microcontrollers (MCU) vs Microprocessors (MPU)', 'GPIO (General Purpose Input/Output)', 'Hardware Interrupts (ISR)', 'Communication Protocols (I2C, SPI, UART)', 'ADC & DAC Conversion']
          },
          {
            id: 'arduino',
            icon: 'arduino',
            name: 'Arduino',
            badges: ['Prototyping', 'AVR / ARM', 'Hardware', 'C++'],
            description: 'Open-source electronics prototyping platform based on flexible, easy-to-use microcontrollers and software libraries.',
            keyConcepts: ['setup() and loop() Lifecycle', 'digitalRead / digitalWrite', 'analogRead (10-bit ADC)', 'Serial Communication Monitor', 'Sensor & Actuator Interfacing']
          },
          {
            id: 'raspberrypi',
            icon: 'raspberrypi',
            name: 'Raspberry Pi',
            badges: ['SBC', 'Single-Board Computer', 'Linux', 'IoT'],
            description: 'Credit-card sized single-board computer running Linux, used for hardware interfacing, edge computing, and local network servers.',
            keyConcepts: ['Single Board Computer (SBC) Architecture', 'Raspberry Pi OS (Debian-based)', '40-Pin GPIO Header Interfacing', 'Headless SSH Configuration', 'Camera & Display Interfaces (CSI/DSI)']
          },
          {
            id: 'assembly',
            icon: 'assembly',
            name: 'Assembly Language',
            badges: ['Bare-Metal', 'Low-Level', 'x86 / ARM', 'Opcodes'],
            description: 'Human-readable symbolic representation of machine code specific to a particular computer architecture such as x86-64 or ARM.',
            keyConcepts: ['General Purpose Registers (RAX, RBX, RCX)', 'Data Movement (MOV, PUSH, POP)', 'Arithmetic Operations (ADD, SUB, MUL)', 'Conditional Jumps (CMP, JE, JNE)', 'Stack Frame Calling Conventions']
          }
        ]
      },
      {
        id: 'exploring',
        title: 'Exploring / Basic Knowledge',
        tier: 3,
        technologies: [
          {
            id: 'embedded_cpp',
            icon: 'cpp',
            name: 'Embedded C++',
            badges: ['Systems', 'Zero-Cost', 'Microcontrollers', 'Hardware'],
            description: 'Writing memory-constrained embedded software using clean C++ abstractions, templates, and avoiding dynamic heap allocations.',
            keyConcepts: ['Zero-Cost Abstractions', 'Constexpr & Compile-Time Evaluation', 'Avoiding Dynamic Heap Memory (no new/delete)', 'Hardware Register Mapping Classes', 'Static Polymorphism (CRTP)']
          },
          {
            id: 'embedded_rust',
            icon: 'rust',
            name: 'Embedded Rust',
            badges: ['Bare-Metal', 'no_std', 'Memory Safety', 'Embedded'],
            description: 'Developing bare-metal firmware for microcontrollers using Rust’s compile-time memory safety guarantees without the standard library.',
            keyConcepts: ['#![no_std] Environment', 'Peripheral Access Crates (PAC)', 'Hardware Abstraction Layer (HAL)', 'Zero-Cost Pin Typestates', 'Memory-Safe Concurrency in Firmware']
          },
          {
            id: 'micropython',
            icon: 'micropython',
            name: 'MicroPython',
            badges: ['Firmware', 'IoT', 'Microcontrollers', 'Python'],
            description: 'Lean and efficient implementation of the Python 3 language optimized to run directly on microcontrollers like ESP32 and RP2040.',
            keyConcepts: ['machine Module (Pin, PWM, ADC)', 'I2C and SPI Hardware Drivers', 'REPL Interactive Console over Serial', 'File System on Flash Memory', 'Rapid Prototyping Workflows']
          },
          {
            id: 'rtos',
            icon: 'rtos',
            name: 'Real-Time Operating Systems (RTOS)',
            badges: ['Real-Time', 'FreeRTOS', 'Deterministic', 'Scheduling'],
            description: 'Operating systems designed to serve real-time applications that process data as it comes in, typically without buffer delays.',
            keyConcepts: ['Deterministic Preemptive Scheduling', 'Task Prioritization', 'Inter-Task Queues & Semaphores', 'Software Timers & Watchdogs', 'Tick Interrupts & Context Switching']
          },
          {
            id: 'kernel_dev',
            icon: 'kernel_dev',
            name: 'Kernel Development',
            badges: ['Kernel', 'Drivers', 'Linux', 'Low-Level'],
            description: 'Understanding operating system kernel architecture, character device drivers, kernel space vs user space, and system calls.',
            keyConcepts: ['Kernel Space vs User Space Separation', 'Loadable Kernel Modules (LKM)', 'Character Device Drivers', 'Direct Hardware Memory Mapping (mmap)', 'printk Logging & dmesg Output']
          }
        ]
      }
    ]
  }
];

// Flatten all technologies into mod.technologies and populate ALL_TECHNOLOGIES_MAP
export const ALL_TECHNOLOGIES_MAP = {};

UNIVERSE_MODULES.forEach((mod) => {
  mod.technologies = [];
  mod.categories.forEach((cat) => {
    cat.technologies.forEach((tech) => {
      tech.categoryTitle = cat.title;
      tech.tier = cat.tier;
      tech.moduleId = mod.id;
      tech.moduleName = mod.name;
      mod.technologies.push(tech);
      ALL_TECHNOLOGIES_MAP[tech.id] = tech;
    });
  });
});
