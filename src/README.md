## How to run

### Start the `docker-compose` services

> All commands should be run from the root folder of the repo
> unless we prefix it with a `cd` command

This will start running postgres and a hasura graphql engine

```bash
$ docker-compose up
```

### Start the hasura console

Install the CLI

```
$ brew install hasura-cli
```

Start the console

```bash
$ cd src/hasura
$ hasura console --admin-secret password --endpoint http://127.0.0.1:8082
```

### Setup your database by running migrations

```bash
$ hasura migrate apply --admin-secret password --endpoint http://127.0.0.1:8082
$ hasura metadata apply --admin-secret password --endpoint http://127.0.0.1:8082
```

### Starting the next site

```
$ cd src/wtf-is-next
$ yarn install
$ yarn run dev
```
