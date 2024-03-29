# awesome-monorepo-starter

Minimalist monorepo sample to get started with framework agnostic [SSR](https://www.sanity.io/glossary/server-side-rendering) (as well as [SSG/Prerender](https://qwik.dev/docs/guides/static-site-generation/)) and modern data essentials (ORM, GraphQL etc.) in Typescript, supercharged by [Bun](https://www.makeuseof.com/what-is-bunjs-why-the-javascript-community-excited/), fully extensible for integration with frameworks and technologies of your choice.

- `packages/ui`: A frontend sample with framework agnostic [SSR](https://www.sanity.io/glossary/server-side-rendering) and modern data essentials (ORM, GraphQL etc.), powered by SolidJS and fully extensible for migration to alternative frameworks - see more [here](./packages/ui/README.md)
- `packages/api-service`: API service with GraphQL as query interface, Prisma as ORM and SQLite as provider of DB persistence - see more [here](./packages/api-service/README.md)

# Overview

```mermaid
   flowchart LR
    c2-->c1
    c1-->c2-->a1
    a1-->a2-->a3
    subgraph API Service
    a1["`GraphQL APIs
    (Fastify/Mercurius)`"]
    a2["`ORM
    (Prisma)`"]
    a3[(SQLite)]
    end
    subgraph UI
    c1["`Frontend
    (SolidJS etc.)`"]
    c2["`Backend for Frontend
    (Vike/Fastify)`"]
    end
```

# Prerequisites

- [bun](https://bun.sh/) - recommended optional (>=v1.0.27), can safely fall back Node.js as well (recommended to manage with [proto](https://moonrepo.dev/blog/proto))
- Node.js - v18 recommended, can ignore if you have bun installed

# Running

## Initializing

### bun

```
bun i #Installing Dependencies

bun run init # initialize DB
```

### node

```
npm i

# Same as above with `:node` appended to the commands, e.g:

npm run init:node
```

## Running Dev Server

### bun

```
bun dev #runs both UI and API Service
```

### node

```
# Same as above with `:node` appended to the commands, e.g:
```


# Building

## bun

```
bun run build #builds both UI and API Service
```

## node

```
npm run build
```

# E2E

## bun

```
bun e2e # Runs E2E for both UI and API Service
```

## node

```
npx nx e2e ui #Run E2E for UI only, go to API Service project to run its own E2E
```
# Containerization

- With Bun: Containerize a Bun application with Docker | Bun Examples
- With Node: snyk-labs/nodejs-docker-best-practices

# NX Generic

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the Project Graph
Run `nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
