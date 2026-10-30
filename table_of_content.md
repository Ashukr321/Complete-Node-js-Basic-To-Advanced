# Node.js Learning Roadmap 🗺️

Learn in this order — each phase builds on the one before it.
🔴 = must learn first (core / interview essentials) · 🟡 = important next · 🟢 = advanced

---

## Phase 1 — Foundations 🔴
- [ ] What Node.js is: V8 engine + libuv, why server-side JS
- [ ] Running files, REPL, `node --watch`
- [ ] Node architecture: single thread, thread pool, non-blocking I/O
- [ ] **Event loop** — phases (timers → poll → check → close), microtasks (`process.nextTick`, Promises)
- [ ] Blocking (sync) vs non-blocking (async) code

## Phase 2 — Modules & npm 🔴
- [ ] CommonJS (`require` / `module.exports`) vs ES Modules (`import` / `export`)
- [ ] `"type": "module"`, `import.meta.url`, `__dirname` alternative
- [ ] Module caching & module wrapper function
- [ ] npm: `package.json`, `dependencies` vs `devDependencies`, semver, lockfile, scripts, `npx`

## Phase 3 — Async JavaScript 🔴
- [ ] Callbacks & error-first pattern (`(err, data) => {}`)
- [ ] Promises, `async/await`, `try/catch`
- [ ] `Promise.all` / `allSettled` / `race`
- [ ] `fs/promises`, `util.promisify`

## Phase 4 — Core Modules 🔴
- [x] `path` — join, resolve, dirname, basename, extname, parse, isAbsolute
- [x] `fs` — read, write, append, mkdir, rm, unlink (sync + callback)
- [ ] `fs` — rename, stat, readdir, existsSync, copyFile, watch
- [ ] `os` — cpus, freemem, platform, arch
- [ ] `url` & `URLSearchParams`
- [ ] `events` — EventEmitter (`on`, `emit`, `once`, `off`)
- [ ] `process` — `env`, `argv`, `exit`, `cwd`, `NODE_ENV`, `.env` / `dotenv`

## Phase 5 — Buffers & Streams 🔴
- [ ] `Buffer` & character encodings (utf-8, base64)
- [ ] Stream types: Readable, Writable, Duplex, Transform
- [ ] `createReadStream` / `createWriteStream` for large files
- [ ] `pipe()`, `stream.pipeline()`, backpressure

## Phase 6 — HTTP & Web Basics 🔴
- [ ] Client–server, request/response, headers, status codes, HTTP methods
- [ ] `http.createServer`, `listen`, manual routing
- [ ] Serving JSON & static files, reading request body
- [ ] REST API design, stateless vs stateful

## Phase 7 — Express.js 🟡
- [ ] Routing, route params, query strings
- [ ] Middleware (built-in, custom, third-party: `cors`, `morgan`)
- [ ] Centralized error-handling middleware
- [ ] Request validation (zod / joi), file uploads (multer)
- [ ] Project structure: routes → controllers → services

## Phase 8 — Databases 🟡
- [ ] MongoDB + Mongoose (schemas, models, CRUD)
- [ ] SQL (PostgreSQL / MySQL) + an ORM (Prisma / Sequelize)
- [ ] Indexing, pagination, transactions

## Phase 9 — Auth & Security 🟡
- [ ] Password hashing (bcrypt), `crypto` module
- [ ] JWT auth, sessions & cookies, authorization (roles)
- [ ] Security: helmet, rate limiting, CORS, input sanitization, secrets handling

## Phase 10 — Error Handling & Debugging 🟡
- [ ] Sync vs async error handling, custom error classes
- [ ] `uncaughtException`, `unhandledRejection`, graceful shutdown
- [ ] Debugging with `node --inspect` + Chrome DevTools

## Phase 11 — Testing 🟡
- [ ] Unit tests with `node:test` or Jest
- [ ] API tests with Supertest

## Phase 12 — Performance & Scaling 🟢
- [ ] `child_process` (spawn, exec, fork)
- [ ] `worker_threads` for CPU-heavy work
- [ ] `cluster` module, PM2
- [ ] Caching with Redis
- [ ] Memory leaks, garbage collection, profiling
- [ ] Horizontal vs vertical scaling

## Phase 13 — Real-time & Architecture 🟢
- [ ] WebSockets / Socket.IO
- [ ] Message queues (BullMQ / RabbitMQ)
- [ ] Microservices basics
- [ ] NestJS (after Express is solid)

## Phase 14 — Deployment 🟢
- [ ] Environment configs, logging (pino / winston)
- [ ] Docker basics
- [ ] Deploy to a cloud platform (AWS / Render / Railway), CI/CD
