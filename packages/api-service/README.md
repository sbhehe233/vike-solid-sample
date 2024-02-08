# api-service

API service with GraphQL as query interface, Prisma as ORM and SQLite as provider of DB persistence.

# Key Features

- API server with `Fastify`
- ORM with `Prisma`
- GraphQL powered by `urql`
- WS capabilities
- Swagger integration
- E2E with `Stepci`

# Available Commands

Runtime defaults to [bun](https://bun.sh/) so use the commands with `:node` appended to fall back to Node.js

- "init": Initialize DB
- "init:node": Fall back to node for above
- "dev": Run dev server
- "dev:node": Fall back to node for above
- "build": Build server to `./dist`
- "build:node": Fall back to node for above
- "start": Start server in production - dependency: `build`
- "start:node": Fall back to node for above
- "e2e": Run E2E tests, the server would need to be running (in the background)
- "e2e:node": Fall back to node for above
- "e2e:runner": Run E2E tests without the server running in the background
- "prettier": Format code

# Project Structure

```
|- context: Prisma context
|- e2e: E2E tests
|- plugins: Fastify plugins
|- routes: API routes
|- schema: GraphQL schmeas
|- server: Server builders
|- tools: Utitily tools
```

# Alternatives

## DB

- Recommended to connect with other data sources through [Prisma](https://www.prisma.io)

- ORM: `TypeORM`

- Consider `graphql-yoga` as GraphQL engine for various benefits (more features, runtime support etc.)

## Server/API Framework

- Consider `Hono` for  better support for Bun and even more runtimes

- Consider [Elysia](https://elysiajs.com) if going with Bun as runtime.

- Consider `Meteror/Sails/Feathers` for real-time capabilities


# Integration with the UI Project for Integrated Repo

- See [README](../ui/README.md)
