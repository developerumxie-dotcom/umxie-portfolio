/**
 * Exact data specifications for the Coding Universe Stack.
 * 8 Modules with authentic, recognizable tech logos and deep concept details.
 * Matches the floating glass card layout with 4 featured + 12 secondary cards per module.
 */

export const UNIVERSE_MODULES = [
  {
    id: 'languages',
    number: '01',
    name: 'LANGUAGES',
    subtitle: 'Programming languages I know or have studied.',
    categoryIcon: 'languages',
    technologies: [
      {
        id: 'javascript',
        name: 'JavaScript',
        category: 'Language',
        isFeatured: true,
        badges: ['Language', 'Frontend', 'Backend', 'Web Dev'],
        description: 'The language of the modern web. Dynamic, flexible and powerful for building scalable full-stack applications.',
        keyConcepts: ['Variables', 'Data Types', 'Functions', 'Objects', 'Arrays', 'Closures', 'Promises', 'Async / Await', 'DOM', 'ES6+'],
        relatedTechs: ['typescript', 'react', 'nodejs', 'express'],
        codeExample: `const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greet("UMXIE"));`
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Language',
        isFeatured: true,
        badges: ['Language', 'Backend', 'Data Science', 'Automation'],
        description: 'High-level, readable language ideal for backend servers, scripting, automation and data engineering.',
        keyConcepts: ['Dynamic Typing', 'List Comprehensions', 'Decorators', 'Generators', 'OOP', 'Data Pipelines', 'AsyncIO', 'Virtualenvs'],
        relatedTechs: ['docker', 'postgresql', 'aws', 'dsa'],
        codeExample: `def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("UMXIE"))`
      },
      {
        id: 'java',
        name: 'Java',
        category: 'Language',
        isFeatured: true,
        badges: ['Language', 'Backend', 'Enterprise', 'Android'],
        description: 'Object-oriented language engineered for high portability, enterprise systems, memory management, and scale.',
        keyConcepts: ['JVM Architecture', 'Polymorphism', 'Encapsulation', 'Streams API', 'Multithreading', 'Garbage Collection', 'Spring Boot', 'Design Patterns'],
        relatedTechs: ['oop', 'dsa', 'docker', 'postgresql'],
        codeExample: `public class Universe {
    public static void main(String[] args) {
        String name = "UMXIE";
        System.out.println("Hello, " + name + "!");
    }
}`
      },
      {
        id: 'cpp',
        name: 'C / C++',
        category: 'Language',
        isFeatured: true,
        badges: ['Language', 'Systems', 'Performance', 'Embedded'],
        description: 'High-performance systems programming languages giving direct memory control and bare-metal hardware speed.',
        keyConcepts: ['Manual Memory', 'Pointers & References', 'RAII', 'Templates', 'Cache Locality', 'STL', 'Inline Assembly', 'Zero-Cost Abstractions'],
        relatedTechs: ['systems_arch', 'memory_mgmt', 'os', 'dsa'],
        codeExample: `#include <iostream>
#include <string>

int main() {
    std::string name = "UMXIE";
    std::cout << "Hello, " << name << "!\\n";
    return 0;
}`
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Typing', 'Frontend', 'Enterprise'],
        description: 'Strongly typed superset of JavaScript that compiles to plain JavaScript, enabling robust large-scale web systems.',
        keyConcepts: ['Interfaces', 'Generics', 'Union Types', 'Utility Types', 'Type Inference', 'Enums', 'Tuples', 'Strict Null Checks'],
        relatedTechs: ['javascript', 'react', 'nodejs', 'angular'],
        codeExample: `interface Developer {
  name: string;
  role: string;
  skills: string[];
}

const dev: Developer = {
  name: "UMXIE",
  role: "Software Engineer",
  skills: ["React", "TypeScript", "Node.js"]
};`
      },
      {
        id: 'go',
        name: 'Go',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Concurrency', 'Cloud Native', 'Microservices'],
        description: 'Open-source compiled language designed by Google for building simple, reliable, and highly concurrent software.',
        keyConcepts: ['Goroutines', 'Channels', 'Interfaces', 'Structs', 'Memory Model', 'Garbage Collector', 'Go Modules', 'Standard Library'],
        relatedTechs: ['docker', 'kubernetes', 'rest', 'linux'],
        codeExample: `package main

import "fmt"

func main() {
    name := "UMXIE"
    fmt.Printf("Hello, %s!\\n", name)
}`
      },
      {
        id: 'rust',
        name: 'Rust',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Memory Safe', 'Performance', 'Concurrency'],
        description: 'Systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety without a GC.',
        keyConcepts: ['Borrow Checker', 'Ownership', 'Lifetimes', 'Traits', 'Pattern Matching', 'Zero-cost Abstractions', 'Cargo', 'Fearless Concurrency'],
        relatedTechs: ['cpp', 'systems_arch', 'linux', 'embedded'],
        codeExample: `fn main() {
    let name = "UMXIE";
    println!("Hello, {}!", name);
}`
      },
      {
        id: 'kotlin',
        name: 'Kotlin',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Android', 'JVM', 'Modern'],
        description: 'Modern, concise language fully interoperable with Java, prioritizing expressiveness and null-safety.',
        keyConcepts: ['Null Safety', 'Coroutines', 'Extension Functions', 'Data Classes', 'Smart Casts', 'Higher-Order Functions', 'Interoperability'],
        relatedTechs: ['java', 'android', 'oop'],
        codeExample: `fun main() {
    val name = "UMXIE"
    println("Hello, $name!")
}`
      },
      {
        id: 'php',
        name: 'PHP',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Web Dev', 'Backend', 'Server-Side'],
        description: 'Widely-used open source general-purpose scripting language especially suited for rapid web development.',
        keyConcepts: ['Server-Side Scripting', 'PDO', 'Composer', 'Namespaces', 'Traits', 'Superglobals', 'Sessions & Cookies', 'MVC Frameworks'],
        relatedTechs: ['mysql', 'html', 'css', 'javascript'],
        codeExample: `<?php
$name = "UMXIE";
echo "Hello, " . $name . "!";
?>`
      },
      {
        id: 'csharp',
        name: 'C#',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', '.NET', 'Enterprise', 'Object-Oriented'],
        description: 'Modern, object-oriented language developed by Microsoft as part of the .NET ecosystem for web, desktop, and cloud.',
        keyConcepts: ['LINQ', 'Async/Await', 'Generics', 'Garbage Collection', 'Attributes', 'Delegates & Events', 'Entity Framework', 'ASP.NET Core'],
        relatedTechs: ['java', 'oop', 'sql', 'dsa'],
        codeExample: `using System;

class Program {
    static void Main() {
        string name = "UMXIE";
        Console.WriteLine($"Hello, {name}!");
    }
}`
      },
      {
        id: 'swift',
        name: 'Swift',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Apple', 'iOS', 'Performance'],
        description: 'Powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS with clean syntax and safety features.',
        keyConcepts: ['Optionation', 'Protocol-Oriented', 'Automatic Reference Counting (ARC)', 'Closures', 'Generics', 'SwiftUI', 'Value Semantics'],
        relatedTechs: ['kotlin', 'oop', 'git'],
        codeExample: `import Foundation

let name = "UMXIE"
print("Hello, \(name)!")`
      },
      {
        id: 'dart',
        name: 'Dart',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Flutter', 'Cross-Platform', 'Client'],
        description: 'Client-optimized language for fast apps on any platform, powering high-performance Flutter mobile and web apps.',
        keyConcepts: ['Sound Null Safety', 'Async/Await & Streams', 'Isolates', 'Mixins', 'JIT & AOT Compilation', 'Widget Tree', 'Generics'],
        relatedTechs: ['flutter', 'javascript', 'typescript'],
        codeExample: `void main() {
  String name = 'UMXIE';
  print('Hello, $name!');
}`
      },
      {
        id: 'ruby',
        name: 'Ruby',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Web Dev', 'Dynamic', 'Developer Happiness'],
        description: 'Dynamic, open source programming language with a focus on simplicity, productivity, and elegant syntax.',
        keyConcepts: ['Everything is an Object', 'Blocks & Procs', 'Metaprogramming', 'Mixins', 'Gems & Bundler', 'ActiveRecord', 'Rails Convention over Config'],
        relatedTechs: ['postgresql', 'rest', 'git'],
        codeExample: `def greet(name)
  "Hello, #{name}!"
end

puts greet("UMXIE")`
      },
      {
        id: 'sql',
        name: 'SQL',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'Database', 'Relational', 'Querying'],
        description: 'Standard domain-specific language for storing, manipulating and retrieving structured data in relational database systems.',
        keyConcepts: ['SELECT Queries', 'JOIN Operations', 'INDEX Optimization', 'ACID Transactions', 'Aggregations (GROUP BY)', 'Subqueries', 'Constraints & Foreign Keys'],
        relatedTechs: ['postgresql', 'mysql', 'sqlite', 'redis'],
        codeExample: `SELECT id, name, role, created_at 
FROM developers 
WHERE status = 'ACTIVE' 
ORDER BY created_at DESC;`
      },
      {
        id: 'bash',
        name: 'Bash',
        category: 'Language',
        isFeatured: false,
        badges: ['Language', 'CLI', 'Automation', 'Linux'],
        description: 'Unix shell and command language that provides powerful scripting automation and system administration pipelines.',
        keyConcepts: ['Pipes & Redirection', 'Shell Variables', 'Exit Codes', 'Conditionals & Loops', 'Grep / Sed / Awk', 'Cron Scheduling', 'Environment Variables'],
        relatedTechs: ['linux', 'git', 'docker', 'cicd'],
        codeExample: `#!/usr/bin/env bash
NAME="UMXIE"
echo "Initializing ecosystem for: $NAME"
uptime`
      }
    ]
  },
  {
    id: 'frontend',
    number: '02',
    name: 'FRONTEND',
    subtitle: 'Building beautiful and interactive user interfaces for the web and beyond.',
    categoryIcon: 'frontend',
    technologies: [
      {
        id: 'react',
        name: 'React',
        category: 'UI Library',
        isFeatured: true,
        badges: ['Frontend', 'UI/UX', 'Reactive', 'Components'],
        description: 'Declarative component-based UI library used to architect resilient, responsive, and high-performance digital interfaces.',
        keyConcepts: ['Components', 'State', 'Props', 'Hooks', 'Routing', 'Responsive Design', 'API Integration', 'Virtual DOM'],
        relatedTechs: ['javascript', 'typescript', 'nextjs', 'tailwind'],
        codeExample: `import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}`
      },
      {
        id: 'html',
        name: 'HTML',
        category: 'Markup',
        isFeatured: true,
        badges: ['Structure', 'Semantic', 'Web Core', 'Accessibility'],
        description: 'The foundational markup standard for creating structured, accessible, and semantic web layouts.',
        keyConcepts: ['Semantic Tags', 'DOM Hierarchy', 'SEO Metadata', 'ARIA Attributes', 'Forms & Validation', 'Canvas', 'SVG Elements'],
        relatedTechs: ['css', 'javascript', 'react'],
        codeExample: `<section class="coding-universe" aria-label="Ecosystem">
  <h1>UMXIE STACK</h1>
  <p>Exploring 8 planetary modules.</p>
</section>`
      },
      {
        id: 'css',
        name: 'CSS',
        category: 'Styling & Layout',
        isFeatured: true,
        badges: ['Styling', 'Animations', 'Responsive', 'Design Systems'],
        description: 'Cascading style sheets orchestrating design tokens, responsive typography, glassmorphism, and micro-animations.',
        keyConcepts: ['Flexbox', 'CSS Grid', 'Custom Variables', 'Keyframe Animations', 'Media Queries', 'Backdrop Blur', 'Transitions'],
        relatedTechs: ['html', 'react', 'tailwind', 'sass'],
        codeExample: `.glass-card {
  background: rgba(10, 10, 20, 0.55);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 20px;
}`
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        category: 'Framework',
        isFeatured: true,
        badges: ['Fullstack', 'SSR', 'Server Components', 'Routing'],
        description: 'The React Framework for the Web with Server-Side Rendering (SSR), Static Site Generation (SSG), and Server Actions.',
        keyConcepts: ['App Router', 'Server Components', 'SSR vs SSG', 'API Routes', 'Image Optimization', 'Dynamic Imports', 'Edge Runtime'],
        relatedTechs: ['react', 'typescript', 'tailwind', 'nodejs'],
        codeExample: `export default async function Page() {
  return (
    <main>
      <h1>CODING UNIVERSE</h1>
    </main>
  );
}`
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Language',
        isFeatured: false,
        badges: ['Typing', 'Frontend', 'Safety', 'Developer Experience'],
        description: 'Guarantees reliable frontend component state, prop contracts, and refactor confidence.',
        keyConcepts: ['Type Inference', 'Generics', 'Prop Interfaces', 'Utility Types', 'Strict Typing'],
        relatedTechs: ['react', 'nextjs', 'javascript'],
        codeExample: `type ButtonProps = {
  label: string;
  onClick: () => void;
};`
      },
      {
        id: 'vue',
        name: 'Vue.js',
        category: 'Framework',
        isFeatured: false,
        badges: ['Frontend', 'Reactive', 'Single-File', 'Progressive'],
        description: 'Progressive framework featuring two-way data binding, intuitive Composition API, and single-file components.',
        keyConcepts: ['Reactivity', 'Composition API', 'Directives (v-model, v-for)', 'Vuex / Pinia', 'Scoped CSS'],
        relatedTechs: ['javascript', 'typescript', 'html'],
        codeExample: `<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>`
      },
      {
        id: 'angular',
        name: 'Angular',
        category: 'Framework',
        isFeatured: false,
        badges: ['Frontend', 'Enterprise', 'TypeScript', 'Reactive'],
        description: 'Comprehensive opinionated platform providing dependency injection, reactive forms, and end-to-end tooling.',
        keyConcepts: ['Components', 'Directives', 'Dependency Injection', 'RxJS Observables', 'Signals', 'Routing Guards'],
        relatedTechs: ['typescript', 'html', 'css'],
        codeExample: `@Component({
  selector: 'app-universe',
  template: '<h1>{{ title }}</h1>'
})
export class UniverseComponent {
  title = 'UMXIE Coding Universe';
}`
      },
      {
        id: 'tailwind',
        name: 'Tailwind',
        category: 'CSS',
        isFeatured: false,
        badges: ['Utility-First', 'Styling', 'Modern', 'Responsive'],
        description: 'Utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
        keyConcepts: ['Utility Classes', 'JIT Engine', 'Dark Mode Variant', 'Arbitrary Values', 'Custom Themes'],
        relatedTechs: ['css', 'react', 'nextjs'],
        codeExample: `<div className="backdrop-blur-md bg-purple-950/40 border border-purple-500/30 rounded-2xl">
  <span>Cosmic Glass</span>
</div>`
      },
      {
        id: 'sass',
        name: 'Sass',
        category: 'CSS Preprocessor',
        isFeatured: false,
        badges: ['Preprocessor', 'Mixins', 'Nesting', 'Variables'],
        description: 'CSS with superpowers providing nested rules, mixins, functions, and modular design architecture.',
        keyConcepts: ['Mixins', 'Nesting', 'Partials & Modules', 'Mathematical Operators', 'Functions'],
        relatedTechs: ['css', 'html', 'react'],
        codeExample: `@mixin glassmorphic($blur: 20px) {
  backdrop-filter: blur($blur);
  background: rgba(10, 10, 20, 0.6);
}`
      },
      {
        id: 'threejs',
        name: 'Three.js',
        category: '3D Graphics',
        isFeatured: false,
        badges: ['3D WebGL', 'Canvas', 'Shaders', 'Interactive'],
        description: 'JavaScript 3D library using WebGL to render complex scenes, geometries, cameras, lights, and materials in browser.',
        keyConcepts: ['Scene & Camera', 'WebGLRenderer', 'Geometries & Materials', 'OrbitControls', 'Custom GLSL Shaders', 'Animation Loop'],
        relatedTechs: ['javascript', 'react', 'html'],
        codeExample: `const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
renderer.render(scene, camera);`
      },
      {
        id: 'vite',
        name: 'Vite',
        category: 'Build Tool',
        isFeatured: false,
        badges: ['Bundler', 'HMR', 'Fast', 'ES Modules'],
        description: 'Next generation frontend tooling offering lightning fast HMR and optimized Rollup production builds.',
        keyConcepts: ['Native ES Modules', 'Lightning HMR', 'Plugin Ecosystem', 'Pre-bundling with esbuild'],
        relatedTechs: ['react', 'vue', 'typescript'],
        codeExample: `export default defineConfig({
  plugins: [react()],
});`
      },
      {
        id: 'redux',
        name: 'Redux',
        category: 'State Management',
        isFeatured: false,
        badges: ['State', 'Predictable', 'Global Store', 'Immutability'],
        description: 'Predictable state container for JavaScript apps using Redux Toolkit, slices, and deterministic reducers.',
        keyConcepts: ['Store', 'Actions & Reducers', 'Redux Toolkit (RTK)', 'Selectors', 'Immutability'],
        relatedTechs: ['react', 'typescript', 'javascript'],
        codeExample: `const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: { increment: state => { state.value += 1; } }
});`
      },
      {
        id: 'webpack',
        name: 'Webpack',
        category: 'Bundler',
        isFeatured: false,
        badges: ['Bundler', 'Asset Pipeline', 'Code Splitting', 'Loaders'],
        description: 'Static module bundler for modern JavaScript applications compiling codebases into optimized browser packages.',
        keyConcepts: ['Entry & Output', 'Loaders', 'Plugins', 'Code Splitting', 'Tree Shaking'],
        relatedTechs: ['javascript', 'react', 'css'],
        codeExample: `module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js' }
};`
      },
      {
        id: 'figma',
        name: 'Figma',
        category: 'Design Tool',
        isFeatured: false,
        badges: ['UI/UX', 'Prototyping', 'Design Systems', 'Vector'],
        description: 'Collaborative cloud interface design tool creating responsive layouts, component libraries, and interactive prototypes.',
        keyConcepts: ['Auto Layout', 'Component Variants', 'Design Tokens', 'Interactive Prototypes', 'Vector Networks'],
        relatedTechs: ['css', 'html', 'react'],
        codeExample: `// Translating Figma token styles directly into CSS variables`
      },
      {
        id: 'bash',
        name: 'CLI Tools',
        category: 'Tooling',
        isFeatured: false,
        badges: ['Tooling', 'NPM', 'Scripts', 'Automation'],
        description: 'Command line utilities, package managers, and script runners powering rapid local web development cycles.',
        keyConcepts: ['npm / pnpm / yarn', 'Package.json scripts', 'Environment Variables', 'Linters'],
        relatedTechs: ['nodejs', 'git', 'vite'],
        codeExample: `npm run dev`
      }
    ]
  },
  {
    id: 'backend',
    number: '03',
    name: 'BACKEND',
    subtitle: 'Powering the logic, data and business rules behind the applications.',
    categoryIcon: 'backend',
    technologies: [
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'Runtime',
        isFeatured: true,
        badges: ['Backend', 'Runtime', 'Event-Driven', 'Microservices'],
        description: 'Event-driven, asynchronous I/O JavaScript runtime environment built on Chrome V8 engine.',
        keyConcepts: ['Event Loop', 'Non-blocking I/O', 'Streams', 'Cluster Module', 'Buffer API', 'Worker Threads', 'Async Hooks'],
        relatedTechs: ['javascript', 'express', 'mongodb', 'rest'],
        codeExample: `import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ONLINE', node: 'UMXIE' }));
});

server.listen(4000);`
      },
      {
        id: 'express',
        name: 'Express',
        category: 'Framework',
        isFeatured: true,
        badges: ['Backend', 'REST', 'Middleware', 'APIs'],
        description: 'Fast, unopinionated, minimalist web framework for Node.js powering flexible routing and middleware chains.',
        keyConcepts: ['Middleware Chains', 'Route Handlers', 'Error Handling', 'Request Validation', 'CORS', 'Rate Limiting', 'Auth Interceptors'],
        relatedTechs: ['nodejs', 'javascript', 'rest', 'mongodb'],
        codeExample: `import express from 'express';
const app = express();

app.use(express.json());

app.get('/api/stack', (req, res) => {
  res.json({ name: 'UMXIE', modules: 8 });
});`
      },
      {
        id: 'rest',
        name: 'REST APIs',
        category: 'Architecture',
        isFeatured: true,
        badges: ['Architecture', 'HTTP', 'API Design', 'Contracts'],
        description: 'Standardized architectural style for networked systems, deterministic status codes, and JSON payloads.',
        keyConcepts: ['Statelessness', 'HTTP Verbs', 'Status Codes', 'Resource Endpoints', 'Pagination', 'API Versioning', 'Idempotency'],
        relatedTechs: ['express', 'nodejs', 'postman', 'mongodb'],
        codeExample: `app.get('/api/v1/modules/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getModule(id);
  res.status(200).json({ success: true, data });
});`
      },
      {
        id: 'python',
        name: 'Python / Django',
        category: 'Framework',
        isFeatured: true,
        badges: ['Backend', 'ORM', 'Batteries-Included', 'Security'],
        description: 'High-level Python web framework encouraging rapid development and clean, pragmatic design.',
        keyConcepts: ['Django ORM', 'MVT Architecture', 'Admin Dashboard', 'Authentication System', 'Django REST Framework (DRF)', 'Middleware'],
        relatedTechs: ['python', 'postgresql', 'docker'],
        codeExample: `from django.http import JsonResponse

def stack_view(request):
    return JsonResponse({"status": "active", "universe": "coding"})`
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        category: 'Language',
        isFeatured: false,
        badges: ['Backend', 'Typing', 'Type-Safety', 'Architecture'],
        description: 'Enforces compile-time type safety across database entities, DTOs, controllers, and services.',
        keyConcepts: ['DTOs', 'TypeORM / Prisma Models', 'Validation Pipes', 'Strict Domain Entities'],
        relatedTechs: ['nodejs', 'express', 'prisma'],
        codeExample: `interface CreateUserDTO {
  email: string;
  name: string;
}`
      },
      {
        id: 'go',
        name: 'Go Microservices',
        category: 'Microservices',
        isFeatured: false,
        badges: ['High-Performance', 'gRPC', 'Low Latency', 'Concurrency'],
        description: 'Lightning-fast microservices with minimal memory footprints and effortless concurrent goroutine scaling.',
        keyConcepts: ['HTTP net/http', 'Gin Framework', 'gRPC & Protocol Buffers', 'Connection Pools', 'Context Propagation'],
        relatedTechs: ['docker', 'kubernetes', 'rest'],
        codeExample: `r := gin.Default()
r.GET("/ping", func(c *gin.Context) {
    c.JSON(200, gin.H{"message": "pong"})
})`
      },
      {
        id: 'java',
        name: 'Spring Boot',
        category: 'Framework',
        isFeatured: false,
        badges: ['Enterprise', 'Dependency Injection', 'Scalable', 'Java'],
        description: 'Enterprise-grade Java framework providing production-ready microservices, metrics, and security.',
        keyConcepts: ['Dependency Injection', 'Spring Data JPA', 'Spring Security', 'Actuator', 'REST Controllers'],
        relatedTechs: ['java', 'postgresql', 'docker'],
        codeExample: `@RestController
@RequestMapping("/api")
public class ApiController {
    @GetMapping("/hello")
    public String hello() { return "Hello UMXIE"; }
}`
      },
      {
        id: 'sql',
        name: 'SQL Engines',
        category: 'Database',
        isFeatured: false,
        badges: ['Relational', 'ACID', 'Queries', 'Transactions'],
        description: 'Architecting relational schemas, indexes, foreign key constraints, and normalized tables.',
        keyConcepts: ['ACID Guarantees', 'Complex Joins', 'Isolation Levels', 'Query Optimization'],
        relatedTechs: ['postgresql', 'mysql', 'prisma'],
        codeExample: `BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`
      },
      {
        id: 'redis',
        name: 'Redis',
        category: 'Caching',
        isFeatured: false,
        badges: ['In-Memory', 'Cache', 'Pub/Sub', 'Rate-Limiting'],
        description: 'Blazing in-memory key-value data structure store used for caching, pub/sub messaging, and distributed locks.',
        keyConcepts: ['In-memory caching', 'TTL expiration', 'Pub/Sub', 'Rate-limiting', 'Session stores'],
        relatedTechs: ['nodejs', 'express', 'postgresql'],
        codeExample: `await redis.set('session:token', userId, 'EX', 3600);`
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'NoSQL',
        isFeatured: false,
        badges: ['Document Store', 'NoSQL', 'Scalable', 'BSON'],
        description: 'Flexible document database enabling high-velocity iteration with JSON-like schemas and horizontal sharding.',
        keyConcepts: ['Aggregation Pipelines', 'Schema Flexibility', 'Secondary Indexes', 'Replica Sets'],
        relatedTechs: ['nodejs', 'express'],
        codeExample: `await User.find({ role: 'admin' }).limit(10);`
      },
      {
        id: 'docker',
        name: 'Docker Containers',
        category: 'DevOps',
        isFeatured: false,
        badges: ['Containers', 'Isolation', 'Portability', 'Microservices'],
        description: 'Packaging backend runtimes, database services, and dependencies into isolated lightweight containers.',
        keyConcepts: ['Dockerfiles', 'Multi-stage Builds', 'Docker Compose', 'Volume Mounts', 'Container Networking'],
        relatedTechs: ['linux', 'aws', 'cicd'],
        codeExample: `FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci --production
CMD ["node", "server.js"]`
      },
      {
        id: 'bash',
        name: 'Shell Ops',
        category: 'System',
        isFeatured: false,
        badges: ['CLI', 'Automation', 'Cron', 'Servers'],
        description: 'Automating deployment pipelines, log rotation, database backups, and health monitoring scripts.',
        keyConcepts: ['Process Management (PM2 / Systemd)', 'Log Tailing', 'Cron Jobs', 'Environment Configuration'],
        relatedTechs: ['linux', 'git'],
        codeExample: `pm2 start server.js -i max --name "umxie-api"`
      },
      {
        id: 'aws',
        name: 'AWS Cloud',
        category: 'Infrastructure',
        isFeatured: false,
        badges: ['Cloud', 'EC2', 'S3', 'Lambda'],
        description: 'Hosting scalable backend services across Amazon Web Services compute, serverless, and storage.',
        keyConcepts: ['EC2 Instances', 'S3 Object Storage', 'AWS Lambda', 'API Gateway', 'CloudFront CDN'],
        relatedTechs: ['docker', 'linux'],
        codeExample: `// AWS SDK S3 client upload pipeline`
      },
      {
        id: 'linux',
        name: 'Linux Servers',
        category: 'OS',
        isFeatured: false,
        badges: ['Server OS', 'Security', 'Performance', 'POSIX'],
        description: 'Production server operations on Ubuntu/Debian/Alpine with systemd services, firewall configuration, and permissions.',
        keyConcepts: ['Systemd Daemons', 'SSH Key Auth', 'UFW Firewall', 'Nginx Reverse Proxy', 'File Permissions'],
        relatedTechs: ['bash', 'docker'],
        codeExample: `sudo systemctl status nginx`
      },
      {
        id: 'php',
        name: 'PHP APIs',
        category: 'Backend',
        isFeatured: false,
        badges: ['Web', 'APIs', 'Composer', 'Laravel'],
        description: 'Building robust APIs with modern PHP 8 attributes, strict typing, and Composer package dependencies.',
        keyConcepts: ['RESTful Routing', 'Dependency Injection', 'Eloquent ORM', 'JWT Authentication'],
        relatedTechs: ['mysql', 'sql'],
        codeExample: `Route::get('/api/status', function () {
    return response()->json(['status' => 'online']);
});`
      }
    ]
  },
  {
    id: 'databases',
    number: '04',
    name: 'DATABASES',
    subtitle: 'Storing, managing and retrieving data efficiently and securely.',
    categoryIcon: 'databases',
    technologies: [
      {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'NoSQL',
        isFeatured: true,
        badges: ['Database', 'NoSQL', 'Document Store', 'Scalable'],
        description: 'Document-oriented database utilizing JSON-like BSON schemas, flexible indexing, and horizontal scalability.',
        keyConcepts: ['Documents & Collections', 'Aggregation Pipelines', 'Compound Indexes', 'Replica Sets', 'Sharding', 'Mongoose Models', 'Atlas Cloud'],
        relatedTechs: ['nodejs', 'express', 'redis', 'postgresql'],
        codeExample: `const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  handle: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});`
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'Relational SQL',
        isFeatured: true,
        badges: ['Database', 'SQL', 'ACID', 'Enterprise'],
        description: 'Advanced open-source relational database supporting ACID transactions, JSONB document storage, and complex queries.',
        keyConcepts: ['ACID Compliance', 'Relational Schemas', 'Foreign Key Constraints', 'JSONB Document Support', 'Indexing (B-Tree, GIN)', 'Window Functions'],
        relatedTechs: ['sql', 'redis', 'nodejs', 'python'],
        codeExample: `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`
      },
      {
        id: 'redis',
        name: 'Redis',
        category: 'In-Memory',
        isFeatured: true,
        badges: ['Database', 'Cache', 'Key-Value', 'Fast'],
        description: 'Blazing in-memory data store used as a database, cache, streaming engine, and message broker.',
        keyConcepts: ['In-Memory Speed', 'Strings, Hashes, Lists, Sets', 'Key Expiration (TTL)', 'Pub/Sub Messaging', 'Redis Sentinel', 'Persistence (RDB/AOF)'],
        relatedTechs: ['nodejs', 'postgresql', 'mongodb'],
        codeExample: `import { createClient } from 'redis';
const client = createClient();
await client.connect();

await client.set('key', 'value', { EX: 60 });
const value = await client.get('key');`
      },
      {
        id: 'mysql',
        name: 'MySQL',
        category: 'Relational',
        isFeatured: true,
        badges: ['Database', 'SQL', 'Standard', 'Popular'],
        description: 'Widely used relational database management system powering millions of enterprise and web workloads globally.',
        keyConcepts: ['InnoDB Engine', 'Primary & Foreign Keys', 'B-Tree Indexes', 'Transactions & Locking', 'Replication'],
        relatedTechs: ['sql', 'php', 'postgresql'],
        codeExample: `SELECT * FROM modules 
WHERE active = 1 
LIMIT 8;`
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        category: 'Embedded DB',
        isFeatured: false,
        badges: ['Serverless', 'Embedded', 'Zero-Config', 'Lightweight'],
        description: 'Self-contained, serverless, zero-configuration SQL database engine embedded directly into applications.',
        keyConcepts: ['Single File Storage', 'Zero Configuration', 'ACID Compliance', 'In-Memory Mode', 'Mobile/Desktop Storage'],
        relatedTechs: ['sql', 'python', 'cpp'],
        codeExample: `ATTACH DATABASE 'universe.db' AS universe;`
      },
      {
        id: 'prisma',
        name: 'Prisma',
        category: 'ORM',
        isFeatured: false,
        badges: ['ORM', 'Type-Safe', 'Migrations', 'Productive'],
        description: 'Next-generation Node.js and TypeScript ORM with auto-generated queries, migrations, and type-safety.',
        keyConcepts: ['Schema Definition', 'Prisma Client', 'Prisma Migrate', 'Type-Safety', 'Relation Queries'],
        relatedTechs: ['postgresql', 'typescript', 'nodejs'],
        codeExample: `const user = await prisma.user.create({
  data: { name: 'UMXIE', email: 'dev@umxie.com' }
});`
      },
      {
        id: 'firebase',
        name: 'Firebase',
        category: 'Cloud DB',
        isFeatured: false,
        badges: ['NoSQL', 'Realtime', 'Cloud', 'Google'],
        description: 'Cloud-hosted NoSQL Firestore database with real-time listeners and seamless offline client persistence.',
        keyConcepts: ['Cloud Firestore', 'Realtime Listeners', 'Security Rules', 'Cloud Functions', 'Offline Sync'],
        relatedTechs: ['react', 'javascript', 'gcp'],
        codeExample: `const docRef = doc(db, "modules", "languages");
const docSnap = await getDoc(docRef);`
      },
      {
        id: 'supabase',
        name: 'Supabase',
        category: 'BaaS / Postgres',
        isFeatured: false,
        badges: ['Postgres', 'Open Source', 'Auth', 'Realtime'],
        description: 'Open-source Firebase alternative built on dedicated PostgreSQL with auto-generated REST APIs and Auth.',
        keyConcepts: ['PostgreSQL Engine', 'Row-Level Security (RLS)', 'Realtime Subscriptions', 'Storage & Auth'],
        relatedTechs: ['postgresql', 'typescript', 'react'],
        codeExample: `const { data, error } = await supabase
  .from('modules')
  .select('*');`
      },
      {
        id: 'sql',
        name: 'Relational Design',
        category: 'Architecture',
        isFeatured: false,
        badges: ['Schema', 'Normalization', 'Indexes', 'Design'],
        description: 'Database normalization up to 3NF, ER modeling, query profiling, and index strategies (B-Tree, Hash).',
        keyConcepts: ['1NF / 2NF / 3NF', 'Composite Indexes', 'Explain Analyze', 'Deadlock Avoidance'],
        relatedTechs: ['postgresql', 'mysql'],
        codeExample: `EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'dev@umxie.com';`
      },
      {
        id: 'nodejs',
        name: 'Mongoose ODM',
        category: 'ODM',
        isFeatured: false,
        badges: ['Node.js', 'Schema', 'Validation', 'ODM'],
        description: 'Elegant MongoDB object modeling for Node.js with built-in validation, hooks, and virtual properties.',
        keyConcepts: ['Schema Types', 'Pre/Post Hooks', 'Population (Virtual Joins)', 'Custom Validators'],
        relatedTechs: ['mongodb', 'nodejs'],
        codeExample: `userSchema.pre('save', async function() {
  if (this.isModified('password')) this.password = await hash(this.password);
});`
      },
      {
        id: 'python',
        name: 'Data Pipelines',
        category: 'Data',
        isFeatured: false,
        badges: ['ETL', 'Analytics', 'Pandas', 'Processing'],
        description: 'Extracting, transforming, and loading structured datasets across databases and analytic warehouses.',
        keyConcepts: ['Pandas DataFrames', 'SQLAlchemy', 'Batch Processing', 'CSV/JSON ETL'],
        relatedTechs: ['python', 'postgresql'],
        codeExample: `import pandas as pd
df = pd.read_sql('SELECT * FROM metrics', connection)`
      },
      {
        id: 'docker',
        name: 'Container DBs',
        category: 'DevOps',
        isFeatured: false,
        badges: ['Containers', 'Isolation', 'Compose', 'Local Dev'],
        description: 'Spinning up containerized database clusters with persistent volume mounts and replica testing.',
        keyConcepts: ['Volume Persistence', 'Healthchecks', 'Network Isolation', 'Seed Scripts'],
        relatedTechs: ['docker', 'postgresql', 'redis'],
        codeExample: `services:
  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data`
      },
      {
        id: 'aws',
        name: 'Cloud DynamoDB',
        category: 'Cloud NoSQL',
        isFeatured: false,
        badges: ['AWS', 'NoSQL', 'Serverless', 'Key-Value'],
        description: 'Fully managed NoSQL database service providing single-digit millisecond latency at any scale.',
        keyConcepts: ['Partition Keys & Sort Keys', 'Global Secondary Indexes', 'TTL', 'DynamoDB Streams'],
        relatedTechs: ['aws', 'nodejs'],
        codeExample: `// DynamoDB PutItemCommand client execution`
      },
      {
        id: 'bash',
        name: 'DB Migrations',
        category: 'Tooling',
        isFeatured: false,
        badges: ['Migrations', 'Backups', 'CLI', 'Automation'],
        description: 'Automating database dump, pg_dump backups, schema migrations, and point-in-time recovery scripts.',
        keyConcepts: ['pg_dump / pg_restore', 'Database Seeding', 'Rollback Strategies'],
        relatedTechs: ['bash', 'postgresql'],
        codeExample: `pg_dump -U postgres -d universe > backup.sql`
      },
      {
        id: 'rust',
        name: 'Embedded Engines',
        category: 'Low-Level',
        isFeatured: false,
        badges: ['Rust', 'LSM-Tree', 'Key-Value', 'Fast'],
        description: 'Exploring embedded storage engines like RocksDB, Sled, and LSM-tree persistence mechanics.',
        keyConcepts: ['Log-Structured Merge-Tree (LSM)', 'Write-Ahead Log (WAL)', 'MemTable & SSTable'],
        relatedTechs: ['rust', 'cpp'],
        codeExample: `// Low-level LSM-tree write path`
      }
    ]
  },
  {
    id: 'cloud',
    number: '05',
    name: 'CLOUD & DEVOPS',
    subtitle: 'Deploying, automating, scaling and monitoring resilient infrastructure.',
    categoryIcon: 'cloud',
    technologies: [
      {
        id: 'aws',
        name: 'AWS',
        category: 'Cloud Platform',
        isFeatured: true,
        badges: ['Cloud', 'Infrastructure', 'Hosting', 'Scalability'],
        description: 'Industry-standard cloud platform providing compute, object storage, serverless, and content delivery network infrastructure.',
        keyConcepts: ['EC2 Virtual Servers', 'S3 Object Storage', 'Lambda Serverless', 'CloudFront CDN', 'IAM Security & Roles', 'VPC Networking', 'Route 53 DNS'],
        relatedTechs: ['docker', 'linux', 'cicd', 'nodejs'],
        codeExample: `// AWS S3 bucket upload policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject"],
    "Resource": ["arn:aws:s3:::umxie-universe/*"]
  }]
}`
      },
      {
        id: 'docker',
        name: 'Docker',
        category: 'Containerization',
        isFeatured: true,
        badges: ['DevOps', 'Containers', 'Microservices', 'Portability'],
        description: 'Open platform for developing, shipping, and running applications inside standardized, isolated containers.',
        keyConcepts: ['Images & Containers', 'Dockerfile Instructions', 'Multi-Stage Builds', 'Docker Compose', 'Container Networking', 'Volume Mounts', 'Image Optimization'],
        relatedTechs: ['linux', 'aws', 'cicd', 'nodejs'],
        codeExample: `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html`
      },
      {
        id: 'linux',
        name: 'Linux',
        category: 'Operating System',
        isFeatured: true,
        badges: ['OS', 'Server', 'Kernel', 'Terminal'],
        description: 'Unix-like open-source operating system kernel powering virtually all enterprise servers, cloud instances, and containers.',
        keyConcepts: ['Bash Shell & Scripting', 'File Permissions & Sudo', 'Process Management', 'Systemd Daemons', 'SSH Key Authentication', 'Package Managers', 'Cron Automation'],
        relatedTechs: ['docker', 'aws', 'cicd', 'git'],
        codeExample: `#!/bin/bash
echo "Monitoring system health..."
df -h
free -m
uptime`
      },
      {
        id: 'cicd',
        name: 'CI / CD',
        category: 'Automation',
        isFeatured: true,
        badges: ['DevOps', 'Pipelines', 'Automation', 'Testing'],
        description: 'Continuous Integration & Continuous Deployment workflows ensuring code quality, automated testing, and zero-downtime releases.',
        keyConcepts: ['Automated Testing', 'Build Pipelines', 'Deployment Triggers', 'Environment Secrets', 'Artifact Storage', 'Rollback Strategies', 'Zero-Downtime Releases'],
        relatedTechs: ['docker', 'git', 'aws', 'linux'],
        codeExample: `name: CI Pipeline
on: [push]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test`
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'Orchestration',
        isFeatured: false,
        badges: ['Container Orchestration', 'K8s', 'Scalability', 'Cloud'],
        description: 'Automating deployment, scaling, and management of containerized applications across cluster nodes.',
        keyConcepts: ['Pods & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'Horizontal Pod Autoscaling (HPA)', 'Namespaces'],
        relatedTechs: ['docker', 'linux', 'aws'],
        codeExample: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: umxie-stack
spec:
  replicas: 3`
      },
      {
        id: 'githubactions',
        name: 'GitHub Actions',
        category: 'CI/CD',
        isFeatured: false,
        badges: ['Automation', 'Workflows', 'Testing', 'Deployment'],
        description: 'Native workflow automation built into GitHub for building, testing, linting, and releasing codebases.',
        keyConcepts: ['Workflow YAML', 'Matrix Builds', 'GitHub Secrets', 'Action Marketplace', 'Self-Hosted Runners'],
        relatedTechs: ['git', 'cicd', 'docker'],
        codeExample: `name: Deploy to Production
on:
  push:
    branches: [main]`
      },
      {
        id: 'terraform',
        name: 'Terraform',
        category: 'IaC',
        isFeatured: false,
        badges: ['Infrastructure as Code', 'HCL', 'Cloud', 'Automation'],
        description: 'Declarative infrastructure as code tool to provision and manage cloud resources across providers.',
        keyConcepts: ['HCL Syntax', 'State Management', 'Plan & Apply', 'Modules', 'Cloud Providers'],
        relatedTechs: ['aws', 'linux', 'cicd'],
        codeExample: `resource "aws_s3_bucket" "universe" {
  bucket = "umxie-universe-bucket"
}`
      },
      {
        id: 'nginx',
        name: 'Nginx',
        category: 'Web Server',
        isFeatured: false,
        badges: ['Reverse Proxy', 'Load Balancing', 'SSL', 'High Performance'],
        description: 'High-performance HTTP server, reverse proxy, and load balancer handling thousands of concurrent connections.',
        keyConcepts: ['Reverse Proxy', 'Load Balancing', 'SSL/TLS Termination', 'Gzip/Brotli Compression', 'Caching'],
        relatedTechs: ['linux', 'docker'],
        codeExample: `server {
    listen 80;
    location / {
        proxy_pass http://localhost:3000;
    }
}`
      },
      {
        id: 'gcp',
        name: 'Google Cloud',
        category: 'Cloud',
        isFeatured: false,
        badges: ['GCP', 'Cloud', 'Kubernetes', 'Storage'],
        description: 'Suite of cloud computing services running on the same infrastructure that Google uses internally.',
        keyConcepts: ['Google Compute Engine (GCE)', 'GKE Kubernetes', 'Cloud Run', 'BigQuery', 'Cloud Storage'],
        relatedTechs: ['docker', 'kubernetes', 'aws'],
        codeExample: `gcloud run deploy umxie-api --image gcr.io/umxie/api`
      },
      {
        id: 'bash',
        name: 'Shell Pipelines',
        category: 'Scripting',
        isFeatured: false,
        badges: ['Automation', 'Bash', 'Linux', 'Scripts'],
        description: 'Automating remote server setup, log inspection, automated backups, and health alerts.',
        keyConcepts: ['Cron Jobs', 'SSH Tunneling', 'Curl & Jq', 'System Logging'],
        relatedTechs: ['linux', 'git'],
        codeExample: `curl -s http://localhost:3000/health | jq .status`
      },
      {
        id: 'git',
        name: 'Git Versioning',
        category: 'VCS',
        isFeatured: false,
        badges: ['VCS', 'Git', 'Branches', 'Collaboration'],
        description: 'Distributed version control tracking every commit, branch merge, tag, and deployment hash.',
        keyConcepts: ['Commit Hashes', 'Branching & Merging', 'Rebase vs Merge', 'Git Hooks'],
        relatedTechs: ['githubactions', 'cicd'],
        codeExample: `git commit -m "feat(universe): deploy floating glassmorphic card"`
      },
      {
        id: 'python',
        name: 'Cloud Automation',
        category: 'Automation',
        isFeatured: false,
        badges: ['Python', 'Boto3', 'Scripts', 'APIs'],
        description: 'Scripting cloud resource creation, auditing permissions, and triggering event pipelines using Boto3.',
        keyConcepts: ['Boto3 SDK', 'Automation Scripts', 'Lambda Handlers', 'CloudWatch Triggers'],
        relatedTechs: ['aws', 'python'],
        codeExample: `import boto3
s3 = boto3.client('s3')
s3.list_buckets()`
      },
      {
        id: 'go',
        name: 'Cloud Native',
        category: 'Language',
        isFeatured: false,
        badges: ['Cloud Native', 'Go', 'Lightweight', 'Speed'],
        description: 'Building ultra-lightweight Docker images containing single compiled static binaries with zero dependencies.',
        keyConcepts: ['Scratch Containers', 'Static Compilation (CGO_ENABLED=0)', 'Microsecond Boot Time'],
        relatedTechs: ['docker', 'go'],
        codeExample: `CGO_ENABLED=0 GOOS=linux go build -o server .`
      },
      {
        id: 'nodejs',
        name: 'Serverless Functions',
        category: 'Serverless',
        isFeatured: false,
        badges: ['Serverless', 'Lambda', 'Node.js', 'Event-Driven'],
        description: 'Event-driven serverless functions executing on-demand with automatic scaling and zero idle cost.',
        keyConcepts: ['AWS Lambda', 'Event Payload', 'Cold Starts', 'Edge Functions'],
        relatedTechs: ['aws', 'nodejs'],
        codeExample: `export const handler = async (event) => {
  return { statusCode: 200, body: JSON.stringify('Cosmic status OK') };
};`
      },
      {
        id: 'redis',
        name: 'Distributed Cache',
        category: 'Cache',
        isFeatured: false,
        badges: ['Caching', 'Redis', 'Cluster', 'High Speed'],
        description: 'Shared cache layer across horizontally scaled web containers ensuring sub-millisecond data reads.',
        keyConcepts: ['Redis Cluster', 'Cache Aside Pattern', 'Connection Pooling'],
        relatedTechs: ['redis', 'docker'],
        codeExample: `// Shared distributed session state`
      }
    ]
  },
  {
    id: 'core_cs',
    number: '06',
    name: 'CORE CS',
    subtitle: 'Algorithmic thinking, architectural patterns and core computing theory.',
    categoryIcon: 'core_cs',
    technologies: [
      {
        id: 'dsa',
        name: 'Data Structures',
        category: 'Theory',
        isFeatured: true,
        badges: ['CS Core', 'Data Structures', 'Performance', 'Foundation'],
        description: 'Optimal organization and storage formats enabling efficient data access and modification across memory.',
        keyConcepts: ['Arrays & Hash Maps', 'Linked Lists', 'Trees (BST, AVL, Red-Black)', 'Graphs (Adjacency Matrix/List)', 'Heaps & Priority Queues', 'Tries & Disjoint Sets', 'Bitwise Operations'],
        relatedTechs: ['cpp', 'java', 'python', 'javascript'],
        codeExample: `class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}`
      },
      {
        id: 'algorithms',
        name: 'Algorithms',
        category: 'Theory',
        isFeatured: true,
        badges: ['CS Core', 'Optimization', 'Complexity', 'Big-O'],
        description: 'Computational problem-solving methodologies evaluated by time and space asymptotic complexity bounds.',
        keyConcepts: ['Time & Space Complexity (Big-O)', 'Sorting & Searching (Quick, Merge, Binary)', 'Divide & Conquer', 'Dynamic Programming & Memoization', 'Greedy Techniques', 'Backtracking', 'Graph Traversal (BFS / DFS)'],
        relatedTechs: ['dsa', 'cpp', 'python', 'java'],
        codeExample: `function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}`
      },
      {
        id: 'oop',
        name: 'OOP',
        category: 'Paradigm',
        isFeatured: true,
        badges: ['Architecture', 'Design', 'Clean Code', 'Patterns'],
        description: 'Object-oriented programming structuring robust software around interacting classes, interfaces, and encapsulated data.',
        keyConcepts: ['Encapsulation & Data Hiding', 'Inheritance & Subtyping', 'Polymorphism (Dynamic & Static)', 'Abstraction & Interfaces', 'SOLID Principles', 'Creational Patterns', 'Structural & Behavioral Patterns'],
        relatedTechs: ['java', 'cpp', 'typescript', 'python'],
        codeExample: `abstract class UniverseEntity {
  abstract describe(): string;
}

class Planet extends UniverseEntity {
  constructor(private name: string) { super(); }
  describe(): string { return \`Planet: \${this.name}\`; }
}`
      },
      {
        id: 'os',
        name: 'OS Concepts',
        category: 'Systems',
        isFeatured: true,
        badges: ['Systems', 'Kernel', 'Memory', 'Concurrency'],
        description: 'Software managing computer hardware and software resources, providing common services for computer programs.',
        keyConcepts: ['Processes vs Threads', 'Context Switching & Scheduling', 'Virtual Memory & Paging', 'Deadlocks & Race Conditions', 'Semaphores & Mutexes', 'Inter-Process Communication (IPC)', 'File Systems & Inodes'],
        relatedTechs: ['linux', 'cpp', 'systems_arch', 'memory_mgmt'],
        codeExample: `#include <pthread.h>
pthread_mutex_t lock;

void* critical_section(void* arg) {
    pthread_mutex_lock(&lock);
    // Safe access
    pthread_mutex_unlock(&lock);
    return NULL;
}`
      },
      {
        id: 'networks',
        name: 'Computer Networks',
        category: 'Networking',
        isFeatured: false,
        badges: ['Protocols', 'TCP/IP', 'HTTP', 'Security'],
        description: 'Understanding the layers of data transmission across the OSI and TCP/IP protocol stacks.',
        keyConcepts: ['OSI 7-Layer Model', 'TCP 3-Way Handshake vs UDP', 'IP Addressing & Subnetting', 'DNS Resolution', 'TLS/SSL Handshake', 'HTTP/1.1 vs HTTP/2 & HTTP/3'],
        relatedTechs: ['os', 'linux', 'rest'],
        codeExample: `// TCP Connection lifecycle: SYN -> SYN-ACK -> ACK`
      },
      {
        id: 'systems_arch',
        name: 'System Design',
        category: 'Architecture',
        isFeatured: false,
        badges: ['Architecture', 'Scalability', 'Reliability', 'Tradeoffs'],
        description: 'Architecting high-scale distributed systems balancing availability, consistency, and partition tolerance.',
        keyConcepts: ['CAP Theorem', 'Load Balancing & Reverse Proxies', 'Horizontal vs Vertical Scaling', 'Database Sharding', 'Message Queues'],
        relatedTechs: ['dsa', 'os', 'aws'],
        codeExample: `[Client] -> [Load Balancer] -> [API Cluster] -> [Cache / DB]`
      },
      {
        id: 'memory_mgmt',
        name: 'Memory Models',
        category: 'Systems',
        isFeatured: false,
        badges: ['Memory', 'Stack', 'Heap', 'Pointers'],
        description: 'Internal mechanics of stack allocation, heap management, memory alignment, and garbage collection algorithms.',
        keyConcepts: ['Stack vs Heap', 'Memory Fragmentation', 'Mark & Sweep GC', 'Reference Counting', 'Pointer Arithmetic'],
        relatedTechs: ['cpp', 'rust', 'csharp'],
        codeExample: `// Stack allocation vs dynamic Heap allocation`
      },
      {
        id: 'cpp',
        name: 'Low-Level C',
        category: 'Systems',
        isFeatured: false,
        badges: ['C', 'Memory', 'Pointers', 'Hardware'],
        description: 'Direct memory addressing, bitmasking, pointer dereferencing, and deterministic resource allocation.',
        keyConcepts: ['Pointers to Pointers', 'Bitwise Operations', 'Struct Padding', 'Volatile Keyword'],
        relatedTechs: ['cpp', 'systems_arch'],
        codeExample: `int *ptr = (int*)malloc(sizeof(int));
*ptr = 42;
free(ptr);`
      },
      {
        id: 'python',
        name: 'Algorithmic Scripting',
        category: 'Language',
        isFeatured: false,
        badges: ['Python', 'DSA', 'Math', 'Rapid Prototyping'],
        description: 'Prototyping recursive solutions, graph algorithms, and combinatorial search trees with Python.',
        keyConcepts: ['Collections (deque, Counter)', 'Heaqp Priority Queue', 'itertools & functools', 'Recursion Limit'],
        relatedTechs: ['python', 'algorithms'],
        codeExample: `from collections import deque
def bfs(graph, start):
    q = deque([start])`
      },
      {
        id: 'java',
        name: 'Enterprise Patterns',
        category: 'Patterns',
        isFeatured: false,
        badges: ['Design Patterns', 'GoF', 'Architecture', 'Java'],
        description: 'Gang of Four design patterns: Singleton, Factory, Observer, Strategy, Decorator, and Adapter.',
        keyConcepts: ['Factory Pattern', 'Observer Pattern', 'Strategy Pattern', 'Dependency Inversion'],
        relatedTechs: ['java', 'oop'],
        codeExample: `public class Singleton {
    private static Singleton instance;
    private Singleton() {}
}`
      },
      {
        id: 'sql',
        name: 'Relational Theory',
        category: 'Database Theory',
        isFeatured: false,
        badges: ['Relational Algebra', 'Tuple Calculus', 'ACID', 'Math'],
        description: 'Mathematical foundation of relational algebra, set theory, projections, joins, and integrity constraints.',
        keyConcepts: ['Relational Algebra', 'Functional Dependencies', 'Lossless Joins', 'B-Trees'],
        relatedTechs: ['sql', 'postgresql'],
        codeExample: `π (name, role) (σ (active=1) (Developers))`
      },
      {
        id: 'csharp',
        name: 'Clean Architecture',
        category: 'Architecture',
        isFeatured: false,
        badges: ['Clean Code', 'Domain Driven', 'SOLID', 'Onion'],
        description: 'Decoupling business logic from infrastructure using Hexagonal and Clean Architecture principles.',
        keyConcepts: ['Entities & Use Cases', 'Interface Adapters', 'Repository Pattern', 'Dependency Rule'],
        relatedTechs: ['csharp', 'oop'],
        codeExample: `public interface IRepository<T> {
    Task<T> GetByIdAsync(int id);
}`
      },
      {
        id: 'rust',
        name: 'Concurrency Models',
        category: 'Concurrency',
        isFeatured: false,
        badges: ['Concurrency', 'Thread Safety', 'Channels', 'Atomics'],
        description: 'Race-condition prevention via Rust ownership, atomic variables, and message passing channels.',
        keyConcepts: ['Send & Sync Traits', 'Arc & Mutex', 'MPSC Channels', 'Atomic Operations'],
        relatedTechs: ['rust', 'os'],
        codeExample: `let (tx, rx) = std::sync::mpsc::channel();`
      },
      {
        id: 'go',
        name: 'CSP & Goroutines',
        category: 'Concurrency',
        isFeatured: false,
        badges: ['Concurrency', 'CSP', 'Channels', 'Go'],
        description: 'Communicating Sequential Processes (CSP) concurrency through lightweight green threads and channels.',
        keyConcepts: ['Goroutines', 'Channel Select', 'WaitGroups', 'Context Cancellation'],
        relatedTechs: ['go', 'os'],
        codeExample: `go func() {
    ch <- "completed"
}()`
      },
      {
        id: 'bash',
        name: 'Unix Philosophy',
        category: 'Philosophy',
        isFeatured: false,
        badges: ['Unix', 'Composability', 'Pipes', 'Text Streams'],
        description: 'Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams.',
        keyConcepts: ['Text as Universal Interface', 'Pipes as Dataflow', 'Exit Status Codes', 'Separation of Mechanism & Policy'],
        relatedTechs: ['linux', 'bash'],
        codeExample: `cat logs.txt | grep ERROR | wc -l`
      }
    ]
  },
  {
    id: 'tools',
    number: '07',
    name: 'TOOLS & TESTING',
    subtitle: 'Tooling, automated testing suites, version control and developer workflows.',
    categoryIcon: 'tools',
    technologies: [
      {
        id: 'git',
        name: 'Git',
        category: 'VCS',
        isFeatured: true,
        badges: ['Tooling', 'VCS', 'Collaboration', 'History'],
        description: 'Distributed version control system tracking source code modifications, branch merges, and collaborative pull requests.',
        keyConcepts: ['Git Internals (Blobs, Trees, Commits)', 'Branching, Merging & Fast-Forward', 'Interactive Rebase & Squash', 'Cherry-Picking & Stashing', 'Merge Conflict Resolution', 'Git Hooks & Pre-Commit', 'Semantic Versioning (SemVer)'],
        relatedTechs: ['vscode', 'cicd', 'linux'],
        codeExample: `git checkout -b feature/cosmic-glass
git add .
git commit -m "feat(stack): implement floating transparent glass card"
git push origin feature/cosmic-glass`
      },
      {
        id: 'jest',
        name: 'Jest',
        category: 'Testing',
        isFeatured: true,
        badges: ['Testing', 'Unit Testing', 'JavaScript', 'Mocking'],
        description: 'Delightful JavaScript testing framework with a focus on simplicity, zero-config test runners, and snapshot testing.',
        keyConcepts: ['Unit & Integration Testing', 'Test Suites & Assertions (expect)', 'Mocking Functions & Modules (jest.fn)', 'Asynchronous Testing', 'Snapshot Testing', 'Code Coverage Reports', 'Watch Mode & Filtering'],
        relatedTechs: ['javascript', 'typescript', 'react', 'nodejs'],
        codeExample: `describe('Coding Universe', () => {
  test('initializes with 8 celestial modules', () => {
    expect(UNIVERSE_MODULES.length).toBe(8);
  });
});`
      },
      {
        id: 'postman',
        name: 'Postman',
        category: 'API Tooling',
        isFeatured: true,
        badges: ['APIs', 'Testing', 'Documentation', 'Debugging'],
        description: 'Collaborative API platform for building, testing, documenting, and monitoring RESTful and GraphQL endpoints.',
        keyConcepts: ['HTTP Request Crafting', 'Environment & Global Variables', 'Pre-Request Scripts & Tests', 'Collection Runners', 'Mock Servers', 'Automated API Monitoring', 'OpenAPI / Swagger Export'],
        relatedTechs: ['rest', 'express', 'nodejs'],
        codeExample: `pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});`
      },
      {
        id: 'vscode',
        name: 'VS Code',
        category: 'IDE / Editor',
        isFeatured: true,
        badges: ['IDE', 'Editor', 'Extensions', 'Debugging'],
        description: 'Highly extensible code editor with integrated terminal, Git integration, intelligent code completion, and debugging.',
        keyConcepts: ['IntelliSense & Language Servers', 'Integrated Terminal & Tasks', 'Debugger Breakpoints & Call Stack', 'Custom Snippets & Keybindings', 'Remote Development (SSH / Containers)', 'Multi-Cursor Editing', 'Extension Ecosystem'],
        relatedTechs: ['git', 'typescript', 'javascript'],
        codeExample: `// settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`
      },
      {
        id: 'figma',
        name: 'Figma',
        category: 'Design Tool',
        isFeatured: false,
        badges: ['UI/UX', 'Design', 'Prototyping', 'Components'],
        description: 'Collaborative cloud interface design tool creating vector UI components, design tokens, and prototypes.',
        keyConcepts: ['Auto Layout', 'Component Sets & Variants', 'Color & Typography Styles', 'Interactive Prototypes', 'Inspect & CSS Export'],
        relatedTechs: ['css', 'html', 'react'],
        codeExample: `// Figma Design Systems -> React Component Props`
      },
      {
        id: 'docker',
        name: 'Docker Desktop',
        category: 'Container Tool',
        isFeatured: false,
        badges: ['Containers', 'Local Dev', 'Microservices', 'Tooling'],
        description: 'Desktop application providing local container orchestration, image inspection, and volume debugging.',
        keyConcepts: ['Local Image Registry', 'Container Logs Inspection', 'Exec Shell into Container', 'Resource Allocation'],
        relatedTechs: ['docker', 'linux'],
        codeExample: `docker ps -a`
      },
      {
        id: 'vite',
        name: 'Vite Dev Server',
        category: 'Build Tool',
        isFeatured: false,
        badges: ['Dev Server', 'Fast', 'HMR', 'Build'],
        description: 'Ultra-fast local development server with instant Hot Module Replacement powered by native browser ES modules.',
        keyConcepts: ['Instant Server Start', 'Hot Module Replacement (HMR)', 'Rollup Bundler', 'Optimized Assets'],
        relatedTechs: ['react', 'typescript'],
        codeExample: `vite --port 5173 --host`
      },
      {
        id: 'bash',
        name: 'Terminal & Zsh',
        category: 'Shell',
        isFeatured: false,
        badges: ['CLI', 'Terminal', 'Zsh', 'Productivity'],
        description: 'Custom shell environments with syntax highlighting, auto-suggestions, fuzzy file searching, and aliases.',
        keyConcepts: ['Oh My Zsh', 'Fzf Fuzzy Finder', 'Custom Aliases', 'Tmux Terminal Multiplexer'],
        relatedTechs: ['linux', 'bash'],
        codeExample: `alias gs="git status"`
      },
      {
        id: 'linux',
        name: 'POSIX Utilities',
        category: 'System Tools',
        isFeatured: false,
        badges: ['Linux', 'Grep', 'Sed', 'Awk'],
        description: 'Command line stream editors, search tools, and filters: grep, sed, awk, find, xargs, and curl.',
        keyConcepts: ['Regular Expressions in Grep', 'Stream Editing with Sed', 'Text Processing with Awk', 'Pipes'],
        relatedTechs: ['linux', 'bash'],
        codeExample: `grep -rn "CODING UNIVERSE" src/`
      },
      {
        id: 'cicd',
        name: 'Automated CI/CD',
        category: 'Testing Pipeline',
        isFeatured: false,
        badges: ['CI/CD', 'Automated Tests', 'Pipelines', 'Quality'],
        description: 'Enforcing automated linting, type checks, and unit tests before merging pull requests into main.',
        keyConcepts: ['Lint Checks', 'Test Coverage Thresholds', 'Status Checks', 'Automated Semantic Releases'],
        relatedTechs: ['git', 'jest'],
        codeExample: `npm run lint && npm run test`
      },
      {
        id: 'typescript',
        name: 'TSC Type Checker',
        category: 'Linter / Types',
        isFeatured: false,
        badges: ['Compiler', 'Type Check', 'Quality', 'Safety'],
        description: 'Running the TypeScript compiler in no-emit mode to catch potential runtime bugs before deployment.',
        keyConcepts: ['tsc --noEmit', 'tsconfig.json Config', 'Strict Flag', 'Type Checking in Pre-Commit'],
        relatedTechs: ['typescript', 'javascript'],
        codeExample: `npx tsc --noEmit`
      },
      {
        id: 'python',
        name: 'PyTest Suites',
        category: 'Testing',
        isFeatured: false,
        badges: ['Testing', 'Python', 'Fixtures', 'Coverage'],
        description: 'Robust testing framework for Python featuring powerful fixtures, parameterization, and assertion introspection.',
        keyConcepts: ['PyTest Fixtures', 'Parameterized Tests', 'Mocking with unittest.mock', 'Coverage.py'],
        relatedTechs: ['python', 'backend'],
        codeExample: `def test_planet_count():
    assert len(universe_modules) == 8`
      },
      {
        id: 'nodejs',
        name: 'NPM & PNPM',
        category: 'Package Manager',
        isFeatured: false,
        badges: ['Package Manager', 'Dependencies', 'Semver', 'Node'],
        description: 'Managing third-party dependencies, lockfile security, workspace monorepos, and script orchestration.',
        keyConcepts: ['Package.json & Package-lock.json', 'PNPM Hard Links', 'Semantic Version Ranges (^ / ~)', 'npm audit'],
        relatedTechs: ['nodejs', 'javascript'],
        codeExample: `pnpm install`
      },
      {
        id: 'webpack',
        name: 'Bundlers',
        category: 'Tooling',
        isFeatured: false,
        badges: ['Bundlers', 'Asset Pipeline', 'Optimization', 'Build'],
        description: 'Analyzing bundle sizes, configuring code splitting, lazy loading, and asset minification.',
        keyConcepts: ['Webpack Bundle Analyzer', 'Dynamic Imports', 'Terser Minification', 'Source Maps'],
        relatedTechs: ['javascript', 'react'],
        codeExample: `const Component = React.lazy(() => import('./Component'));`
      },
      {
        id: 'nginx',
        name: 'Network Debugging',
        category: 'Diagnostics',
        isFeatured: false,
        badges: ['DevTools', 'Network', 'Headers', 'CORS'],
        description: 'Inspecting browser network waterfall, response headers, CORS preflights, and WebSocket frames.',
        keyConcepts: ['Browser Network Tab', 'CORS Headers', 'Payload Inspection', 'Performance Waterfall'],
        relatedTechs: ['rest', 'postman'],
        codeExample: `Access-Control-Allow-Origin: *`
      }
    ]
  },
  {
    id: 'hardware',
    number: '08',
    name: 'SYSTEMS & HARDWARE',
    subtitle: 'Low-level computing, memory management, microcontrollers and buses.',
    categoryIcon: 'hardware',
    technologies: [
      {
        id: 'systems_arch',
        name: 'Architecture',
        category: 'Hardware',
        isFeatured: true,
        badges: ['Hardware', 'CPU', 'Von Neumann', 'Microarchitecture'],
        description: 'Conceptual design and fundamental operational structure of modern computer microprocessor systems.',
        keyConcepts: ['Von Neumann vs Harvard', 'Arithmetic Logic Unit (ALU)', 'Instruction Register & PC', 'Pipelining & Hazards', 'Instruction Set (RISC vs CISC)', 'Clock Cycles & CPI', 'Branch Prediction'],
        relatedTechs: ['memory_mgmt', 'system_bus', 'os', 'cpp'],
        codeExample: `[Fetch] -> [Decode] -> [Execute] -> [Memory Access] -> [Write Back]`
      },
      {
        id: 'memory_mgmt',
        name: 'Memory Mgmt',
        category: 'Hardware',
        isFeatured: true,
        badges: ['Hardware', 'RAM', 'Cache', 'Memory Hierarchy'],
        description: 'Hardware hierarchy handling fast volatile memory, cache locality, and DRAM timing cycles.',
        keyConcepts: ['Cache Hierarchy (L1-L3)', 'Spatial Locality', 'Temporal Locality', 'Memory Controller (MMU)', 'Page Tables & TLB', 'DRAM Timing Cycles', 'Virtual Addressing'],
        relatedTechs: ['systems_arch', 'os', 'cpp', 'linux'],
        codeExample: `// Cache-friendly row-major matrix scan
for (int i = 0; i < ROWS; i++) {
    for (int j = 0; j < COLS; j++) {
        matrix[i][j] *= 2; // High L1 cache hit rate
    }
}`
      },
      {
        id: 'system_bus',
        name: 'System Bus',
        category: 'Interconnects',
        isFeatured: true,
        badges: ['Hardware', 'PCIe', 'Buses', 'Bandwidth'],
        description: 'Communication channels interconnecting CPU, memory controllers, PCIe lanes, and peripheral devices.',
        keyConcepts: ['Data & Address Buses', 'PCIe Lanes (Gen 4/5)', 'Bus Arbitration', 'Direct Memory Access (DMA)', 'Throughput & Clock', 'Latency Bounds', 'I/O Controllers'],
        relatedTechs: ['systems_arch', 'memory_mgmt', 'os', 'embedded'],
        codeExample: `[CPU Core] <---> [L1/L2/L3 Cache] <---> [Memory Controller]
                        |                      |
                   [PCIe Root]            [System Bus]
                        |                      |
                 [NVMe / GPU]              [DDR5 RAM]`
      },
      {
        id: 'embedded',
        name: 'Embedded',
        category: 'Systems',
        isFeatured: true,
        badges: ['Hardware', 'Microcontrollers', 'IoT', 'Firmware'],
        description: 'Dedicated computing systems with real-time constraints, microcontrollers, and bus protocols.',
        keyConcepts: ['Microcontrollers', 'GPIO Pins', 'UART, SPI & I2C', 'Hardware Interrupts (ISR)', 'Watchdog Timers', 'Pulse Width Modulation (PWM)', 'RTOS'],
        relatedTechs: ['cpp', 'systems_arch', 'memory_mgmt', 'os'],
        codeExample: `// Embedded C: Interrupt Service Routine
void IRAM_ATTR onTimerInterrupt() {
    uint32_t pinState = GPIO.in & BIT(LED_PIN);
    GPIO.out_w1ts = (pinState == 0) ? BIT(LED_PIN) : 0;
    GPIO.out_w1tc = (pinState != 0) ? BIT(LED_PIN) : 0;
}`
      },
      {
        id: 'arduino',
        name: 'Arduino',
        category: 'Microcontroller',
        isFeatured: false,
        badges: ['Embedded', 'Prototyping', 'C++', 'AVR'],
        description: 'Open-source electronics platform based on easy-to-use hardware and software for building interactive physical projects.',
        keyConcepts: ['Setup() & Loop()', 'Analog & Digital I/O', 'PWM Signal Output', 'Serial Communication (UART)', 'External Sensor Libraries'],
        relatedTechs: ['embedded', 'cpp'],
        codeExample: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
}`
      },
      {
        id: 'raspberrypi',
        name: 'Raspberry Pi',
        category: 'SBC',
        isFeatured: false,
        badges: ['SBC', 'ARM', 'Linux', 'GPIO'],
        description: 'Credit-card-sized single-board computer running full Linux distributions with direct hardware GPIO pins.',
        keyConcepts: ['ARM Cortex Architecture', 'Linux Kernel on ARM', 'Hardware GPIO Control', 'I2C / SPI Sensors', 'Headless Server Setup'],
        relatedTechs: ['linux', 'python', 'bash'],
        codeExample: `import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
GPIO.output(18, GPIO.HIGH)`
      },
      {
        id: 'assembly',
        name: 'Assembly (ASM)',
        category: 'Low-Level',
        isFeatured: false,
        badges: ['Assembly', 'x86_64', 'ARM', 'Registers'],
        description: 'Low-level programming language with direct one-to-one correspondence between instructions and machine code.',
        keyConcepts: ['CPU Registers (RAX, RBX, RSP)', 'Instruction Pointers', 'Stack Frame (Push/Pop)', 'Syscall Conventions', 'Memory Addressing Modes'],
        relatedTechs: ['cpp', 'systems_arch'],
        codeExample: `section .data
    msg db "Hello UMXIE", 10
section .text
    global _start
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 12
    syscall`
      },
      {
        id: 'cpu_arch',
        name: 'CPU Architecture',
        category: 'Silicon',
        isFeatured: false,
        badges: ['Microarchitecture', 'Silicon', 'Cores', 'Threads'],
        description: 'Instruction sets, superscalar execution, branch predictors, cache coherency, and SIMD vector processing.',
        keyConcepts: ['Superscalar Execution', 'Out-of-Order Execution', 'SIMD & AVX Extensions', 'MESI Cache Coherency', 'Hyper-Threading'],
        relatedTechs: ['systems_arch', 'memory_mgmt'],
        codeExample: `// Vector SIMD parallel instruction dispatch`
      },
      {
        id: 'cpp',
        name: 'Embedded C++',
        category: 'Firmware',
        isFeatured: false,
        badges: ['Embedded C++', 'No-Exceptions', 'No-RTTI', 'Real-time'],
        description: 'Writing zero-overhead embedded firmware avoiding dynamic allocations, exceptions, and non-deterministic latencies.',
        keyConcepts: ['No Heap Allocation', 'Static Constexpr Buffers', 'Volatile Hardware Registers', 'Bit Fields'],
        relatedTechs: ['cpp', 'embedded'],
        codeExample: `constexpr size_t BUFFER_SIZE = 256;
static volatile uint8_t ringBuffer[BUFFER_SIZE];`
      },
      {
        id: 'rust',
        name: 'Embedded Rust',
        category: 'Firmware',
        isFeatured: false,
        badges: ['no_std', 'Memory Safety', 'Embedded', 'Bare Metal'],
        description: 'Building bare-metal micro-controller firmware without the standard library (#![no_std]) using memory safety guarantees.',
        keyConcepts: ['#![no_std] Environment', 'Peripheral Access Crates (PAC)', 'Hardware Abstraction Layer (HAL)', 'Zero-Cost Pin Modes'],
        relatedTechs: ['rust', 'embedded'],
        codeExample: `#![no_std]
#![no_main]
use panic_halt as _;`
      },
      {
        id: 'linux',
        name: 'Kernel Modules',
        category: 'Kernel',
        isFeatured: false,
        badges: ['Kernel', 'Drivers', 'Linux', 'C'],
        description: 'Interacting with the Linux kernel via character device drivers, memory mapping (mmap), and kernel sysfs.',
        keyConcepts: ['Kernel Space vs User Space', 'Character Devices', 'mmap Direct Hardware Access', '/sys & /proc Interfaces'],
        relatedTechs: ['linux', 'cpp', 'os'],
        codeExample: `int init_module(void) {
    printk(KERN_INFO "UMXIE Driver Loaded\\n");
    return 0;
}`
      },
      {
        id: 'bash',
        name: 'Firmware Flashers',
        category: 'Tooling',
        isFeatured: false,
        badges: ['Tooling', 'Flashing', 'UART', 'CLI'],
        description: 'Automating microcontroller flashing and serial monitoring with esptool, avrdude, and minicom.',
        keyConcepts: ['Baud Rate Configuration', 'Flashing Hex Binaries', 'UART Serial Output', 'JTAG / SWD Debugging'],
        relatedTechs: ['bash', 'embedded'],
        codeExample: `esptool.py --chip esp32 write_flash 0x1000 firmware.bin`
      },
      {
        id: 'python',
        name: 'MicroPython',
        category: 'Firmware',
        isFeatured: false,
        badges: ['MicroPython', 'IoT', 'Rapid Prototyping', 'Hardware'],
        description: 'Full Python 3 implementation optimized to run on microcontrollers like ESP32 and RP2040.',
        keyConcepts: ['Machine Module', 'Pin & ADC Classes', 'I2C & SPI Drivers', 'REPL Live Console'],
        relatedTechs: ['python', 'embedded'],
        codeExample: `from machine import Pin
led = Pin(2, Pin.OUT)
led.value(1)`
      },
      {
        id: 'os',
        name: 'RTOS Systems',
        category: 'Operating System',
        isFeatured: false,
        badges: ['Real-Time', 'FreeRTOS', 'Deterministic', 'Scheduling'],
        description: 'Real-Time Operating Systems ensuring deterministic task scheduling, preemptive priorities, and inter-task queues.',
        keyConcepts: ['Deterministic Preemption', 'Task Queues & Semaphores', 'Task Notification', 'Tick Interrupts'],
        relatedTechs: ['os', 'embedded'],
        codeExample: `xTaskCreate(vTaskCode, "TASK", 1000, NULL, 1, NULL);`
      },
      {
        id: 'dsa',
        name: 'Ring Buffers',
        category: 'Data Structure',
        isFeatured: false,
        badges: ['CircBuffer', 'Lock-Free', 'DMA', 'Low-Level'],
        description: 'Implementing circular lock-free ring buffers for streaming UART sensor telemetry without buffer overruns.',
        keyConcepts: ['Head & Tail Pointers', 'Lock-Free Single-Producer Single-Consumer', 'Modulo Arithmetic'],
        relatedTechs: ['dsa', 'embedded'],
        codeExample: `tail = (tail + 1) % BUFFER_CAPACITY;`
      }
    ]
  }
];

export const ALL_TECHNOLOGIES_MAP = {};
UNIVERSE_MODULES.forEach((mod) => {
  mod.technologies.forEach((t) => {
    ALL_TECHNOLOGIES_MAP[t.id] = { ...t, moduleId: mod.id, moduleName: mod.name };
  });
});
