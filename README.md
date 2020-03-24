Test repo for prisma-client-js issue
[#283](https://github.com/prisma/prisma-client-js/issues/283)

Steps to reproduce the issue:

```sh
docker-compose up -d
docker-compose exec api yarn prisma2 migrate save --experimental
docker-compose exec api yarn prisma2 migrate up --experimental
docker-compose logs -f api
```

Now visit http://localhost:3000. You should see an "ok" on your screen.
Wait 15 minutes and then reload the page. You should get the following
error:

> Error in connector: Error querying the database: Connection to the
> server is closed.
