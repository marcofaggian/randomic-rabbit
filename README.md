# Randomic Rabbit

Randomic Rabbit is a web service that generates random numbers at random time intervals, and sends them to the connected user in real time. No memory about generated numbers is maintained.

## Dependencies

- [Docker](https://docs.docker.com/install/)
- [user access to docker CLI](https://docs.docker.com/install/linux/linux-postinstall/)
- [docker-compose](https://docs.docker.com/compose/install/)

## Project structure

The project is using the `yarn workspaces` monorepo style (embraced by the major JS OSS libraries/projects).
It utilizes `lerna` for automating tasks sequentially over each package.

## Packages

- `/packages/server` hosts the GraphQL server and the business logic
- `/packages/web` hosts the GraphQL client and the view logic

## Containers

- `marcofaggian/randomic-rabbit-server` the hosting environment of the GraphQL Server
- `marcofaggian/randomic-rabbit-web` the hosting environmento of the web client
- `redis` to provide the PubSub capabilities to the GraphQL Server

## Commands

Make is used to provide abstraction, but under the hood [`yarn`](https://yarnpkg.com/en/) package manager is used. To install it on UNIX-like distros (macOs included), type `make install-yarn` in the root directory.

- `make install` to install the project dependencies
- `make install-yarn` to install `yarn`
- `make install-dependencies` to install `yarn` and the project dependencies
- `make build` to build the packages
- `make package` to package into a Docker container
- `make run` to run the stack defined in the `/docker-compose.yml` file
- `make stop` to stop and remove the stack from Docker
- `make all` to run all the steps needed to start the container on a just cloned repo
- `make apply-changes` to stop build package and run the stack after a code update has been made

## Get Started

1. Make sure that you have all the dependencies installed
2. In the root folder, type `make all`
3. Hit the page [`localhost:3000`](http://localhost:3000)
4. Observe all the numbers being generated and arriving after a random interval elapsed
5. Observe the logs of the generation being followed in the terminal window where the point 2 has been ran
6. Interact with the [`GraphQL Playground`](http://localhost:4000)
